import React from "react";

export default function MediaRatio({
  children,
  imageUrl,
  imageAlt,
  aspectRatio = "card",
  videoUrl,
}) {
  const aspectRatioMap = new Map();
  aspectRatioMap.set("card", "su-aspect-[50/33]");
  aspectRatioMap.set("square", "su-aspect-[1/1]");

  return (
    <div
      className={`su-component-media-ratio su-overflow-hidden su-relative su-w-full su-block ${aspectRatioMap.get(
        aspectRatio
      )}`}
    >
      {videoUrl && (
        // This is temporary and is likely to move to YouTube embeds
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video className="su-absolute su-object-cover su-object-center su-w-full su-h-full">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {imageUrl && (
        <img
          className="su-absolute su-object-cover su-object-center su-w-full su-h-full"
          src={imageUrl}
          alt={imageAlt}
        />
      )}
      {children}
    </div>
  );
}
