import React from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import ChevronRight from "../SVG-library/ChevronRight";
import ExternalArrowUnstyled from "../SVG-library/ExternalArrowUnstyled";

/**
 * The CTA Card component
 * This card is used in the CTA Cards Block component
 *
 * @param {string} title The title of the card
 * @param {string} eyebrow Superheading above the title
 * @param {string} description Body text of the card
 * @param {string} internalUrl Internal link to Matrix asset
 * @param {string} externalUrl Manually entered external link
 * @param {boolean} isNewWindow Whether the link should open in a new window
 * @return {JSX.element}
 */

export default function CtaCard({
  title,
  eyebrow,
  description,
  internalUrl,
  externalUrl,
  isNewWindow,
}) {
  const hasLink = !!internalUrl || !!externalUrl;
  // Check externalUrl field to see if it is actually external
  // Do not use external arrow and rel attributes if link has news.stanford.edu
  const isRealExternalLink =
    !!externalUrl && !externalUrl?.includes("news.stanford.edu");

  return (
    <article
      className={cnb(
        "su-group su-relative su-w-full su-flex su-flex-col su-break-words su-rounded-[8px] su-rs-pt-5 su-rs-px-4 su-max-w-900 su-mx-auto su-transition-shadow su-border dark:su-border-2 su-border-black-30/30 dark:su-border-black su-shadow dark:su-shadow-black/80 su-bg-white dark:su-bg-black-true su-text-black dark:su-text-white",
        internalUrl || externalUrl
          ? "hover:su-shadow-md focus-within:su-shadow-md"
          : "",
        hasLink ? "su-rs-pb-4" : "su-rs-pb-5"
      )}
    >
      {eyebrow && (
        /**
         * This is a SODA recommended pattern for accessibility.
         * When there is an eyebrow, we aria-hidden it from screen readers,
         * and then add the eyebrow text as a visually hidden span for screen readers inside the h2 heading below.
         * This way we don't get an orphaned span that appears before the heading in the card.
         */
        <span
          aria-hidden
          className="su-type-1 su-text-black-60 su-font-semibold su-rs-mb-1"
        >
          {eyebrow}
        </span>
      )}
      <h2 className="su-type-5 md:su-type-4 2xl:su-type-3 su-mb-0 su-font-sans su-text-black dark:su-text-white">
        {hasLink ? (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a
            href={internalUrl || externalUrl}
            target={isNewWindow ? "_blank" : undefined}
            rel={isRealExternalLink ? "noopener nofollow" : undefined}
            className="group-hocus-within:su-underline su-stretched-link su-text-black dark:su-text-white group-hocus-within:su-text-digital-red dark:group-hocus-within:su-text-digital-red-light"
          >
            {eyebrow && <span className="su-sr-only">{`${eyebrow}:`}</span>}
            {title}
          </a>
        ) : (
          <>
            {eyebrow && <span className="su-sr-only">{`${eyebrow}:`}</span>}
            {title}
          </>
        )}
      </h2>
      {!!description && (
        <div className="su-grow">
          <XssSafeContent
            data-test="cta-card-content"
            className="su-text-black dark:su-text-white su-big-paragraph su-rs-mt-4 *:su-leading-snug *:last:su-mb-0"
            content={description}
          />
        </div>
      )}
      {hasLink && (
        <div className="su-mt-auto">
          <div
            className={cnb(
              "su-flex su-rs-mt-1 su-transition-transform su-items-center su-justify-center su-size-50 md:su-size-70 su-rounded-full su-bg-gradient-to-r su-from-digital-red-light su-to-cardinal-red-dark dark:su-from-olive dark:su-to-palo-verde su-ml-auto",
              isRealExternalLink
                ? "group-hocus-within:su-translate-x-02em group-hocus-within:su--translate-y-02em"
                : "group-hocus-within:su-translate-x-03em"
            )}
          >
            {isRealExternalLink ? (
              <ExternalArrowUnstyled
                title="link is external"
                strokeWidth={3}
                className="su-inline-block su-w-20 md:su-w-30 su-text-white dark:su-text-black-true *:su-stroke-3"
              />
            ) : (
              <ChevronRight
                aria-hidden
                width={undefined}
                height={undefined}
                className="su-fill-transparent su-stroke-current su-inline-block su-w-22 md:su-w-36 su-text-white dark:su-text-black-true *:su-stroke-3"
              />
            )}
          </div>
        </div>
      )}
    </article>
  );
}
