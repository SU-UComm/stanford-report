import React from "react";
import { cnb } from "cnbuilder";
import { FAIcon } from "../icons/FAIcon";

/**
 * Displays a link with an external arrow
 *
 * @param {JSX.element} liveUrl
 * The link to go to
 *
 * @param {string} ctaText
 * The text of the link
 *
 * @param {string} ctaSize
 * The size of the CTA
 *
 * @return {JSX.element}
 */
export function ExternalLink({
  liveUrl,
  ctaText = "Read more",
  ctaSize = "small",
}) {
  const ctaSizeClasses = new Map();
  ctaSizeClasses.set("small", "");
  ctaSizeClasses.set(
    "large",
    "su-font-semibold su-text-21 su-leading-[26.25px]"
  );

  return liveUrl ? (
    <a
      data-test={`size-${ctaSize}`}
      className={cnb(
        "su-group su-component-external-link su-flex su-items-center su-flex-nowrap su-text-digital-red su-no-underline dark:su-text-dark-mode-red",
        "hocus:su-underline hocus:su-text-black dark:hocus:su-text-white",
        ctaSizeClasses.get(ctaSize)
      )}
      href={liveUrl}
    >
      <span data-test="ctaText">{ctaText}</span>
      <FAIcon
        icon="arrow-up-right"
        set="regular"
        // Add a width to prevent getting a flash of huge icon before the CSS fully loads
        width={12}
        className="su-inline-block su-ml-5 su-text-18 su-text-digital-red dark:su-text-dark-mode-red group-hocus:su-text-black dark:group-hocus:su-text-white group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em su-transition-transform"
        data-testid="svg-externalarrow"
      />
    </a>
  ) : (
    ""
  );
}
