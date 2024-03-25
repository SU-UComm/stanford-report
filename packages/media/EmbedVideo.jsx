import React from "react";

export default function EmbedVideo(props) {
  const { videoId, className } = props;
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}?si=vYU81uVmaV7GSju2&amp;autoplay=1&amp;controls=1&amp;rel=0`}
      className={className}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  );
}
