import React, { useState, useEffect } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";
import EmbedVideo from "../../packages/media/EmbedVideo";
import { Carousel } from "../../packages/carousels/Carousels";
import Modal from "../../packages/modal/ModalWrapper";
import VideoPlay from "../../packages/SVG-library/VideoPlay";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

function readingTime(text) {
  if (!text) return 0;

  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

export default function basicStoryHero(props) {
  const { title, media, summary, pubDateFormatted, topic, mediaType } = props;

  // state
  const [readingTimeValue, setReadingTime] = useState(0);

  useEffect(() => {
    const content = document.querySelector(".su-page-content");

    if (content) {
      setReadingTime(() => readingTime(content.innerText));
    }
  });

  return (
    <Container width="wide">
      <div className="su-grid su-gap su-grid-cols-6 md:su-grid-cols-12 su-">
        <div className="su-col-span-6 su-col-start-1 md:su-col-span-10 md:su-col-start-2">
          <div className="su-flex su-gap-y-8 su-gap-x-16 su-justify-between su-flex-wrap su-text-16 md:su-basefont-23">
            <span className="su-flex su-items-center su-justify-center">
              <time className="su-m-0 su-mr-4 su-font-semibold">
                {pubDateFormatted}
              </time>
              <span className="su-reading-time su-reading-time-separator" />|{" "}
              {`${readingTimeValue} min read`}
            </span>

            {topic.asset_name && (
              <a
                href={topic.asset_url !== "" ? topic.asset_url : "#"}
                className="su-font-semibold su-text-digital-red dark:su-text-dark-mode-red su-no-underline hocus:su-underline"
              >
                {topic.asset_name}
              </a>
            )}
          </div>

          <h1 className="su-font-bold su-rs-mt-4 su-font-serif su-mb-0 xl:su-text-[6.4rem]">
            {title}
          </h1>
          <XssSafeContent
            className={[
              "su-font-serif su-intro-text su-mb-0 su-rs-mt-2 su-text-21 su-leading-[27.35px] md:su-text-28 md:su-leading-[36.47px]",
              "",
            ].join(" ")}
            content={summary}
            elementType="p"
          />
        </div>

        {/* If no media asset(s) are added, do not display this <div> */}
        {media.featureImage.id ||
        media.featureVideo.id ||
        media.carousel !== null ? (
          <div className="su-col-span-6 su-col-start-1 md:su-col-span-12 md:su-col-start-1 su-w-full swiper basic-story__header-slider su-overflow-visible su-rs-mt-4">
            <figure className="basic-story__header-image su-col-span-full su-relative su-z-0">
              <div className="su-relative su-w-full">
                <Thumbnail
                  url={media.featureImage.url}
                  alt={media.featureImage.alt}
                  video={media.featureVideo.id}
                  type={mediaType}
                  carousel={media.carousel}
                />

                <div className="su-absolute su-top-[-1%] dark:su-top-0 su-left-0 su-h-[101%] su-w-full su-bg-repeat su-bg-center su-bg-cover su-pointer-events-none" />
              </div>
              {mediaType !== "carousel" && (media.caption || media.credit) && (
                <figcaption className="su-text-16 su-text-black su-mb-0 su-rs-mt-neg1 dark:su-text-white">
                  {media.caption} {media.caption && media.credit && ` | `}
                  {media.credit}
                </figcaption>
              )}
            </figure>
          </div>
        ) : null}
      </div>
    </Container>
  );
}

function Thumbnail({ url, alt, video, type, carousel }) {
  // state
  const slides = [];
  const [isModalOpen, setIsModalOpen] = useState(false);

  // events
  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (type === "image") {
    return (
      <img
        src={url}
        alt={alt}
        className="su-relative su-w-full su-max-w-full dark:su-bg-black"
      />
    );
  }

  if (type === "carousel") {
    carousel.forEach((slide) => {
      slides.push(
        <>
          <div className="su-aspect-[3/2] su-relative su-bg-fog-light dark:su-bg-black">
            <img
              src={slide.asset_url}
              alt={slide.asset_attribute_alt}
              className="su-absolute su-top-0 su-left-0 su-w-full su-h-full su-object-scale-down su-object-center"
            />
          </div>
          {slide.asset_attribute_caption && (
            <figcaption className="su-text-16 su-text-black su-mb-0 su-rs-mt-neg1 dark:su-text-white">
              {slide.asset_attribute_caption}
            </figcaption>
          )}
        </>
      );
    });

    return <Carousel slides={slides} variant="basicstory" />;
  }

  if (type === "video") {
    return url !== "" ? (
      <>
        <button
          type="button"
          aria-haspopup="dialog"
          className="su-w-full su-aspect-[16/9] su-video-trigger"
          onClick={handleClick}
        >
          <img
            src={url}
            alt={alt}
            className="su-w-full su-h-full su-absolute su-top-0 su-left-0 su-object-cover su-object-center"
          />

          <span className="su-play-button-icon-hero su-transition-all su-absolute su-bottom-20 su-left-20 *:su-w-[40px] *:su-h-[40px] *:md:su-w-[60px] *:md:su-h-[60px] *:lg:su-w-[100px] *:lg:su-h-[100px]">
            <VideoPlay />
          </span>
        </button>

        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            <EmbedVideo videoId={video} />
          </Modal>
        )}
      </>
    ) : (
      <div className="su-relative su-max-w-full su-h-0 su-pb-[56.25%] su-overflow-hidden">
        <EmbedVideo
          className="su-absolute su-top-0 su-left-0 su-w-full su-h-full"
          videoId={video}
        />
      </div>
    );
  }
}
