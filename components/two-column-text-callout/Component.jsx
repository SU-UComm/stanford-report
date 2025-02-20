import React from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";

/**
 * Two Column Text Callout component
 *
 * @param {string} title
 * The title of the section.
 *
 * @param {boolean} showTopBorder
 * If true, display a horizontal divider above the title.
 *
 * @param {array} callouts
 * A array of 1 to 2 callouts each with a heading and WYSIWYG content.
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function TwoColumnTextCallout({
  title,
  showTopBorder = true,
  callouts,
}) {
  return (
    <Container
      className={cnb(
        "su-rs-pt-3 su-rs-pb-5",
        showTopBorder && "su-border-t su-border-black-30"
      )}
    >
      <h2 className="su-type-2 su-font-serif su-text-center su-w-auto su-rs-mb-2 dark:su-text-white">
        {title}
      </h2>
      <div className="su-flex su-grid-gap su-flex-col md:su-flex-row">
        {callouts.map(({ heading, content }) => (
          <div
            key={heading}
            className="su-block su-bg-fog-light dark:su-bg-black su-rs-p-2 md:su-basis-1/2"
          >
            <h3 className="su-type-0 su-font-bold su-leading-display su-m-0">
              {heading}
            </h3>
            <XssSafeContent
              content={content}
              className="su-text-black dark:su-text-white su-text-18 *:su-leading-display last:*:su-mb-0"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
