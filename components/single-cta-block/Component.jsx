import React from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";
import { LinkButton } from "../../packages/links/LinkButton";

/**
 * Single CTA Block component
 *
 * @param {string} title
 * The title of the block
 *
 * @param {string} eyebrow
 * The superheading above the title
 *
 * @param {string} description
 * The content of the block from the WYSIWYG
 *
 * @param {object} imageData
 * The data for the optional image
 *
 * @param {string} internalLinkUrl
 * The internal Matrix URL if it is entered
 *
 * @param {object} ctaConfiguration
 * The fields for the CTA button
 *
 * @param {boolean} isCard
 * Whether to render the content inside a card
 *
 * @param {string} marginTop
 * The top margin of the component
 *
 * @param {string} marginBottom
 * The bottom margin of the component
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function SingleCtaBlock({
  title,
  eyebrow,
  description,
  imageData,
  ctaConfiguration,
  internalLinkUrl,
  isCard,
  marginTop,
  marginBottom,
}) {
  const { ctaText, ctaType, externalUrl, email, isNewWindow } =
    ctaConfiguration;
  return (
    <Container
      width="cc"
      marginTop={marginTop}
      marginBottom={marginBottom}
      paddingX={false}
    >
      <div
        className={cnb(
          "su-flex su-flex-col-reverse xl:su-flex-row-reverse su-items-center su-justify-center su-gap-34 xl:su-gap-60 su-rounded-[8px] su-break-words su-text-black dark:su-text-white",
          isCard
            ? "su-rs-py-8 su-rs-px-4 su-border dark:su-border-2 su-border-black-30/30 dark:su-border-black su-shadow dark:su-shadow-black/80 su-bg-white dark:su-bg-black-true"
            : ""
        )}
      >
        <div className="su-flex su-flex-col">
          {eyebrow && (
            /**
             * This is a SODA recommended pattern for accessibility.
             * When there is an eyebrow, we aria-hidden it from screen readers,
             * and then add the eyebrow text as a visually hidden span for screen readers inside the h3 heading below.
             * This way we don't get an orphaned span that appears before the heading in the card.
             */
            <span
              aria-hidden
              className="su-block su-mx-auto su-mb-02em su-text-center su-text-black-60 dark:su-text-black-40 su-font-semibold su-type-1 su-leading-display"
            >
              {eyebrow}
            </span>
          )}
          {title && (
            <div className="su-mx-auto xl:su-max-w-900 su-flex su-flex-col md:su-flex-row su-gap-20 su-items-center su-rs-mb-4">
              <div
                aria-hidden
                className="su-relative md:su-top-06em su-hidden su-min-w-100 md:su-block su-grow su-shrink-0 su-h-4 su-bg-gradient-to-r su-from-digital-red-light su-to-digital-red-dark dark:su-from-palo-verde dark:su-to-olive su-w-auto"
              />
              <h2 className="su-mx-auto su-text-center su-leading-tight su-type-4 dark:su-text-white su-mb-0">
                {eyebrow && <span className="su-sr-only">{`${eyebrow}:`}</span>}
                {title}
              </h2>
              <div
                aria-hidden
                className="su-relative md:su-top-06em su-mx-auto su-min-w-100 su-grow su-shrink-0 su-w-180 su-h-4 su-bg-gradient-to-l su-from-digital-red-light su-to-digital-red-dark dark:su-from-palo-verde dark:su-to-olive md:su-w-auto su-mb-20 md:su-mb-0"
              />
            </div>
          )}
          <XssSafeContent
            data-test="single-text-block-content"
            className={cnb(
              "su-mx-auto su-text-center su-max-w-prose-wide su-type-1 *:su-leading-snug last:*:su-mb-0 dark:su-text-white",
              imageData?.url && "xl:su-text-left"
            )}
            content={description}
          />
          {ctaText && (
            <LinkButton
              ctaType={ctaType}
              variant="gradient"
              size="large"
              buttonText={ctaText}
              internalUrl={internalLinkUrl}
              externalUrl={externalUrl}
              email={email}
              isNewWindow={isNewWindow}
              className="su-rs-mt-4 su-mx-auto"
            />
          )}
        </div>
        {imageData?.url && (
          <img
            src={imageData.url}
            alt={imageData.attributes?.alt || ""}
            className="su-w-1/2 sm:su-w-1/3 xl:su-w-1/4 su-shrink-0"
          />
        )}
      </div>
    </Container>
  );
}
