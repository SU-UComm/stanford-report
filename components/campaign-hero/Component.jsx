import React, { useState, useEffect, useRef } from "react";
import Modal from "../../packages/modal/ModalWrapper";
import EmbedVideo from "../../packages/media/EmbedVideo";
import { Container } from "../../packages/grids/Container";
import { FAIcon } from "../../packages/icons/FAIcon";
import HeroQuote from "./HeroQuote";
import * as styles from "./styles";

/**
 * Campaign Hero
 *
 * @param {object} bkgConfig
 * Background configuration - could be image or looping video from Vimeo
 *
 * @param {object} textConfig
 * Text configuration - title and intro text for the hero
 *
 * @param {string} youtubeId
 * YouTube ID of the video that will play in a modal
 *
 * @param {object} quoteConfig
 * Quote configuration - fields for the optional quote at the bottom of the hero
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function CampaignHero({
  bkgConfig,
  textConfig,
  youtubeId,
  quoteConfig,
  bkgImageData,
  quoteImageData,
  quoteInternalLinkUrl,
}) {
  // Conditionals for code readability
  const isBgVideo = bkgConfig?.type === "Video" && bkgConfig?.bkgVideo;
  const hasQuote = quoteConfig?.include && quoteConfig?.quote;

  /**
   * The condition to display a pulled left intro.
   * 1. Quote is not included
   * 2. Background is an image
   * 3. No YouTube video to play in a modal
   */
  const isIntroPulledLeft =
    !quoteConfig.include && bkgConfig.type === "Image" && !youtubeId;

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
      <section className={styles.section}>
        <div className={styles.heroWrapper}>
          {/* Background video or image */}
          {isBgVideo ? (
            <div className={styles.bgWrapper}>
              <div className={styles.bgVideoWrapper}>
                <iframe
                  ref={iframeRef}
                  src={`${bkgConfig.bkgVideo}?background=1`}
                  title="background video"
                  className={styles.bgVideoIframe}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <div className={styles.bgImageWrapper}>
              <img
                src={bkgImageData?.url}
                className={styles.bgImage}
                alt={bkgImageData?.alt || ""}
              />
            </div>
          )}
          {/* Gradient overlay */}
          <div className={styles.overlay(hasQuote)} aria-hidden="true" />

          {/* Hero content */}
          <div className={styles.contentWrapper(isBgVideo, isIntroPulledLeft)}>
            <h1 className={styles.title(isBgVideo)}>{textConfig.title}</h1>
            {/* Display center aligned intro below h1 if quote is included */}
            {!isIntroPulledLeft && (
              <p className={styles.introCentered(youtubeId, isBgVideo)}>
                {textConfig.intro}
              </p>
            )}
            {/* Button to open YouTube modal */}
            {youtubeId && (
              <>
                <button
                  className={styles.bgVideoButton(bkgConfig.type)}
                  type="button"
                  aria-haspopup="dialog"
                  aria-label="Open full video in a modal"
                  onClick={() => handleClick()}
                >
                  <FAIcon
                    icon="circle-play"
                    set="regular"
                    width={75}
                    className={styles.playYoutubeIcon}
                  />
                </button>
                {isModalOpen && (
                  <Modal
                    titleId="youtube-modal-title"
                    onClose={handleCloseModal}
                  >
                    <h2 className="su-sr-only" id="youtube-modal-title">
                      YouTube Video
                    </h2>
                    <EmbedVideo videoId={youtubeId} />
                  </Modal>
                )}
              </>
            )}
            {/* Button to play/pause background video */}
            {isBgVideo && (
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
            {isIntroPulledLeft && (
              <p className="su-type-3 su-max-w-1200 su-ml-0 su-text-white su-font-serif su-border-l su-border-color su-border-black-30 su-pl-32 md:su-pl-48 2xl:su-pl-200 su-py-38 su-mb-0 su-rs-mt-10">
                {textConfig.intro}
              </p>
            )}
            {/* Desktop quote - background video or image is shown through beneath the quote content */}
            {hasQuote && (
              <HeroQuote
                imageSrc={quoteImageData?.url}
                imageAlt={quoteImageData?.alt}
                quote={quoteConfig.quote}
                name={quoteConfig.name}
                quoteLink={quoteInternalLinkUrl}
                extra={quoteConfig.extra}
                className="su-hidden lg:su-block su-max-w-1200 su-mx-auto"
              />
            )}
          </div>
        </div>
        {/* Mobile quote - displayed over a solid black background below the hero content */}
        {hasQuote && (
          <HeroQuote
            imageSrc={quoteImageData?.url}
            imageAlt={quoteImageData?.alt}
            quote={quoteConfig.quote}
            name={quoteConfig.name}
            quoteLink={quoteInternalLinkUrl || quoteConfig.quoteManualLink}
            extra={quoteConfig.extra}
            className="su-cc lg:su-hidden su-bg-black-true"
          />
        )}
      </section>
    </Container>
  );
}
