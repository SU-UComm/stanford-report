import React, { useState, useEffect, useRef } from "react";
import { cnb } from "cnbuilder";
import Modal from "../../packages/modal/ModalWrapper";
import EmbedVideo from "../../packages/media/EmbedVideo";
import { Container } from "../../packages/grids/Container";
import { FAIcon } from "../../packages/icons/FAIcon";

/**
 * Campaign Hero
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function CampaignHero({ bkgConfig, textConfig, quoteConfig }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [iframeNode, setIframeNode] = useState(null);
  const iframeRef = useRef(null);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Toggles play/pause when button is clicked
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Send postMessage to Vimeo iframe to play/pause video
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ method: isPlaying ? "play" : "pause" }),
        "*"
      );
    }
  }, [isPlaying]);

  // Pause video when it's out of viewport using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsPlaying(entry.isIntersecting);
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    const iframe = iframeRef.current;
    if (iframe) observer.observe(iframe);

    return () => {
      if (iframe) observer.unobserve(iframe);
    };
  }, []);

  return (
    <Container width="full" paddingX={false} className="su-relative">
      <section>
        <div className="su-sticky su-h-screen su-top-0">
          {/* Background video */}
          {bkgConfig.type === "Video" && bkgConfig.bkgVideo ? (
            <div className="su-relative su-w-screen su-h-screen su-overflow-hidden">
              <iframe
                ref={iframeRef}
                src={`${bkgConfig.bkgVideo}?background=1`}
                title="video"
                className="bkg-loop su-absolute su-box-border su-aspect-[16/9] su-min-w-full su-min-h-full su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={bkgConfig.bkgImage}
              // src={bgImageData.url}
              className="su-object-cover su-size-full"
              alt=""
            />
          )}
          {/* Gradient overlay */}
          <div
            className="su-absolute su-block su-size-full su-top-0 su-bg-black-true/20 su-z-[1]"
            aria-hidden="true"
          />
        </div>

        <div className="su-cc su-relative su-z-[2] su-mt-[-70vh] lg:su-rs-pb-6 su-bg-gradient-to-t su-from-black-true">
          <h1
            className={cnb(
              "su-fluid-type-6 su-text-white su-text-shadow-lg su-text-center su-max-w-1000 su-mx-auto su-mb-0 su-text-balance",
              !quoteConfig.include && "su-mb-450"
            )}
          >
            {textConfig.title}
          </h1>
          {quoteConfig.include ? (
            <>
              <p
                className={
                  quoteConfig.quote
                    ? "su-rs-mt-3 su-rs-mb-1 su-text-white su-text-center su-type-3 su-leading-snug su-max-w-800 su-mx-auto"
                    : ""
                }
              >
                {textConfig.intro}
              </p>
              {quoteConfig.youtubeId && (
                <>
                  <button
                    className="su-component-card-thumbnail su-block su-relative su-z-10 su-size-full hocus:su-animate-pulse hocus:su-scale-110 su-transition-all su-w-fit su-mx-auto su-rs-mb-4"
                    type="button"
                    aria-haspopup="dialog"
                    aria-label="Open full video in a modal"
                    onClick={() => handleClick()}
                  >
                    <FAIcon
                      icon="circle-play"
                      set="regular"
                      width={75}
                      className="su-text-[4.5rem] md:su-text-[7.5rem] su-text-white"
                    />
                  </button>
                  {isModalOpen && (
                    <Modal
                      titleId="video-modal"
                      title="Modal"
                      onClose={handleCloseModal}
                    >
                      <EmbedVideo videoId={quoteConfig.youtubeId} />
                    </Modal>
                  )}
                </>
              )}
              {bkgConfig.type === "Video" && bkgConfig.bkgVideo && (
                <div className="su-max-w-1200 su-mx-auto">
                  <button
                    type="button"
                    onClick={togglePlayPause}
                    className="su-group su-flex su-gap-10 su-items-end su-text-16 su-leading-display su-mr-0 su-ml-auto su-text-white su-w-fit hocus-visible:su-underline su-underline-offset-2 su-py-14"
                  >
                    {`${!isPlaying ? "Play" : "Pause"} background`}
                    <FAIcon
                      icon={!isPlaying ? "circle-play" : "circle-pause"}
                      set="regular"
                      width={20}
                      className="su-text-20 su-text-white group-hocus-visible:su-animate-pulse group-hocus-visible:su-scale-110"
                    />
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="su-type-3 su-max-w-1200 su-text-white su-font-serif su-border-l su-border-color su-border-black-30 su-pl-32 md:su-pl-48 2xl:su-pl-200 su-py-38 su-mb-0 2xl:su-ml-80">
              {textConfig.intro}
            </p>
          )}
          {quoteConfig.include === true && (
            <div className="su-hidden su-rs-pt-2 su-rs-px-5 su-text-white lg:su-flex su-items-center su-flex-col su-gap-44 lg:su-flex-row-reverse su-border-t su-border-black-30 su-relative su-z-[2] su-max-w-1200 su-mx-auto">
              <div className="su-rounded-full su-size-160 md:su-size-200 2xl:su-size-300 su-shrink-0 su-overflow-hidden">
                <img
                  src={quoteConfig.image}
                  alt="quote placeholder for local dev"
                  className="su-object-cover su-size-full"
                />
              </div>
              <blockquote cite="" className="su-type-1">
                <p className="su-font-serif su-leading-display">
                  “{quoteConfig.quote}”
                </p>
                <footer className="su-font-bold">
                  {quoteConfig.quoteLink ? (
                    <a
                      href={quoteConfig.quoteLink}
                      className="su-font-bold su-text-white su-decoration-dark-mode-red su-underline-offset-[3px] su-decoration-[0.12em] hocus:su-no-underline hocus:su-text-dark-mode-red"
                    >
                      {quoteConfig.name}
                    </a>
                  ) : (
                    <span>{quoteConfig.name}</span>
                  )}
                  {quoteConfig.extra && `, ${quoteConfig.extra}`}
                </footer>
              </blockquote>
            </div>
          )}
        </div>
      </section>
      {quoteConfig.include === true && (
        <div className="su-cc lg:su-hidden su-w-full su-relative su-bg-black-true">
          <div className="su-rs-pt-2 su-rs-pb-5 su-rs-px-3 su-text-white su-flex su-items-center su-flex-col su-gap-44 lg:su-flex-row-reverse su-border-t su-border-black-30 su-relative su-z-[2]">
            <div className="su-rounded-full su-size-160 md:su-size-200 2xl:su-size-300 su-shrink-0 su-overflow-hidden">
              <img
                src={quoteConfig.image}
                alt="quote placeholder for local dev"
                className="su-object-cover su-size-full"
              />
            </div>
            <blockquote cite="" className="su-type-1">
              <p className="su-font-serif su-leading-display">
                “{quoteConfig.quote}”
              </p>
              <footer className="su-font-bold">
                {quoteConfig.quoteLink ? (
                  <a
                    href={quoteConfig.quoteLink}
                    className="su-font-bold su-text-white su-decoration-dark-mode-red su-underline-offset-[3px] su-decoration-[0.12em] hocus:su-no-underline hocus-visible:su-text-dark-mode-red"
                  >
                    {quoteConfig.name}
                  </a>
                ) : (
                  <span>{quoteConfig.name}</span>
                )}
                {quoteConfig.extra && `, ${quoteConfig.extra}`}
              </footer>
            </blockquote>
          </div>
        </div>
      )}
    </Container>
  );
}
