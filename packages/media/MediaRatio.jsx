import React from "react";

export default function MediaRatio({
  children,
  imageUrl,
  imageAlt,
  aspectRatio = "card-small",
  videoUrl,
}) {
  const aspectRatioMap = new Map();
  aspectRatioMap.set("card-small", "su-aspect-[3/2]");
  aspectRatioMap.set("card-medium", "su-aspect-[3/2]");
  aspectRatioMap.set("card-large", "su-aspect-[3/2]");
  aspectRatioMap.set("card-featured", "su-aspect-[16/9]");
  aspectRatioMap.set("square", "su-aspect-[1/1]");
  aspectRatioMap.set("vertical-video", "su-aspect-[9/16]");

  return (
    <span
      className={`su-component-media-ratio su-overflow-hidden su-relative su-size-full su-block ${aspectRatioMap.get(
        aspectRatio
      )}`}
    >
      {videoUrl && (
        // This is temporary and is likely to move to YouTube embeds
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video className="su-absolute su-object-cover su-object-center su-size-full">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {imageUrl && (
        <img
          className="su-absolute su-object-cover su-object-center su-size-full"
          src={imageUrl}
          alt={imageAlt}
        />
      )}
      {children}
    </span>
  );
}
