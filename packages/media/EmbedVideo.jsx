import React from "react";

export default function EmbedVideo(videoId) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId.videoId}?si=vYU81uVmaV7GSju2&amp;autoplay=1&amp;controls=1&amp;rel=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  );
}
