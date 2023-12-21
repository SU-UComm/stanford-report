import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";

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
    <>
      <hr
        aria-hidden="true"
        className="su-mb-[36px] su-border-none su-w-[100px] su-h-[5px] su-bg-gradient-to-r su-from-digital-red su-to-plum dark:su-from-palo-verde dark:su-to-olive"
      />
      {title && <h2 className="sr-only">{title}</h2>}
      <XssSafeContent
        data-test="acknowledgement"
        className={[
          "[&>*]:su-basefont-19 [&>*]:su-text-[16px] [&>*]:md:su-text-[19px] [&>*]:lg:su-text-[19px]",
          "[&>*]:su-leading-[24px] [&>*]:md:su-leading-[28.5px] [&>*]:lg:su-leading-[28.5px]",
          "su-mb-[36px] [&>*:last-child]:su-mb-0",
        ].join(" ")}
        content={content}
      />
    </>
  ) : (
    ""
  );
}
