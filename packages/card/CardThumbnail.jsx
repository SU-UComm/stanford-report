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
        className="su-component-card-thumbnail su-block su-relative su-z-10 su-w-full su-h-full"
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
            <div className={`su-absolute ${videoPlayClasses.get(size)}`}>
              <VideoPlay />
            </div>
          )}
        </MediaRatio>
      </button>
      {isModalOpen && (
        <Modal
          titleId="image-gallery-modal"
          title="Modal"
          onClose={handleCloseModal}
        >
          <div>
            <button onClick={handleCloseModal} type="button">
              Close
            </button>
            <EmbedVideo videoId={videoUrl} />
          </div>
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
