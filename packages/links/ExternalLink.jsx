import React from "react";
import { ExternalArrow } from "../SVG-library/SVG";

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
      className={[
        "su-group su-component-external-link su-flex su-items-center su-flex-nowrap su-no-underline hover:su-underline",
        "su-text-digital-red hover:su-text-digital-red dark:su-text-dark-mode-red",
        ctaSizeClasses.get(ctaSize),
      ].join(" ")}
      href={liveUrl}
    >
      <span data-test="ctaText">{ctaText}</span>
      <span className="group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em su-transition-transform">
        <ExternalArrow />
      </span>
    </a>
  ) : (
    ""
  );
}
