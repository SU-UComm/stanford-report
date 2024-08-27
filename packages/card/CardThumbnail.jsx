import React, { useState } from "react";
import { cnb } from "cnbuilder";
import MediaRatio from "../media/MediaRatio";
import Modal from "../modal/ModalWrapper";
import EmbedVideo from "../media/EmbedVideo";
import { FAIcon } from "../icons/FAIcon";

const videoPlayClasses = {
  small: "su-left-13 su-bottom-13 [&>svg]:su-text-[4rem]",
  medium:
    "su-left-13 su-bottom-13 md:su-left-27 md:su-bottom-27 [&>svg]:su-text-[4rem] [&>svg]:md:su-text-[6rem]",
  large: "su-left-13 su-bottom-13 [&>svg]:su-text-[4rem]",
  featured:
    "su-left-13 su-bottom-13 md:su-left-27 md:su-bottom-27 [&>svg]:su-text-[4rem] [&>svg]:md:su-text-[6rem]",
  "vertical-video":
    "su-left-32 su-bottom-34 sm:su-left-48 sm:su-bottom-61 lg:su-left-32 lg:su-bottom-34 2xl:su-left-48 2xl:su-bottom-61 [&>svg]:su-text-[6rem]",
};

export default function CardThumbnail({
  imageUrl,
  alt,
  aspectRatio,
  videoUrl,
  size = "small",
  title = "",
  videoIconClasses,
}) {
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
          {size === "vertical-video" && (
            <div className="su-absolute su-inset-0 su-bg-gradient-to-t su-from-black-true/90 su-via-30% su-via-black-true/60 su-pointer-events-none su-z-20" />
          )}
          {videoUrl && (
            <span
              className={cnb(
                "su-absolute su-leading-none su-z-30",
                // eslint-disable-next-line security/detect-object-injection
                videoPlayClasses[size],
                videoIconClasses
              )}
            >
              <FAIcon
                data-testid="svg-videoplay"
                set="regular"
                icon="circle-play"
                className="su-text-white dark:su-text-white su-drop-shadow-[0px_10px_20px_rgba(0,0,0,0.30)"
              />
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
          <EmbedVideo
            isVertical={size === "vertical-video"}
            videoId={videoUrl}
            title={`Watch ${title}`}
          />
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
