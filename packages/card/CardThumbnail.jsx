import React from "react";
import VideoPlay from "../SVG-library/VideoPlay";
import MediaRatio from "../media/MediaRatio";

export default function CardThumbnail({
  imageUrl,
  alt,
  aspectRatio,
  videoUrl,
  size = "small",
}) {
  const videoPlayClasses = new Map();
  videoPlayClasses.set(
    "featured",
    "su-left-[27px] su-bottom-[27px] [&>svg]:su-w-[60px] [&>svg]:su-h-[60px]"
  );
  videoPlayClasses.set(
    "large",
    "su-left-[13px] su-bottom-[13px] [&>svg]:su-w-[40px] [&>svg]:su-h-[40px]"
  );
  videoPlayClasses.set(
    "medium",
    "su-left-[27px] su-bottom-[27px] [&>svg]:su-w-[60px] [&>svg]:su-h-[60px]"
  );
  videoPlayClasses.set(
    "small",
    "su-left-[13px] su-bottom-[13px] [&>svg]:su-w-[40px] [&>svg]:su-h-[40px]"
  );

  return videoUrl && videoUrl.includes("http") ? (
    <button
      className="su-component-card-thumbnail su-block su-w-full su-h-full"
      type="button"
    >
      <MediaRatio
        imageUrl={imageUrl}
        imageAlt={alt}
        aspectRatio={aspectRatio}
        videoUrl={videoUrl}
      >
        {videoUrl && (
          <div className={`su-absolute ${videoPlayClasses.get(size)}`}>
            <VideoPlay />
          </div>
        )}
      </MediaRatio>
    </button>
  ) : (
    <div className="su-component-card-thumbnail">
      <MediaRatio imageUrl={imageUrl} imageAlt={alt} aspectRatio={aspectRatio}>
        {videoUrl && (
          <div className={`su-absolute ${videoPlayClasses.get(size)}`}>
            <VideoPlay />
          </div>
        )}
      </MediaRatio>
    </div>
  );
}
