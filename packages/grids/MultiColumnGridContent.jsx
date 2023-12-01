import React from "react";

/**
 * Multicolumn Grid Content helper
 *
 * @param {string} children The components children
 * @param {string} placement The position within the grid
 * @param {string} gridColumns The total number of columns in the grid
 * @returns {JSX.Element}
 * @constructor
 */
export function MultiColumnGridContent({ children, placement, gridColumns }) {
  // First column
  if (placement === 1) {
    return (
      <div
        className={[
          "md:su-basis-[58.333%] lg:su-basis-[64.5%] su-flex-grow",
        ].join(" ")}
      >
        {children}
      </div>
    );
  }
  return (
    <div className="su-relative su-w-full before:su-w-full before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-[1px] before:su-left-0 before:su-top-[-40px] md:before:su-top-[-36px] lg:before:su-top-[-38px]">
      {children}
    </div>
  );
}
