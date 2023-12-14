import React from "react";
import VideoPlay from "../SVG-library/VideoPlay";

export default function MediaThumbnail({
  imageUrl,
  alt,
  aspectRatio,
  mediaType,
}) {
  switch (mediaType) {
    case "video":
      return <Video url={imageUrl} alt={alt} aspectRatio={aspectRatio} />;
    default:
      return <Image url={imageUrl} alt={alt} aspectRatio={aspectRatio} />;
  }
}

function Video({ url, alt, aspectRatio }) {
  return (
    <div className={`su-h-[100%] su-w-[100%] su-relative ${aspectRatio}`}>
      <img
        className="su-absolute su-object-cover su-object-center su-w-full su-h-full"
        src={url}
        width="293"
        height="195"
        alt={alt}
      />

      <VideoPlay />

      <span className="sr-only">Watch video</span>
    </div>
  );
}

function Image({ url, alt, aspectRatio }) {
  return (
    <div
      className={`su-h-[100%] su-w-[100%] su-relative ${aspectRatio}`}
      data-testid="vertical-card-image-wrapper"
    >
      <img
        className="su-absolute su-object-cover su-object-center su-w-full su-h-full"
        src={url}
        alt={alt}
      />
    </div>
  );
}
