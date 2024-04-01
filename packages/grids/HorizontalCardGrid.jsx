import React from "react";
import hash from "object-hash";
import { HorizontalCardGridContent } from "./HorizontalCardGridContent";

/**
 * MultiColumn Grid package
 *
 * @param {string} items The elements to display in the grid
 * @param {string} orientation The orientation of the grid items, vertical or horizontal
 * @param {integer} maximumItems The maximum of items to display in the grid
 * @returns {JSX.Element}
 * @constructor
 */

export function HorizontalCardGrid({
  items,
  orientation = "horizontal",
  maximumItems = 6,
}) {
  const MAXIMUM_ITEMS = maximumItems;
  const MINIMUM_ITEMS = 1;

  const gridItems =
    items.length > MAXIMUM_ITEMS ? items.slice(0, MAXIMUM_ITEMS) : items;

  const orientationClassMap = new Map();
  orientationClassMap.set("vertical", "su-grid-cols-1 su-gap-36 md:su-gap-27");
  orientationClassMap.set(
    "horizontal",
    "su-grid-cols-1 md:su-grid-cols-2 lg:su-grid-cols-3 su-gap-34 md:su-gap-36 lg:su-gap-48"
  );
  orientationClassMap.set(
    "topiclisting",
    "su-grid-cols-1 su-gap-30 md:su-gap-48 lg:su-gap-61"
  );

  return gridItems.length >= MINIMUM_ITEMS ? (
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
