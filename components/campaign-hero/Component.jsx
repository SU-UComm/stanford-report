import React, { useState, useEffect, useRef } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
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
 * @param {object} bkgImageData
 * Data from the background image - src and alt text
 *
 * @param {object} quoteImageData
 * Data from the quote image - src and alt text
 *
 * @param {string} quoteInternalLinkUrl
 * The internal link URL for the quotee name if using Matrix asset link
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
  const [isUserPaused, setIsUserPaused] = useState(false); // Track if the video was paused by the user
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
    setIsUserPaused((prev) => !prev); // Track manual pause state
    setIsPlaying((prev) => !prev); // Toggle play/pause state
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

        // Only set play/pause based on IntersectionObserver if video is not manually paused
        if (!isUserPaused) {
          setIsPlaying(entry.isIntersecting);
        }
      },
      { threshold: 0 } // Adjust threshold as needed
    );

    const iframe = iframeRef.current;
    if (iframe) observer.observe(iframe);

    return () => {
      if (iframe) observer.unobserve(iframe);
    };
  }, [isUserPaused]); // Re-run the effect if isUserPaused state changes

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
                alt={bkgImageData?.attributes?.alt || ""}
              />
            </div>
          )}
          {/* Dark overlays */}
          <div
            className={styles.overlay(hasQuote, isBgVideo)}
            aria-hidden="true"
          />
          {/* Hero content */}
          <div
            className={styles.contentWrapper(
              hasQuote,
              isBgVideo,
              isIntroPulledLeft
            )}
          >
            <h2 className={styles.title}>{textConfig.title}</h2>
            {/* Display center aligned intro below title if quote is included */}
            {!isIntroPulledLeft && (
              <XssSafeContent
                content={textConfig.intro}
                className={styles.introCentered(youtubeId, isBgVideo)}
              />
            )}
            {/* Button to open YouTube modal */}
            {youtubeId && (
              <>
                <button
                  className={styles.bigVideoButton(isBgVideo)}
                  type="button"
                  aria-haspopup="dialog"
                  aria-label="Open full video in a modal"
                  onClick={handleClick}
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
                    <h2 className={styles.srOnly} id="youtube-modal-title">
                      YouTube Video
                    </h2>
                    <EmbedVideo videoId={youtubeId} />
                  </Modal>
                )}
              </>
            )}
            {/* Button to play/pause background video */}
            {isBgVideo && (
              <div className={styles.playPauseWrapper}>
                <button
                  type="button"
                  onClick={togglePlayPause}
                  className={styles.playPauseButton(!!youtubeId)}
                >
                  {`${isPlaying ? "Pause" : "Play"} background`}
                  <FAIcon
                    icon={!isPlaying ? "circle-play" : "circle-pause"}
                    set="regular"
                    width={20}
                    className={styles.playPauseIcon}
                  />
                </button>
              </div>
            )}
            {isIntroPulledLeft && (
              <XssSafeContent
                content={textConfig.intro}
                className={styles.introPulledLeft}
              />
            )}
            {/* Desktop quote - background video or image is shown through beneath the quote content */}
            {hasQuote && (
              <HeroQuote
                imageSrc={quoteImageData?.url}
                imageAlt={quoteImageData?.attributes?.alt}
                quote={quoteConfig.quote}
                name={quoteConfig.name}
                quoteLink={quoteInternalLinkUrl || quoteConfig.quoteManualUrl}
                extra={quoteConfig.extra}
                className={styles.quote}
              />
            )}
          </div>
        </div>
        {/* Mobile quote - displayed over a solid black background below the hero content */}
        {hasQuote && (
          <HeroQuote
            imageSrc={quoteImageData?.url}
            imageAlt={quoteImageData?.attributes?.alt}
            quote={quoteConfig.quote}
            name={quoteConfig.name}
            quoteLink={quoteInternalLinkUrl || quoteConfig.quoteManualUrl}
            extra={quoteConfig.extra}
            className={styles.quoteMobile}
          />
        )}
      </section>
    </Container>
  );
}
