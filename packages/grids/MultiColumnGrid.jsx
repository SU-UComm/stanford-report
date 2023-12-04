import React from "react";
import hash from "object-hash";
import { MultiColumnGridContent } from "./MultiColumnGridContent";

/**
 * MultiColumn Grid package
 *
 * @param {string} items The elements to display in the grid
 * @param {boolean} separator Display line separators, defaults to false (off)
 * @returns {JSX.Element}
 * @constructor
 */
export function MultiColumnGrid({ items, separator = false }) {
  const gridItems = items.length > 3 ? items.slice(0, 2) : items;
  const totalColumns = items.length;
  const gapClasses =
    totalColumns === 2
      ? "su-gap-[68px] md:su-gap-[72px] lg:su-gap-[160px]"
      : "su-gap-[68px] md:su-gap-[72px] lg:su-gap-[102px]";

  return gridItems.length > 1 ? (
    <div className="su-w-full su-component-multicolumn">
      <div
        className={[
          "su-relative su-flex su-flex-wrap md:su-flex-nowrap su-flex-1 su-place-content-between",
          gapClasses,
        ].join(" ")}
      >
        {gridItems.map((item, i) => {
          return (
            <MultiColumnGridContent
              key={hash.MD5(item.props)}
              placement={i}
              totalColumns={totalColumns}
              separator={separator}
            >
              {item}
            </MultiColumnGridContent>
          );
        })}
      </div>
    </div>
  ) : (
    ""
  );
}
