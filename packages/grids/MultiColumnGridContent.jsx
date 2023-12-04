import React from "react";

/**
 * Multi-column Grid Content package
 *
 * @param {component} children The child elements for this content placement
 * @param {string} placement The position within the multicolumn grid from left to right
 * @param {number} totalColumns The total number of columns for this grid
 * @param {boolean} separator Display line separators, defaults to false (off)
 * @returns {JSX.Element}
 * @constructor
 */
export function MultiColumnGridContent({
  children,
  placement,
  totalColumns,
  separator = false,
}) {
  const widthClasses =
    totalColumns === 2 ? "md:su-basis-1/2" : "md:su-basis-1/3";
  const separatorClasses =
    totalColumns === 2
      ? "before:su-w-full before:md:su-w-[1px] before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-[1px] before:md:su-h-full before:su-left-0 before:su-top-[-34px] before:md:su-top-0 before:md:su-left-[-36px] before:lg:su-left-[-80px]"
      : "before:su-w-full before:md:su-w-[1px] before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-[1px] before:md:su-h-full before:su-left-0 before:su-top-[-34px] before:md:su-top-0 before:md:su-left-[-36px] before:lg:su-left-[-51px]";
  return (
    <div
      data-test={`column-${placement}`}
      className={[
        "su-relative su-flex-grow",
        widthClasses,
        separator === true && placement !== 0 ? separatorClasses : "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
