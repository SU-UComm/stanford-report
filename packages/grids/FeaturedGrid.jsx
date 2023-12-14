import React from "react";
import hash from "object-hash";
import { FeaturedGridContent } from "./FeaturedGridContent";

/**
 * Featured Grid package
 *
 * @param {array} items The content to output within the grid, usually React components
 * @param {string} alignment The alignment of the featured grid item
 * @returns {JSX.Element}
 * @constructor
 */
export function FeaturedGrid({ items, alignment = "left" }) {

  const alignClasses = new Map();
  alignClasses.set(
    "left",
    "before:su-left-0 before:su-top-[-35px] before:md:su-top-0 before:md:su-left-[-36px] before:lg:su-left-[-80px]"
  );
  alignClasses.set(
    "right",
    "before:su-right-0 before:su-top-[-35px] before:md:su-top-0 before:md:su-right-[-36px] before:lg:su-right-[-80px]"
  );

  return items.length > 1 ? (
    <div className="su-w-full su-component-featured-grid">
      <div className="su-flex su-flex-wrap md:su-flex-nowrap su-gap-[68px] md:su-gap-[72px] lg:su-gap-[160px]">
        {items[0] && (
          <FeaturedGridContent placement={1} alignment={alignment}>
            {items[0]}
          </FeaturedGridContent>
        )}
        <div
          className={[
            "su-relative su-flex su-flex-wrap md:su-items-center md:su-content-center su-gap-[80px] md:su-gap-[72px] lg:su-gap-[76px] md:su-basis-[39.5%] lg:su-basis-[30%] su-flex-grow before:su-w-full before:md:su-w-[1px] before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-[1px] before:md:su-h-full",
            alignClasses.get(alignment),
          ].join(" ")}
        >
          {items.map((item, i) => {
            return i !== 0 ? (
              <FeaturedGridContent key={hash.MD5(item.props)} placement={i + 1}>
                {item}
              </FeaturedGridContent>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
