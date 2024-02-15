import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";

/**
 * Renders out the acknowledgement component
 *
 * @param {string} title
 * the title of the acknowledgement, only for screen readers.
 *
 * @param {string} content
 * the text content of the acknowledgement
 *
 * @returns {JSX.Element}
 */
export default function Acknowledgement({ title, content }) {
  const hasContent = !!(content !== "" && content !== undefined);
  return hasContent ? (
    <Container width="narrow">
      <hr
        aria-hidden="true"
        className="su-mb-36 su-border-none su-w-100 su-h-5 su-bg-gradient-to-r su-from-digital-red su-to-plum dark:su-from-palo-verde dark:su-to-olive"
      />
      {title && <h2 className="sr-only">{title}</h2>}
      <XssSafeContent
        data-test="acknowledgement"
        className={[
          "su-wysiwyg-content",
          "*:su-text-16 *:md:su-text-19",
          "*:su-leading",
          "su-mb-36 [&>*:last-child]:su-mb-0",
        ].join(" ")}
        content={content}
      />
    </Container>
  ) : (
    ""
  );
}
