import React, { useState } from "react";
import { Container } from "../../packages/grids/Container";
import Modal from "../../packages/modal/ModalWrapper";
import EmbedVideo from "../../packages/media/EmbedVideo";
import VideoPlay from "../../packages/SVG-library/VideoPlay";
import { Carousel } from "../../packages/carousels/Carousels";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

function readingTime(text) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

export default function basicStoryHero(props) {
  const { title, media, summary, pubDateFormatted, topic, mediaType } = props;

  return (
    <Container>
      <div>
        <div className="su-px-0 md:su-px-[114px]">
          <div className="su-flex su-justify-between su-flex-wrap">
            <span className="su-flex su-items-center su-justify-center su-text-[16px] su-leading-[20px] md:su-text-[21px] md:su-leading-[26.25px] md:su-basefont-23 lg:su-text-[23px] lg:su-text-[28.75px]">
              <time className="su-m-0 su-mr-[4px] su-font-semibold">
                {pubDateFormatted}
              </time>
              <span className="su-reading-time su-reading-time-separator" />
            </span>

            <span className="su-font-semibold su-text-digital-red dark:su-text-dark-mode-red su-leading-[19.11px] su-text-[16px] md:su-leading-[25.08px] md:su-text-[21px] md:su-text-[24px] lg:su-text-[24px] lg:su-leading-[28.66px]">
              {topic.asset_name}
            </span>
          </div>

          <h1 className="su-text-[39px] su-leading-[46.57px] su-font-bold su-mt-[32px] md:su-text-[54px] md:su-mt-[45px] md:su-leading-[64.8px] lg:su-text-[64px] lg:su-mt-[58px] lg:su-leading-[76.43px] su-font-serif">
            {title}
          </h1>

          <p className="su-font-serif su-intro-text su-text-[21px] su-leading-[27.35px] su-m-0 su-mt-[32px] md:su-mt-[38px] md:su-text-[28px] md:su-leading-[36.47px]">
            {summary}
          </p>
        </div>

        <div className="swiper basic-story__header-slider su-overflow-visible su-mt-[32px] md:su-mt-[58px] lg:su-mt-[72px]">
          <figure className="basic-story__header-image su-flex su-flex-col su-gap-[6px] su-col-span-full su-relative su-z-0 md:su-gap-[18px] lg:su-gap-[15px]">
            <div className="su-relative">
              <Thumbnail
                url={media.featureImage.url}
                alt={media.featureImage.alt}
                video={media.featureVideo.id}
                type={mediaType}
                carousel={media.carousel}
              />

              <div className="su-absolute su-top-[-1%] dark:su-top-0 su-left-0 su-h-[101%] su-w-full su-bg-repeat su-bg-center su-bg-cover su-pointer-events-none" />
            </div>

            <figcaption className="su-text-[16px] su-text-black su-m-0 su-leading-[19.11px] su-mt-[12px] dark:su-text-[white] md:su-text-[16px] md:su-leading-[19.11px]">
              {media.caption} | {media.credit}
            </figcaption>
          </figure>
        </div>
      </div>
    </Container>
  );
}

function Thumbnail({ url, alt, video, type, carousel }) {
  // state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const slides = [];

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
        className="su-relative su-w-full su-h-[300px] md:su-h-[500px] lg:su-h-[764px] su-object-cover su-object-center"
      />
    );
  }

  if (type === "carousel") {
    carousel.forEach((slide) => {
      slides.push(
        <img
          // src="https://picsum.photos/700"
          src={slide.asset_url}
          alt={slide.asset_attribute_alt}
          className="su-relative su-w-full su-h-[300px] md:su-h-[500px] lg:su-h-[764px] su-object-cover su-object-center"
        />
      );
    });

    return <Carousel slides={slides} variant="media" />;
  }

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        className="su-w-full"
        onClick={handleClick}
      >
        <img
          src={url}
          alt={alt}
          className="su-relative su-w-full su-h-[300px] md:su-h-[500px] lg:su-h-[764px] su-object-cover su-object-center"
        />

        <span className="su-absolute su-bottom-[20px] su-left-[20px]">
          <VideoPlay />
        </span>
      </button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <EmbedVideo videoId={video} />
        </Modal>
      )}
    </>
  );
}