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
  const MAXIMUM_ITEMS = 3;
  const MINIMUM_ITEMS = 1;

  const gapClasses = new Map();
  gapClasses.set(
    "2col",
    separator
      ? "su-gap-[68px] md:su-gap-72 lg:su-gap-[160px]"
      : "su-gap-34 md:su-gap-72 lg:su-gap-[160px]"
  );
  gapClasses.set(
    "3col",
    separator
      ? "su-gap-[68px] md:su-gap-72 lg:su-gap-[102px]"
      : "su-gap-34 md:su-gap-72 lg:su-gap-[160px]"
  );

  const gridItems =
    items.length > MAXIMUM_ITEMS ? items.slice(0, MAXIMUM_ITEMS - 1) : items;
  const totalColumns = items.length;

  return gridItems.length >= MINIMUM_ITEMS ? (
    <div className="su-w-full su-component-multicolumn">
      <div
        className={[
          "su-relative su-flex su-flex-wrap md:su-flex-nowrap su-flex-1 su-place-content-between",
          gapClasses.get(`${totalColumns}col`),
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
