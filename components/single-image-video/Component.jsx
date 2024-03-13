import React, { useState, useEffect } from "react";

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
  // videoThumbData,
}) {
  let captionCredit;
  // const { url, attributes } = imageData;
  const { vimeoid, youtubeid } = video;

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

        // console.log(top);

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

  return (
    <Container width={width}>
      <section className="su-flex su-flex-col su-items-center su-gap-8 su-gap-15">
        <div
          className={`su-relative${
            !youtubeid ? " su-w-full" : " su-w-full su-aspect-[16/9]"
          }`}
        >
          {!youtubeid || !vimeoid ? (
            <img
              // src="https://picsum.photos/800"
              src={imageData.url}
              alt={imageData.attributes.alt}
              className="su-w-full su-object-cover"
              // className="su-size-full su-absolute su-object-cover su-top-[50%] su-translate-y-[-50%]"
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
                id={vimeoid}
                thumbnail={imageData}
                handleIframeLoad={handleIframeLoad}
              />

              <div
                className={`${playButtonIconSize} su-play-button-icon *:md:su-size-40 su-play-btn su-transition-all su-absolute su-bottom-20 su-left-20 md:su-left-27 md:su-bottom-27 md:su-block *:md:su-size-[55.95px]`}
              >
                <VideoPlay />
              </div>
            </button>
          )}
        </div>

        {/* background=1 */}

        <div className="su-flex su-gap-8 md:su-gap-22 su-w-full su-relative su-flex-col su-items-center lg:su-flex-row lg:su-items-start">
          <div className="su-mx-auto su-flex su-justify-center su-w-full">
            <p className="dark:su-text-white su-m-0 su-text-14 su-max-w-[633px] su-leading-[16.72px] su-font-normal su-text-black-70 md:su-text-16 su-leading-[19.11px] md:su-text-left">
              {captionCredit}
            </p>
          </div>

          {youtubeid && vimeoid && (
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
            <EmbedVideo videoId={youtubeid} />
          </Modal>
        )}
      </section>
    </Container>
  );
}

function Video({ id, thumbnail, handleIframeLoad }) {
  if (id) {
    return (
      <iframe
        src={`https://player.vimeo.com/video/${id}?autoplay=0&loop=1&autopause=0&background=1`}
        className="su-size-full su-absolute su-top-0 su-left-0 su-pointer-events-none"
        allow="autoplay; fullscreen"
        data-role="video-player"
        onLoad={handleIframeLoad}
        title="Video Player"
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
