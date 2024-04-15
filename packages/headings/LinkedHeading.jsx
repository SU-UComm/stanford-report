import React from "react";
import { ChevronRight } from "../SVG-library/SVG";

/**
 * Renders out the linked heading, as seen here: https://www.figma.com/file/Fxe0NRKM09lCA3oCkHXHwB/FINAL----Landing-Pages----Home?type=design&node-id=1440-21954&mode=dev
 *
 * @param {string} title
 * The main title
 *
 * @param {string} ctaText
 * The link's call to action text
 *
 * @param {string} ctaUrl
 * The call to action URL
 *
 * @return {JSX.element}
 */
export function LinkedHeading({
  title,
  ctaText = "View all",
  ctaLink,
  ctaNewWindow,
}) {
  return title !== "" && title !== undefined ? (
    <div className="su-component-line-heading su-flex su-flex-wrap su-items-center md:su-items-end su-gap-5 su-gap-x-13 md:su-gap-13">
      <h2 className="su-text-28 su-font-serif su-text-black dark:su-text-white md:su-text-[35px] lg:su-text-[48px] su-w-full md:su-w-auto su-mb-0">
        {title}
      </h2>

      <hr
        aria-hidden="true"
        className="md:su-mb-11 lg:su-mb-15 su-grow su-border-none su-bg-gradient-light-red-h su-h-4"
      />

      {ctaLink && (
        <a
          data-test="cta"
          href={ctaLink}
          target={ctaNewWindow ? "_blank" : undefined}
          className="su-flex su-no-underline hover:su-underline hover:su-text-digital-red dark:hover:su-text-dark-mode-red su-transition su-items-center md:su-items-end md:su-mb-8 lg:su-mb-12 su-text-black dark:su-text-white su-flex-nowrap su-gap-20 md:su-gap-13 su-align-baseline su-text-19"
          rel="noreferrer"
        >
          <span className="su-flex su-gap-2 su-items-center">
            <span>
              {ctaText} <span className="sr-only">{title}</span>
            </span>

            <ChevronRight />
          </span>
        </a>
      )}
    </div>
  ) : (
    ""
  );
}
