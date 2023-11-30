import React from "react";

/**
 * Multi-column Grid package
 *
 * @param {string} children The components children
 * @returns {JSX.Element}
 * @constructor
 */
export function MultiColumnGrid({ children }) {
  return (
    <div className="su-w-full su-component-multicolumn">
      <div className="su-relative su-flex su-flex-wrap md:su-flex-nowrap su-flex-1 su-gap-[68px] md:su-gap-[72px] lg:su-gap-[102px] su-place-content-between">
        {children}
      </div>
    </div>
  );
}
