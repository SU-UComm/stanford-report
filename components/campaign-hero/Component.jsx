import React, { useState } from "react";
import { cnb } from "cnbuilder";
import VideoPlay from "../../packages/SVG-library/VideoPlay";
import Modal from "../../packages/modal/ModalWrapper";
import EmbedVideo from "../../packages/media/EmbedVideo";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";

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

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Container width="full" paddingX={false}>
      <section>
        <div className="su-sticky su-h-[100vh] su-top-0">
          {/* Background video */}
          {bkgConfig.bkgVideo ? (
            <div className="video-container su-relative su-w-full su-h-[100vh] su-overflow-hidden">
              <iframe
                src={bkgConfig.bkgVideo}
                title="video"
                className="su-absolute su-box-border su-min-w-full su-min-h-full su-w-[177.77777778vh] su-h-[56.25vw] su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
                allow="autoplay; fullscreen"
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
            className="su-absolute su-block su-w-full su-h-full su-top-0 su-bg-gradient-to-t su-from-black-true su-z-[1]"
            aria-hidden="true"
          />
        </div>

        <div className="su-cc su-grid su-grid-cols-6 md:su-grid-cols-12 su-grid-gap su-relative su-z-[2] -su-mt-500">
          {quoteConfig.quote ? (
            <div className="su-col-span-6 md:su-col-start-1 md:su-col-span-12 lg:su-col-start-3 lg:su-col-span-8 su-text-white su-text-center">
              <h1 className="su-type-6">{textConfig.title}</h1>
              <p
                className={cnb(
                  quoteConfig.quote ? "su-type-3 su-leading-[1.3]" : ""
                )}
              >
                {textConfig.intro}
              </p>
              {quoteConfig.videoUrl && (
                <span className="su-inline-block hocus:su-animate-pulse hocus:su-scale-110 su-transition-all">
                  <button
                    className="su-component-card-thumbnail su-block su-relative su-z-10 su-w-full su-h-full"
                    type="button"
                    aria-haspopup="dialog"
                    onClick={() => handleClick()}
                  >
                    <span className="su-hidden">Play video</span>
                    <VideoPlay />
                  </button>
                  {isModalOpen && (
                    <Modal
                      titleId="video-modal"
                      title="Modal"
                      onClose={handleCloseModal}
                    >
                      <EmbedVideo videoId={quoteConfig.videoUrl} />
                    </Modal>
                  )}
                </span>
              )}
            </div>
          ) : (
            <>
              <h1 className="su-type-6 su-text-white su-text-center su-mb-450 su-col-span-6 md:su-col-start-1 md:su-col-span-12 lg:su-col-start-3 lg:su-col-span-8 ">
                {textConfig.title}
              </h1>
              <p className="su-type-3 su-col-span-8 su-text-white su-font-serif su-border-l su-border-color su-border-black-30 su-pl-200 su-py-38 su-mb-0 su-ml-80">
                {textConfig.intro}
              </p>
            </>
          )}
          {quoteConfig.quote && (
            <div className="su-rs-pt-2 su-rs-px-5 su-rs-pb-6 su-col-start-2 su-col-span-10 su-text-white su-flex su-items-center su-flex-col su-gap-2xl md:su-flex-row su-border-t su-border-black-30 su-relative su-z-[2]">
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
              <div className="su-rounded-full su-w-[300px] su-h-[300px] su-grow su-shrink-0 su-basis-auto su-overflow-hidden">
                <img
                  src={quoteConfig.image}
                  alt="quote placeholder for local dev"
                  className="su-object-cover su-w-full su-h-full"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
}
