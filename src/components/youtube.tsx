export const YouTube = ({ videoId, title }: { videoId: string; title: string }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allowFullScreen
      width="100%"
      height="100%"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};
// height="315"
