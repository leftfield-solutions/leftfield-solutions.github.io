import cliIcon from '../../assets/products/cli.png';
import TerminalIcon from '@mui/icons-material/Terminal';
import { CLI } from './cli';
import type { JSX } from 'react';
import { Image } from '@/components/image';
export interface IProduct {
  id: string;
  isFeatured: boolean;
  title: string;
  icon: React.ElementType;
  image: () => JSX.Element;
  description: string;
  detail: () => JSX.Element;
}

//image: () => Image({ src: cliIcon, alt: 'CLI Icon', maxWidth: 300 }),
//image: () => React.createElement(YouTube, { videoId: 'dQw4w9WgXcQ', title: 'SPFx Cli Video' }),
export const ProductData: IProduct[] = [
  {
    id: '22118ba2-eb96-4271-ab77-3558997d571c',
    isFeatured: true,
    title: '@leftfield-solutions/spfx-cli',
    icon: TerminalIcon,
    image: () => Image({ src: cliIcon, alt: 'CLI Icon' }),
    description: `<div>
          <p class='pb-3 '>
            A command-line interface (CLI) designed to streamline and enhance your SharePoint Framework (SPFx) development workflow. This tool provides a range
            of commands to simplify common tasks, automate processes, and improve overall productivity when building SharePoint solutions.
          </p>
          <p class='pb-3'>
            <b>Completely Free to Use!</b> This tool is offered at no cost to the community.
          </p>
          <p>Install via npm:<br/><div class="codeContainer">npm install @leftfield-solutions/spfx-cli -g</div></p>
        </div>`,
    detail: CLI
  }
];
