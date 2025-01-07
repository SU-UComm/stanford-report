import React, { useState, useEffect } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { cnb } from "cnbuilder";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { Pause, Play } from "../../packages/SVG-library/SVG";
import VideoPlay from "../../packages/SVG-library/VideoPlay";
import Modal from "../../packages/modal/ModalWrapper";
import EmbedVideo from "../../packages/media/EmbedVideo";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function SingleImageVideo({
  caption,
  credit,
  width,
  imageData,
  video,
  section,
  marginTop,
  marginBottom,
}) {
  let captionCredit;

  if (caption && credit) {
    captionCredit = `${caption} | ${credit}`;
  } else if (caption || credit) {
    captionCredit = caption || credit;
  }

  // su-h-[234px] md:su-h-[489px] lg:su-h-[871.33px]

  // state
  const [videoPlaying, setVideoPlaying] = useState("pause");
  const [pausePlayTitle, setPausePlayTitle] = useState("Pause looping video");
  const [iframeNode, setIframeNode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // events
  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // effects
  useEffect(() => {
    if (iframeNode) {
      iframeNode?.contentWindow.postMessage(
        JSON.stringify({ method: videoPlaying }),
        "*"
      );
    }

    if (iframeNode && !iframeNode.dataset.loaded) {
      setTimeout(() => {
        const { top } = iframeNode.getBoundingClientRect();

        if (top < window.innerHeight) {
          setVideoPlaying("play");

          iframeNode.dataset.loaded = "true";
        }
      }, 100);
    }

    if (videoPlaying === "play") setPausePlayTitle("Pause looping video");
    else setPausePlayTitle("Play looping video");

    const onScroll = () => {
      if (iframeNode) {
        const { top } = iframeNode.getBoundingClientRect();

        if (
          top <= window.innerHeight * 0.5 &&
          top > -(window.innerHeight * 0.5)
        ) {
          setVideoPlaying("play");
        } else if (top >= window.innerHeight * 0.5) {
          setVideoPlaying("pause");
        }

        if (top <= -(window.innerHeight * 0.5)) {
          setVideoPlaying("pause");
        }
      }
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [videoPlaying, iframeNode]);

  // events
  const handleIframeLoad = ({ target }) => {
    setIframeNode(target);
  };

  const playButtonIconSize =
    width === "Wide"
      ? "*:su-w-[40px] *:su-h-[40px] *:md:su-w-[60px] *:md:su-h-[60px] *:lg:su-w-[100px] *:lg:su-h-[100px] *:lg:su-size-100 lg:su-bottom-38 lg:su-left-38"
      : "*:su-w-[40px] *:md:su-w-[60px]";

  const videoTitle = video?.heading ? video.heading : "";

  return (
    <Container width={width} marginTop={marginTop} marginBottom={marginBottom}>
      <section className="su-flex su-flex-col su-items-center">
        {(section?.title || section?.summary) && (
          <div className="su-w-full md:su-max-w-[60.7rem] lg:su-max-w-[63.6rem] su-mx-auto su-rs-mb-3">
            {section?.title && (
              <h2
                className={cnb(
                  "su-text-center su-text-[3.5rem] su-leading-[4.179rem] su-font-bold",
                  "md:su-text-[4.0rem] md:su-leading-[4.776rem]",
                  "lg:su-text-[4.9rem] lg:su-leading-[6.37rem]"
                )}
              >
                {section?.title}
              </h2>
            )}

            {section?.summary && (
              <XssSafeContent
                className={cnb(
                  section.summaryAlign === "center"
                    ? "su-text-center"
                    : "su-text-left",
                  "su-wysiwyg-content su-rs-mt-0 su-text-[1.8rem] su-leading-[2.25rem] su-mt-[1.5rem]",
                  "md:su-text-[1.9rem] md:su-leading-[2.375rem] md:su-mt-[1.9rem]",
                  "lg:su-text-[2.1rem] lg:su-leading-[2.625rem]"
                )}
                elementType="div"
                data-test="component-story-lead"
                content={section?.summary}
              />
            )}
          </div>
        )}
        <div
          className={cnb(
            "su-relative",
            video && !video.youtubeid
              ? " su-w-full"
              : " su-w-full su-aspect-[16/9]"
          )}
        >
          {!video ? (
            <img
              src={imageData.url}
              alt={imageData.attributes.alt}
              className="su-w-full su-object-cover"
            />
          ) : (
            <button
              aria-haspopup="dialog"
              type="button"
              aria-label="Watch video"
              title="Watch video"
              className="su-cursor-pointer su-absolute su-top-0 su-left-0 su-size-full su-play-scale"
              onClick={() => handleClick()}
            >
              <Video
                id={video.vimeoid}
                thumbnail={imageData}
                handleIframeLoad={handleIframeLoad}
                heading={videoTitle}
              />

              <span
                className={cnb(
                  playButtonIconSize,
                  "su-play-button-icon su-play-btn su-transition-all su-absolute su-bottom-20 su-left-20 md:su-left-27 md:su-bottom-27 md:su-block"
                )}
              >
                <VideoPlay />
              </span>
            </button>
          )}
        </div>

        <div className="su-flex su-gap-8 md:su-gap-22 su-w-full su-relative su-flex-col su-items-center lg:su-flex-row lg:su-items-start su-mt-8 md:su-mt-9 lg:su-mt-15">
          <div className="su-mx-auto su-flex su-justify-center su-w-full">
            <p className="dark:su-text-white su-m-0 su-text-14 su-max-w-[633px] su-leading-[16.72px] su-font-normal su-text-black-70 md:su-text-16 md:su-leading-[19.11px] md:su-text-left">
              {captionCredit}
            </p>
          </div>

          {video && video.youtubeid && video.vimeoid && (
            <button
              data-role="video-control"
              type="button"
              className="su-text-black-70 su-relative su-shrink-0 dark:su-text-white hocus:su-text-digital-red dark:hocus:su-text-dark-mode-red hocus:su-underline"
              onClick={() => {
                if (videoPlaying === "pause") {
                  setVideoPlaying("play");

                  return;
                }

                setVideoPlaying("pause");
              }}
            >
              <span className="*:su-size-14 su-flex su-gap-6 su-items-center su-text-14 lg:su-top-0 lg:su-right-0">
                {videoPlaying === "pause" ? <Play /> : <Pause />}
                {pausePlayTitle}
              </span>
            </button>
          )}
        </div>

        {isModalOpen && (
          <Modal
            titleId="image-gallery-modal"
            title="Modal"
            onClose={handleCloseModal}
          >
            <EmbedVideo
              videoId={video.youtubeid}
              title={`Watch ${videoTitle}`}
            />
          </Modal>
        )}
      </section>
    </Container>
  );
}

function Video({ id, thumbnail, handleIframeLoad, heading }) {
  if (id) {
    return (
      <iframe
        src={`https://player.vimeo.com/video/${id}?autoplay=0&loop=1&autopause=0&background=1`}
        className="su-size-full su-absolute su-top-0 su-left-0 su-pointer-events-none"
        allow="autoplay; fullscreen"
        data-role="video-player"
        onLoad={handleIframeLoad}
        title={`Watch ${heading}`}
      />
    );
  }

  return (
    <img
      src={thumbnail.url}
      alt={thumbnail.attributes.alt}
      className="su-size-full"
    />
  );
}
