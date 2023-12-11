import React from "react";
import hash from "object-hash";
import { HorizontalCardGridContent } from "./HorizontalCardGridContent";

/**
 * MultiColumn Grid package
 *
 * @param {string} items The elements to display in the grid
 * @param {string} orientation The orientation of the grid items, vertical or horizontal
 * @returns {JSX.Element}
 * @constructor
 */

export function HorizontalCardGrid({ items, orientation = "horizontal" }) {
  const MAXIMUM_ITEMS = 6;
  const MINIMUM_ITEMS = 1;

  const gridItems =
    items.length > MAXIMUM_ITEMS ? items.slice(0, MAXIMUM_ITEMS - 1) : items;

  const orientationClassMap = new Map();
  orientationClassMap.set(
    "vertical",
    "su-grid-cols-1 su-gap-[36px] md:su-gap-[27px]"
  );
  orientationClassMap.set(
    "horizontal",
    "su-grid-cols-1 md:su-grid-cols-2 lg:su-grid-cols-3 su-gap-[34px] md:su-gap-[36px] lg:su-gap-[48px]"
  );

  return gridItems.length > MINIMUM_ITEMS ? (
    <div
      className="su-w-full su-component-horizontal-card-grid"
      data-test={`orientation-${orientation}`}
    >
      <div
        className={[
          "su-relative su-grid",
          orientationClassMap.get(orientation),
        ].join(" ")}
      >
        {gridItems.map((item) => {
          return (
            <HorizontalCardGridContent key={hash.MD5(item.props)}>
              {item}
            </HorizontalCardGridContent>
          );
        })}
      </div>
    </div>
  ) : (
    ""
  );
}
