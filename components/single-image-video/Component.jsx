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
  videoThumbData,
}) {
  let captionCredit;
  const { url, attributes } = imageData;
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
      <section className="su-flex su-flex-col su-items-center su-gap-[8px] su-gap-[15px]">
        <div
          className={`su-relative${
            !vimeoid || !youtubeid
              ? " su-w-full"
              : " su-w-full su-aspect-[16/9]"
          }`}
        >
          {!vimeoid || !youtubeid ? (
            <img
              // src="https://picsum.photos/800"
              src={imageData.url}
              alt={imageData.attributes.alt}
              className="su-w-full su-object-cover"
              // className="su-w-full su-h-full su-absolute su-object-cover su-top-[50%] su-translate-y-[-50%]"
            />
          ) : (
            <button
              aria-haspopup="dialog"
              type="button"
              aria-label="Watch video"
              title="Watch video"
              className="su-cursor-pointer su-absolute su-top-0 su-left-0 su-w-full su-h-full"
              onClick={() => handleClick()}
            >
              <Video
                autoplay={autoplay}
                id={vimeoid}
                thumbnail={videoThumbData}
                handleIframeLoad={handleIframeLoad}
              />

              <div className="su-absolute su-bottom-[21.26px] su-left-[21.26px] su-hidden md:su-block [&>*]:md:su-w-[55.95px] [&>*]:md:su-h-[55.95px] [&>*]:lg:su-w-[100px] [&>*]:lg:su-h-[100px] lg:su-bottom-[38px] lg:su-left-[38px]">
                <VideoPlay />
              </div>
            </button>
          )}
        </div>

        {/* background=1 */}

        <div className="su-flex su-flex-col su-gap-[8px] su-items-center md:su-gap-[22px] su-w-full su-relative">
          <p className="su-m-0 su-text-[14px] su-max-w-[633px] su-leading-[16.72px] su-font-normal su-text-black-70 md:su-text-[16px] su-leading-[19.11px] md:su-text-left">
            {captionCredit}
          </p>

          {youtubeid && (
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
              <span className="[&>*]:su-fill-black-70 [&>*]:su-w-[25px] [&>*]:su-h-[25px] su-text-black-70 su-flex su-gap-[6px] su-items-center su-text-[16px] [&>*]:lg:su-h-[30px] [&>*]:lg:su-w-[30px] lg:su-absolute lg:su-top-0 lg:su-right-0">
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
  if (autoplay) {
    return (
      <iframe
        src={`https://player.vimeo.com/video/${id}?autoplay=1&loop=1&autopause=0&background=1`}
        className="su-w-full su-h-full su-absolute su-top-0 su-left-0 su-pointer-events-none"
        allow="autoplay; fullscreen"
        data-role="video-player"
        onLoad={handleIframeLoad}
        title="Video Player"
      />
    );
  }

  return <img src={thumbnail.url} alt={thumbnail.attributes.alt} />;
}
