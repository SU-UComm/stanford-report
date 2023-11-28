import React from "react";

/**
 * Featured Grid GridRow helper
 *
 * @param {string} children The components children
 * @returns {JSX.Element}
 * @constructor
 */

export function GridRow({ children, classes }) {
  return <div className={classes}>{children}</div>;
}

/**
 * Featured Grid package
 *
 * @param {string} children The components children
 * @returns {JSX.Element}
 * @constructor
 */
export default function FeaturedGrid({ children }) {
  // align-left / align-right

  return (
    <div className="su-w-full su-component-featured-grid">
      <div className="su-flex su-flex-wrap md:su-flex-nowrap su-gap-[68px] md:su-gap-[72px] lg:su-gap-[160px]">
        {children}
      </div>
    </div>
  );
}
