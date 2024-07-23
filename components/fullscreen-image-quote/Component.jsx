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
  imageUrl,
  internalLinkUrl,
  ctaDetails,
}) {
  const { ctaText, ctaHighlight, ctaSubtext, externalUrl, isNewWindow } =
    ctaDetails;

  return (
    <Container
      width="full"
      paddingX={false}
      className="su-relative su-bg-black-true su-text-white su-p-20 su-aspect-[1/2] sm:su-aspect-[3/4] lg:su-aspect-[16/9]"
    >
      <Container
        width="cc"
        paddingX={false}
        className="su-relative su-z-20 su-h-full"
      >
        <blockquote className={cnb("su-absolute su-bottom-0 su-rs-py-8")}>
          <p className="su-font-serif su-type-2 su-leading-display su-max-w-600">
            {quote}
          </p>
          <span className="su-card-paragraph">{ctaSubtext}</span>
        </blockquote>
      </Container>
      <img
        src={imageUrl}
        alt=""
        className="su-absolute su-inset-0 su-object-cover su-w-full su-h-full su-z-0 su-p-20"
      />
      <div className="su-absolute su-inset-0 su-z-10 su-bg-gradient-to-t lg:su-bg-gradient-to-r su-from-black-true su-p-20" />
    </Container>
  );
}
