import React, { useState } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { cnb } from "cnbuilder";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import EmbedVideo from "../../packages/media/EmbedVideo";
import Modal from "../../packages/modal/ModalWrapper";
import VideoPlay from "../../packages/SVG-library/VideoPlay";

/**
 * Leadership hero
 *
 * @param {string} title
 * Page/story title
 *
 * @param {string} pubDateFormatted
 * Publish date
 *
 * @param {string} topic
 * Topic taxonomy term, linked to topic page
 *
 * @param {string} summary
 * Story summary
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function StandaloneVisualHero(props) {
  const { title, pubDateFormatted, topic, summary, media } = props;

  const hasTopicLink = !!(
    topic &&
    topic.asset_url !== null &&
    topic.asset_url !== undefined &&
    topic.asset_url !== ""
  );
  const hasTopicText = !!(
    topic &&
    topic.asset_name !== null &&
    topic.asset_name !== undefined &&
    topic.asset_name !== ""
  );
  const TopicTag = hasTopicLink ? "a" : "span";

  return (
    <Container width="wide" className="su-rs-pt-6 su-rs-mb-3 lg:su-rs-mb-5">
      <div className="su-grid su-gap su-grid-cols-6 md:su-grid-cols-12">
        <div className="su-col-span-6 su-col-start-1 md:su-col-span-10 md:su-col-start-2">
          <div className="su-flex su-justify-between su-flex-wrap">
            <span className="su-flex su-items-center su-justify-center su-text-16 md:su-basefont-23">
              <time className="su-m-0 su-mr-4 su-font-semibold">
                {pubDateFormatted}
              </time>
            </span>
            {hasTopicText && (
              <TopicTag
                className={cnb(
                  "su-font-semibold su-text-digital-red dark:su-text-dark-mode-red su-no-underline ",
                  hasTopicLink ? "hocus:su-underline" : ""
                )}
                href={hasTopicLink ? topic.asset_url : false}
              >
                {topic.asset_name}
              </TopicTag>
            )}
          </div>
          <h1 className="su-mt-32 sm:su-mt-45 xl:su-mt-58 su-font-serif">
            {title}
          </h1>
          {summary && (
            <XssSafeContent
              className="su-font-serif su-text-21 md:su-text-28 su-rs-mt-2 *:last:su-mb-0"
              content={summary}
            />
          )}
        </div>

        {media.featureVideo.id && (
          <div className="su-col-span-6 su-col-start-1 md:su-col-span-12 md:su-col-start-1 su-w-full swiper basic-story__header-slider su-overflow-visible su-rs-mt-4">
            <figure className="basic-story__header-image su-col-span-full su-relative su-z-0">
              <div className="su-relative su-w-full">
                <Thumbnail
                  url={media.featureImage.url}
                  alt={media.featureImage.alt}
                  video={media.featureVideo.id}
                  type="video"
                  name={title}
                />
              </div>
              {(media.caption || media.credit) && (
                <figcaption className="su-text-16 su-text-black su-mb-0 su-rs-mt-neg1 dark:su-text-white">
                  {media.caption} {media.caption && media.credit && ` | `}
                  {media.credit}
                </figcaption>
              )}
            </figure>
          </div>
        )}
      </div>
    </Container>
  );
}

function Thumbnail({ url, alt, video, type, name = "" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // events
  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
            <EmbedVideo videoId={video} title={`Watch ${name}`} />
          </Modal>
        )}
      </>
    ) : (
      <div className="su-relative su-max-w-full su-h-0 su-pb-[56.25%] su-overflow-hidden">
        <EmbedVideo
          className="su-absolute su-top-0 su-left-0 su-w-full su-h-full"
          videoId={video}
          noAutoPlay
          title={`Watch ${name}`}
        />
      </div>
    );
  }
}
