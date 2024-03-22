import React from "react";
import { cnb } from "cnbuilder";
import ExternalArrowUnstyled from "../SVG-library/ExternalArrowUnstyled";

/**
 * Displays a link that looks like a button
 *
 * @param {string} internalUrl
 * Internal link to Matrix asset
 *
 * @param {string} externalUrl
 * Manually entered external link
 *
 * @param {string} buttonText
 * The text of the link
 *
 * @param {boolean} isNewWindow
 * Whether the link should open in a new window
 *
 * @return {JSX.element}
 */
export function LinkButton({
  internalUrl,
  externalUrl,
  buttonText = "Button text",
  isNewWindow,
  // Additional className that will be added to the button, e.g., spacing
  className,
}) {
  // Check extenalUrl field to see if it is actually external
  // Do not add external arrow and rel attributes if link has news.stanford.edu
  const isRealExternalLink =
    !!externalUrl && !externalUrl?.includes("news.stanford.edu");

  return internalUrl || externalUrl ? (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      className={cnb(
        "su-group su-inline-block su-button hocus:su-underline md:su-px-30 md:su-pt-12 md:su-pb-14 su-text-18 md:su-text-20 su-transition-colors dark:hocus:su-ring-1 dark:hocus:su-ring-white",
        className
      )}
      href={externalUrl || internalUrl}
      target={isNewWindow ? "_blank" : undefined}
      rel={isRealExternalLink ? "noopener nofollow" : undefined}
    >
      {buttonText}
      {isRealExternalLink && (
        <ExternalArrowUnstyled
          title="link is external"
          className="su-inline-block su-text-white group-hocus:su-text-white group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em su-ml-05em su-w-08em su-transition-transform"
        />
      )}
    </a>
  ) : (
    ""
  );
}
