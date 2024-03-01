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
}) {
  const videoPlayClasses = new Map();
  videoPlayClasses.set(
    "featured",
    "su-left-27 su-bottom-27 [&>svg]:su-w-40 [&>svg]:su-h-40 [&>svg]:md:su-w-60 [&>svg]:md:su-h-60"
  );
  videoPlayClasses.set(
    "large",
    "su-left-13 su-bottom-13 [&>svg]:su-w-40 [&>svg]:su-h-40"
  );
  videoPlayClasses.set(
    "medium",
    "su-left-27 su-bottom-27 [&>svg]:su-w-40 [&>svg]:su-h-40 [&>svg]:md:su-w-60 [&>svg]:md:su-h-60"
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
        className="su-component-card-thumbnail su-block su-relative su-z-10 su-size-full"
        type="button"
        aria-haspopup="dialog"
        onClick={() => handleClick()}
      >
        <MediaRatio
          imageUrl={imageUrl}
          imageAlt={alt}
          aspectRatio={aspectRatio}
        >
          {videoUrl && (
            <span className={`su-absolute ${videoPlayClasses.get(size)}`}>
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
          <EmbedVideo videoId={videoUrl} />
        </Modal>
      )}
    </>
  ) : (
    <div className="su-component-card-thumbnail">
      <MediaRatio
        imageUrl={imageUrl}
        imageAlt={alt}
        aspectRatio={aspectRatio}
      />
    </div>
  );
}
