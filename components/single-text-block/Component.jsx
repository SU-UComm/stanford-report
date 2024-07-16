import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";

/**
 * Single Text Block component
 *
 * @param {string} title The title of the text block
 * @param {string} eyebrow The eyebrow/superheading
 * @param {string} description The body content from the WYSIWYG
 * @returns {JSX.Element}
 * @constructor
 */

export default function SingleTextBlock({ title, eyebrow, description }) {
  return (
    <div className="su-cc su-rs-my-10">
      <div className="su-ml-0 su-max-w-[110rem] su-border-l-2 su-border-black-30 dark:su-border-black-60 su-rs-py-3 su-pl-38 md:su-pl-76 xl:su-pl-170">
        {eyebrow && (
          <span className="su-inline-block su-text-black-60 dark:su-text-black-40 su-font-semibold su-type-1 su-leading-display su-rs-mb-1">
            {eyebrow}
          </span>
        )}
        {title && (
          <h2 className="su-type-5 su-mb-0 dark:su-text-white">{title}</h2>
        )}
        {!!description && (
          <XssSafeContent
            data-test="single-text-block-content"
            className="su-rs-mt-5 su-type-3 *:su-leading-snug *:last:su-mb-0 dark:su-text-white"
            content={description}
          />
        )}
      </div>
    </div>
  );
}
