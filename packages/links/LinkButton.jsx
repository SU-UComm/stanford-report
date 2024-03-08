import React from "react";
import { cnb } from "cnbuilder";
import { ExternalArrow } from "../SVG-library/SVG";

/**
 * Displays a link with an external arrow
 *
 * @param {JSX.element} internalUrl
 * Internal link to Matrix asset
 *
 * @param {JSX.element} externalUrl
 * Manually entered external link
 *
 * @param {string} buttonText
 * The text of the link
 *
 * @return {JSX.element}
 */
export function LinkButton({
  internalUrl,
  externalUrl,
  buttonText = "Button text",
}) {
  return internalUrl || externalUrl ? (
    <a
      // data-test={}
      className={cnb()}
      href={internalUrl || externalUrl}
    >
      <span data-test="buttonText">{buttonText}</span>
      {externalUrl && <ExternalArrow />}
    </a>
  ) : (
    ""
  );
}
