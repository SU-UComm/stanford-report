import React from "react";
import { cnb } from "cnbuilder";

export default function MediaRatio({
  children,
  imageUrl,
  imageAlt,
  aspectRatio = "card-small",
  videoUrl,
  rounded,
}) {
  return (
    <span
      className={cnb(
        "su-component-media-ratio su-overflow-hidden su-relative su-size-full su-block",
        aspectRatio === "card-small" && "su-aspect-[3/2]",
        aspectRatio === "card-medium" && "su-aspect-[3/2]",
        aspectRatio === "card-large" && "su-aspect-[3/2]",
        aspectRatio === "card-featured" && "su-aspect-[3/2]",
        aspectRatio === "square" && "su-aspect-[1/1]",
        aspectRatio === "video" && "su-aspect-[16/9]",
        aspectRatio === "vertical-video" && "su-aspect-[9/16]",
        rounded && "su-rounded-3xl"
      )}
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
