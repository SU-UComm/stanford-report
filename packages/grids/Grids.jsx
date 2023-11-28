import React from "react";

/**
 * GridRow helper
 *
 * @param {string} children The components children
 * @returns {JSX.Element}
 * @constructor
 */
export function GridRow({ children, classes }) {
  return <div className={classes}>{children}</div>;
}

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

/**
 * Featured Grid package
 *
 * @param {string} children The components children
 * @returns {JSX.Element}
 * @constructor
 */
export function FeaturedGrid({ children }) {
  return (
    <div className="su-w-full su-component-featured-grid">
      <div className="su-flex su-flex-wrap md:su-flex-nowrap su-gap-[68px] md:su-gap-[72px] lg:su-gap-[160px]">
        {children}
      </div>
    </div>
  );
}
