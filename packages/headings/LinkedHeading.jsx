import React from "react";
import { cnb } from "cnbuilder";
import { FAIcon } from "../icons/FAIcon";
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
  isAlwaysLight,
  className,
}) {
  return title !== "" && title !== undefined ? (
    <div
      className={cnb(
        "su-component-line-heading su-flex su-flex-wrap su-items-baseline su-gap-5 su-gap-x-13 md:su-gap-13",
        className
      )}
    >
      <h2
        className={cnb(
          "su-type-3 su-font-serif su-w-full md:su-w-auto su-mb-0",
          isAlwaysLight
            ? "su-text-white dark:su-text-white"
            : "su-text-black dark:su-text-white"
        )}
      >
        {title}
      </h2>

      <hr
        aria-hidden
        className="md:su-mb-11 lg:su-mb-15 su-grow su-border-none su-bg-gradient-light-red-h su-h-4"
      />

      {ctaLink && (
        <a
          data-test="cta"
          href={ctaLink}
          target={ctaNewWindow ? "_blank" : undefined}
          className={cnb(
            "su-group su-flex su-no-underline hocus:su-underline su-transition su-items-center md:su-items-end md:su-mb-8 lg:su-mb-12  su-flex-nowrap su-align-baseline su-gap-20 md:su-gap-13 su-text-19 su-underline-offset-4",
            isAlwaysLight
              ? "su-text-white dark:su-text-white hocus:su-text-white dark:hocus:su-text-white su-decoration-2"
              : "su-text-black dark:su-text-white hocus:su-text-digital-red dark:hocus:su-text-dark-mode-red"
          )}
          rel="noreferrer"
        >
          <span className="su-flex su-gap-2 su-items-baseline">
            <span>
              {ctaText} <span className="sr-only">{title}</span>
            </span>
            <FAIcon
              icon="chevron-right"
              set="solid"
              width={18}
              className="fa-fw su-text-14 group-hocus:su-translate-x-02em su-transition-transform"
            />
          </span>
        </a>
      )}
    </div>
  ) : (
    ""
  );
}
