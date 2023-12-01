import React from "react";
import hash from "object-hash";
import { MultiColumnGridContent } from "./FeaturedGridContent";

/**
 * MultiColumn Grid package
 *
 * @param {string} children The components children
 * @returns {JSX.Element}
 * @constructor
 */
export function FeaturedGrid({ items }) {
  const twoColumnClasses = "";

  const threeColumnClasses = "su-gap-[68px] md:su-gap-[72px] lg:su-gap-[102px]";
  const gridColumnCount = items.length;

  return (
    <div className="su-w-full su-component-featured-grid">
      <div
        className={[
          "su-relative su-flex su-flex-wrap md:su-flex-nowrap su-flex-1 su-place-content-between",
          gridColumnCount === 2 ? twoColumnClasses : threeColumnClasses,
        ].join(" ")}
      >
        {items.map((item, i) => {
          return (
            <MultiColumnGridContent
              key={hash.MD5(item.props)}
              placement={i}
              gridColumns={gridColumnCount}
            >
              {item}
            </MultiColumnGridContent>
          );
        })}
      </div>
    </div>
  );
}
