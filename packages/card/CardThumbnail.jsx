import React, { useState } from "react";
import VideoPlay from "../SVG-library/VideoPlay";
import MediaRatio from "../media/MediaRatio";
import Modal from "../modal/ModalWrapper";
import EmbedVideo from "../media/EmbedVideo";

export default function CardThumbnail({
  imageUrl,
  alt,
  aspectRatio,
  videoUrl,
  size = "small",
  title = "",
  videoIconClasses,
}) {
  const videoPlayClasses = new Map();
  videoPlayClasses.set(
    "featured",
    "su-left-13 su-bottom-13 md:su-left-27 md:su-bottom-27 [&>svg]:su-size-40 [&>svg]:md:su-size-60"
  );
  videoPlayClasses.set("large", "su-left-13 su-bottom-13 [&>svg]:su-size-40");
  videoPlayClasses.set(
    "medium",
    "su-left-27 su-bottom-27 [&>svg]:su-size-40 [&>svg]:md:su-size-60"
  );
  videoPlayClasses.set(
    "small",
    "su-left-13 su-bottom-13 [&>svg]:su-w-40 [&>svg]:su-h-40"
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return videoUrl ? (
    <>
      <button
        className="su-component-card-thumbnail su-group su-block su-relative su-z-10 su-size-full"
        type="button"
        aria-haspopup="dialog"
        onClick={() => handleClick()}
      >
        <MediaRatio
          imageUrl={imageUrl}
          imageAlt={`Open video ${alt || ""} in a modal`}
          aspectRatio={aspectRatio}
        >
          {videoUrl && (
            <span
              className={`su-absolute ${videoPlayClasses.get(
                size
              )} ${videoIconClasses}`}
            >
              <VideoPlay />
            </span>
          )}
        </MediaRatio>
      </button>
      {isModalOpen && (
        <Modal
          titleId="image-gallery-modal"
          title="Modal"
          onClose={handleCloseModal}
        >
          <EmbedVideo videoId={videoUrl} title={`Watch ${title}`} />
        </Modal>
      )}
    </>
  ) : (
    <div className="su-component-card-thumbnail su-w-full su-h-full">
      <MediaRatio
        imageUrl={imageUrl}
        imageAlt={alt}
        aspectRatio={aspectRatio}
      />
    </div>
  );
}
