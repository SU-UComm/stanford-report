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

export default function CampaignHero({
  bkgImage,
  title,
  intro,
  quote,
  name,
  extra,
  quoteLink,
  videoUrl,
  bkgVideo,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Container width="full" paddingX={false}>
      <section className="su-relative">
        <div className="su-cc su-grid su-grid-cols-12 su-grid-gap su-relative su-z-[2]">
          {quote ? (
            <>
              <div className="su-mt-[55vh] su-col-start-4 su-col-span-6 su-text-white su-text-center">
                <h1 className="su-type-6">{title}</h1>
                <p className="su-type-3 su-leading-[1.3]">{intro}</p>
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
                      <EmbedVideo videoId={videoUrl} />
                    </Modal>
                  )}
                </span>
              </div>

              <div className="su-rs-pt-2 su-rs-px-5 su-rs-pb-6 su-col-start-3 su-col-span-8 su-text-white su-flex su-flex-col su-gap-2xl md:su-flex-row su-border-t su-border-black-30 su-relative su-z-[2]">
                <blockquote cite="" className="su-type-1">
                  <p className="su-font-serif su-leading-display">“{quote}”</p>
                  <footer className="su-font-bold">
                    {quoteLink ? (
                      <a
                        href={quoteLink}
                        className="su-text-white su-decoration-dark-mode-red su-underline-offset-[3px] su-decoration-[0.12em] hocus:su-no-underline hocus:su-text-dark-mode-red"
                      >
                        {name}
                      </a>
                    ) : (
                      <span>{name}</span>
                    )}
                    {extra && `, ${extra}`}
                  </footer>
                </blockquote>
                <img
                  src="https://picsum.photos/seed/picsum/300/300"
                  alt="quote placeholder for local dev"
                  className="su-rounded-full su-block"
                />
              </div>
            </>
          ) : (
            <>
              <h1 className="su-col-start-3 su-col-span-8 su-text-white su-mt-[55vh] su-type-6 su-text-center">
                {title}
              </h1>
              <p className="su-col-start-1 su-col-span-8 su-text-white su-mt-[45vh] su-border-l su-border-black-30 su-rs-ml-5 su-rs-pl-9 su-rs-py-4 su-font-serif su-type-3">
                {intro}
              </p>
            </>
          )}
        </div>

        {bkgVideo ? (
          <div className="su-absolute su-w-full su-h-full su-left-0 su-top-0 su-z-[0]">
            <iframe
              src={bkgVideo}
              className="su-min-w-full su-w-[177.77vw] su-min-h-full su-h-[56.25vh] su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
              title="video"
            />
          </div>
        ) : (
          <img
            src={bkgImage}
            // src={bgImageData.url}
            className="su-absolute su-w-full su-h-full su-object-cover su-left-0 su-top-0 su-z-[0]"
            alt="placeholder for local dev"
          />
        )}

        {/* Gradient overlay */}
        <div
          className="su-absolute su-block su-w-full su-h-full su-top-0 su-bg-gradient-to-t su-from-black-true su-z-[1]"
          aria-hidden="true"
        />
      </section>
    </Container>
  );
}
