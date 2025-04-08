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
export function FeaturedGrid({
  items,
  alignment = "left",
  hasNestedGrid = false,
  isNested = false,
  includeVerticalVideo = false,
}) {
  const alignClasses = new Map();
  alignClasses.set(
    "left",
    "before:su-left-0 before:su-top-[-35px] before:md:su-top-0 before:md:su-left-[-36px] before:lg:su-left-[-80px]"
  );
  alignClasses.set(
    "right",
    "before:su-right-0 before:su-top-[-35px] before:md:su-top-0 before:md:su-right-[-36px] before:lg:su-right-[-80px]"
  );

  return items.length >= 1 ? (
    <div className="su-w-full su-component-featured-grid">
      <div
        className={[
          "su-flex su-flex-wrap su-gap-[68px] md:su-gap-72 md:su-flex-nowrap",
          isNested ? "lg:su-flex-wrap lg:su-gap-[76px]" : "lg:su-gap-[160px]",
        ].join(" ")}
      >
        {!hasNestedGrid && items[0] && (
          <FeaturedGridContent placement={1} alignment={alignment}>
            {items[0]}
          </FeaturedGridContent>
        )}
        <div
          className={[
            "su-relative su-flex su-flex-wrap su-grow before:su-w-full before:su-absolute before:su-bg-black-30 dark:before:su-bg-black",
            !includeVerticalVideo && "su-gap-80 md:su-gap-72 lg:su-gap-[76px]",
            includeVerticalVideo && "su-gap-36",
            "before:md:su-w-px before:su-h-px before:md:su-h-full",
            "md:su-basis-[39.5%] lg:su-basis-[30%]",
            isNested
              ? "lg:before:su-w-full lg:before:su-h-px before:su-left-0 before:su-top-[-40px] before:md:su-top-0 lg:before:su-top-[-38px] before:md:su-left-[-36px] before:lg:su-left-0"
              : "",
            isNested
              ? "md:su-flex-wrap lg:su-flex-nowrap"
              : "md:su-items-start md:su-content-start",
            isNested ? "" : alignClasses.get(alignment),
          ].join(" ")}
        >
          {items.map((item, i) => {
            return i !== 0 ? (
              <FeaturedGridContent
                key={hash.MD5(item.props)}
                placement={i + 1}
                isNested={isNested}
                includeVerticalVideo={includeVerticalVideo}
              >
                {item}
              </FeaturedGridContent>
            ) : (
              ""
            );
          })}
        </div>
        {hasNestedGrid && items[0] && (
          <FeaturedGridContent placement={1} alignment={alignment}>
            {items[0]}
          </FeaturedGridContent>
        )}
      </div>
    </div>
  ) : (
    ""
  );
}
