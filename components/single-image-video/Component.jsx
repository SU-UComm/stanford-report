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
  const { autoplay, vimeoid, youtubeid } = video;

  if (caption && credit) {
    captionCredit = `${caption} | ${credit}`;
  } else if (caption || credit) {
    captionCredit = caption || credit;
  }

  // su-h-[234px] md:su-h-[489px] lg:su-h-[871.33px]

  // state
  const [videoPlaying, setVideoPlaying] = useState("play");
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

    if (videoPlaying === "play") setPausePlayTitle("Pause looping video");
    else setPausePlayTitle("Play looping video");
  }, [videoPlaying, iframeNode]);

  // events
  const handleIframeLoad = ({ target }) => {
    setIframeNode(target);
  };

  return (
    <Container width={width}>
      <section className="su-flex su-flex-col su-items-center su-gap-8 su-gap-15">
        <div
          className={`su-relative${
            !youtubeid ? " su-w-full" : " su-w-full su-aspect-[16/9]"
          }`}
        >
          {!youtubeid ? (
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
              className="su-cursor-pointer su-absolute su-top-0 su-left-0 su-size-full"
              onClick={() => handleClick()}
            >
              <Video
                autoplay={autoplay}
                id={vimeoid}
                thumbnail={imageData}
                handleIframeLoad={handleIframeLoad}
              />

              <div className="su-absolute su-bottom-[21.26px] su-left-[21.26px] su-hidden md:su-block *:md:su-w-[55.95px] *:md:su-h-[55.95px] *:lg:su-w-100 *:lg:su-h-100 lg:su-bottom-38 lg:su-left-38">
                <VideoPlay />
              </div>
            </button>
          )}
        </div>

        {/* background=1 */}

        <div className="su-flex su-flex-col su-gap-8 su-items-center md:su-gap-22 su-w-full su-relative">
          <p className="su-m-0 su-text-14 su-max-w-[633px] su-leading-[16.72px] su-font-normal su-text-black-70 md:su-text-16 su-leading-[19.11px] md:su-text-left">
            {captionCredit}
          </p>

          {youtubeid && vimeoid && autoplay && (
            <button
              data-role="video-control"
              type="button"
              className="su-fill-black-70"
              onClick={() => {
                if (videoPlaying === "pause") {
                  setVideoPlaying("play");

                  return;
                }

                setVideoPlaying("pause");
              }}
            >
              <span className="*:su-fill-black-70 *:su-size-25 su-text-black-70 su-flex su-gap-6 su-items-center su-text-16 *:lg:su-h-30 *:lg:su-w-30 lg:su-absolute lg:su-top-0 lg:su-right-0">
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

function Video({ autoplay, id, thumbnail, handleIframeLoad }) {
  if (autoplay && id) {
    return (
      <iframe
        src={`https://player.vimeo.com/video/${id}?autoplay=1&loop=1&autopause=0&background=1`}
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
