import React from "react";

/**
 * HorizontalCard Grid Content package
 *
 * @param {component} children The child elements for this content placement
 * @returns {JSX.Element}
 * @constructor
 */
export function HorizontalCardGridContent({ children }) {
  return (
    <div className={["su-relative su-grow"].join(" ")}>{children}</div>
  );
}
