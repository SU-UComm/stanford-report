import React, { useState, useEffect, useRef } from "react";
import { cnb } from "cnbuilder";
import Modal from "../../packages/modal/ModalWrapper";
import EmbedVideo from "../../packages/media/EmbedVideo";
import { Container } from "../../packages/grids/Container";
import { FAIcon } from "../../packages/icons/FAIcon";
import HeroQuote from "./HeroQuote";
import * as styles from "./styles";

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
    <Container width="full" paddingX={false} className={styles.root}>
      <section>
        <div className={styles.bgWrapper}>
          {/* Background video or image */}
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
                    className="su-component-card-thumbnail su-block su-relative su-z-10 su-size-full hocus:su-animate-pulse hocus:su-scale-110 su-transition-all su-w-fit su-mx-auto su-rs-mb-2"
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
                    className="su-group su-flex su-gap-10 su-items-end su-text-16 su-leading-display su-mr-0 su-ml-auto su-text-white su-w-fit hocus-visible:su-underline su-underline-offset-2 su-py-14 su--mt-24"
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
          {quoteConfig.include && quoteConfig?.quote && (
            <HeroQuote
              image={quoteConfig.image}
              quote={quoteConfig.quote}
              name={quoteConfig.name}
              quoteLink={quoteConfig.quoteLink}
              extra={quoteConfig.extra}
              className="su-hidden lg:su-block su-max-w-1200 su-mx-auto"
            />
          )}
        </div>
      </section>
      {quoteConfig.include && quoteConfig?.quote && (
        <HeroQuote
          image={quoteConfig.image}
          quote={quoteConfig.quote}
          name={quoteConfig.name}
          quoteLink={quoteConfig.quoteLink}
          extra={quoteConfig.extra}
          className="su-cc lg:su-hidden su-bg-black-true"
        />
      )}
    </Container>
  );
}
