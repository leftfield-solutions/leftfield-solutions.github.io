import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For handling GitHub Flavored Markdown (tables, etc.)
import { Typography } from '@mui/material';
import rehypeRaw from 'rehype-raw'; // Allow HTML within Markdown
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a code
import readme from './README.md?raw';

export const CLI = () => {
  const [markdown, setMarkdown] = useState<string | null>(null);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const text = readme;
        let trimmedMarkdown = text.split('## Disclaimer')[0];
        trimmedMarkdown = trimmedMarkdown.split('# Commands')[1];
        setMarkdown(trimmedMarkdown);
      } catch (e: any) {
        console.error('Failed to fetch README.md:', e);
      }
    };

    fetchReadme();
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Commands
      </Typography>
      <Markdown
        rehypePlugins={[rehypeRaw, remarkGfm]}
        children={markdown}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter {...rest} PreTag="div" children={String(children).replace(/\n$/, '')} language={match[1]} style={dracula} ref={undefined} />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          }
        }}
      />
    </>
  );
};
