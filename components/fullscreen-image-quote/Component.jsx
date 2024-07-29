/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { cnb } from "cnbuilder";
import * as styles from "./styles";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";

/**
 * Fullscreen Image Quote component
 *
 * @param {string} quote
 * The quote to display
 * @param {string} imageUrl
 * The URL of the background image
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function FullscreenImageQuote({
  quote,
  quoteHAlign,
  quoteVAlign,
  imageUrl,
  mobileImageUrl,
  internalLinkUrl,
  ctaDetails,
}) {
  const { ctaPreText, ctaText, ctaSubtext, externalUrl, isNewWindow } =
    ctaDetails;
  // Check externalUrl field to see if it is actually external
  // Do not use external arrow icon and rel attributes if link has news.stanford.edu
  const isRealExternalLink =
    !!externalUrl && !externalUrl?.includes("news.stanford.edu");

  return (
    <Container width="full" paddingX={false} className={styles.root}>
      <div className={styles.contentWrapper(quoteVAlign)}>
        <blockquote className={styles.blockquote(quoteHAlign)}>
          <p className="su-font-serif su-text-24 md:su-text-[3.3rem] lg:su-text-24 xl:su-text-[2.8rem] 2xl:su-text-[3.3rem] su-leading-display su-max-w-[55rem] lg:su-max-w-600 su-mb-0">
            {quote}
          </p>
          <span className="su-inline-block su-text-[2.6rem] md:su-text-[2.9rem] su-font-bold su-leading-display su-mr-02em">
            {ctaPreText}
          </span>
          <a
            href={externalUrl || internalLinkUrl}
            target={isNewWindow ? "_blank" : undefined}
            rel={isRealExternalLink ? "noopener nofollow" : undefined}
            className="su-rs-mt-1 su-inline-block su-text-[2.6rem] md:su-text-[2.9rem] su-font-bold su-leading-display su-text-white su-underline su-decoration-dark-mode-red su-underline-offset-4 hocus:su-decoration-white hocus:su-text-white su-transition-all"
          >
            {ctaText}
          </a>
          <div className="su-card-paragraph su-leading-display su-mt-9">
            {ctaSubtext}
          </div>
        </blockquote>
      </div>
      <img
        src={imageUrl}
        alt=""
        className="su-object-cover su-w-full su-h-full su-p-20"
      />
      <div className={styles.overlay(quoteHAlign)} />
    </Container>
  );
}
