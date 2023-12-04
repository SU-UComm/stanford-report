import React from "react";

/**
 * Renders out the icon heading
 *
 * @param {string} title
 * The title text
 *
 * @param {string} icons
 * Object containing "light" and "dark" icons
 *
 * @param {string} headingSize
 * The semantic heading tag
 *
 * @return {JSX.element}
 */
export function IconHeading({ title, icons = {}, headingSize = "h2" }) {
  const Tag = headingSize;
  return (
    <div>
      <Tag className="su-flex su-flex-wrap su-gap-[6px] su-my-0 su-text-[18px] su-text-black-90 dark:su-text-white su-font-semibold su-font-sans">
        {icons.light && <span className="dark:su-hidden">{icons.light}</span>}
        {icons.dark && (
          <span className="su-hidden dark:su-block">{icons.dark}</span>
        )}
        <span>{title}</span>
      </Tag>
    </div>
  );
}
