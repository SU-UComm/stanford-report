import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { LinkButton } from "../../packages/links/LinkButton";

/**
 * Single CTA Block component
 *
 * @param {string} Single CTA Block
 * @returns {JSX.Element}
 * @constructor
 */

export default function SingleCtaBlock({
  title,
  eyebrow,
  description,
  ctaConfiguration,
  internalLinkUrl,
}) {
  const { ctaText, ctaType, externalUrl, email, isNewWindow } =
    ctaConfiguration;
  return (
    <div className="su-cc">
      <div className="su-bg-white su-rounded-[8px] su-rs-py-8 su-rs-px-4">
        <span className="su-block su-mx-auto su-mb-02em su-text-center su-text-black-60 dark:su-text-black-40 su-font-semibold su-type-1 su-leading-display">
          {eyebrow}
        </span>
        <div className="su-mx-auto xl:su-max-w-900 su-flex su-flex-col md:su-flex-row su-gap-20 su-items-center su-rs-mb-4">
          <div className="su-relative md:su-top-06em su-hidden su-min-w-100 md:su-block su-grow su-shrink-0 su-h-4 su-bg-gradient-to-r su-from-digital-red-light su-to-digital-red-dark dark:su-from-palo-verde dark:su-to-olive su-w-auto" />
          <h2 className="su-mx-auto su-text-center su-leading-tight su-type-4 dark:su-text-white su-mb-0">
            {title}
          </h2>
          <div className="su-relative md:su-top-06em su-mx-auto su-min-w-100 su-grow su-shrink-0 su-w-180 su-h-4 su-bg-gradient-to-l md:su-bg-gradient-to-r su-from-digital-red-light su-to-digital-red-dark dark:su-from-palo-verde dark:su-to-olive md:su-w-auto su-mb-20 md:su-mb-0" />
        </div>
        <XssSafeContent
          data-test="single-text-block-content"
          className="su-mx-auto su-text-center su-max-w-prose-wide su-type-1 *:su-leading-snug *:last:su-mb-0 dark:su-text-white"
          content={description}
        />
        {ctaText && (
          <LinkButton
            buttonText={ctaText}
            internalUrl={internalLinkUrl}
            externalUrl={externalUrl}
            email={email}
            isNewWindow={isNewWindow}
            className="!su-block su-w-fit su-rs-mt-4 su-mx-auto"
          />
        )}
      </div>
    </div>
  );
}
