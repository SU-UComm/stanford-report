import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";

/**
 * Single Text Block component
 *
 * @param {string} title The title of the text block
 * @param {string} eyebrow The eyebrow/superheading
 * @param {string} description The body content from the WYSIWYG
 * @param {string} paddingY Responsive vertical padding of the container
 * @returns {JSX.Element}
 * @constructor
 */

export default function SingleTextBlock({
  title,
  eyebrow,
  description,
  paddingY = "10",
}) {
  return (
    <Container width="cc" paddingY={paddingY}>
      <div className="su-ml-0 su-max-w-[110rem] su-border-l-2 su-border-black-30 dark:su-border-black-60 su-rs-py-3 su-pl-38 md:su-pl-76 xl:su-pl-170">
        {eyebrow && (
          /**
           * This is a SODA recommended pattern for accessibility.
           * When there is an eyebrow, we aria-hidden it from screen readers,
           * then add the eyebrow text as a visually hidden span for screen readers inside the heading below.
           * This way we don't get an orphaned span that appears before the heading in the card.
           */
          <span
            aria-hidden
            className="su-inline-block su-text-black-60 dark:su-text-black-40 su-font-semibold su-type-1 su-leading-display su-rs-mb-1"
          >
            {eyebrow}
          </span>
        )}
        {title && (
          <h2 className="su-type-5 su-mb-0 dark:su-text-white">
            {eyebrow && <span className="su-sr-only">{`${eyebrow}:`}</span>}
            {title}
          </h2>
        )}
        {!!description && (
          <XssSafeContent
            data-test="single-text-block-content"
            className="su-rs-mt-5 su-type-3 *:su-leading-snug *:last:su-mb-0 dark:su-text-white"
            content={description}
          />
        )}
      </div>
    </Container>
  );
}
