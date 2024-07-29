import React from "react";
import { cnb } from "cnbuilder";

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

  return (
    <Container
      width="full"
      paddingX={false}
      className="su-aspect-w-1 su-aspect-h-2 sm:su-aspect-w-3 sm:su-aspect-h-4 lg:su-aspect-w-16 lg:su-aspect-h-9 2xl:su-aspect-w-2 2xl:su-aspect-h-1 su-bg-white dark:su-bg-black-true su-text-white"
    >
      <div className="su-absolute su-inset-0 su-flex su-items-end su-z-20 su-h-full su-p-20">
        <blockquote className={cnb("su-rs-py-8 su-cc su-ml-0")}>
          <p className="su-font-serif su-text-24 md:su-text-[3.3rem] lg:su-text-24 xl:su-text-[2.8rem] 2xl:su-text-[3.3rem] su-leading-display su-max-w-[55rem] lg:su-max-w-600">
            {quote}
          </p>
          <span className="su-inline-block su-text-[2.6rem] md:su-text-[2.9rem] su-font-bold su-leading-display su-mr-02em">
            {ctaPreText}
          </span>
          <a
            href={internalLinkUrl || externalUrl}
            className="su-inline-block su-text-[2.6rem] md:su-text-[2.9rem] su-font-bold su-leading-display su-text-white su-underline su-decoration-digital-red-light su-underline-offset-4 hocus:su-decoration-white hocus:su-text-white"
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
      <div className="su-absolute su-inset-0 su-z-10 su-border-[2rem] su-border-white dark:su-border-black-true su-bg-gradient-to-t lg:su-bg-gradient-to-r su-from-black-true" />
    </Container>
  );
}
