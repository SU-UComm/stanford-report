import React from "react";
import { cnb } from "cnbuilder";
import { FAIcon } from "../icons/FAIcon";

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
          "su-type-3 su-font-serif su-w-full md:su-w-auto su-mb-8 md:su-mb-0 dark:su-text-white",
          isAlwaysLight ? "su-text-white" : "su-text-black"
        )}
      >
        {title}
      </h2>

      <hr
        aria-hidden
        className="md:su-mb-11 lg:su-mb-15 su-grow su-border-none su-bg-gradient-light-red-h su-h-4"
      />

      {ctaLink && (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          data-test="cta"
          href={ctaLink}
          target={ctaNewWindow ? "_blank" : undefined}
          className={cnb(
            "su-group su-flex su-no-underline hocus:su-underline su-transition su-items-center md:su-items-end md:su-mb-8 lg:su-mb-12 su-flex-nowrap su-align-baseline su-gap-20 md:su-gap-13 su-text-19 su-decoration-2 dark:su-text-white",
            isAlwaysLight
              ? "su-text-white hocus:su-text-white/95 dark:hocus:su-text-white/95"
              : "su-text-black hocus:su-text-digital-red dark:hocus:su-text-dark-mode-red"
          )}
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
