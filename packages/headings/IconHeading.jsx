import React from "react";

/**
 * Renders out the linked heading, as seen here: https://www.figma.com/file/Fxe0NRKM09lCA3oCkHXHwB/FINAL----Landing-Pages----Home?type=design&node-id=1440-21954&mode=dev
 *
 * @param {string} title
 * The title text
 *
 * @param {string} icon
 * The icon to precede the title
 *
 * @param {string} headingSize
 * The semantic heading tag
 *
 * @return {JSX.element}
 */
export function IconHeading({ title, icon, headingSize = "h2" }) {
  const Tag = headingSize;
  return (
    <div>
      <Tag className="su-flex su-flex-wrap su-gap-[6px] su-my-0 su-text-[18px] su-text-black-90 dark:su-text-white su-font-semibold su-font-sans">
        {title}
      </Tag>
    </div>
  );
}
