import React from "react";

export default function EmbedVideo(props) {
  const { videoId, className, noAutoPlay } = props;

  return (
    <iframe
      width="560"
      height="315"
      className={className}
      src={`https://www.youtube.com/embed/${videoId}?si=vYU81uVmaV7GSju2&amp;autoplay=${
        noAutoPlay ? 0 : 1
      }&amp;controls=1&amp;rel=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  );
}
