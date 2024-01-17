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
export function FeaturedGrid({ items, alignment = "left", nested = false }) {
  const alignClasses = new Map();
  alignClasses.set(
    "left",
    "before:su-left-0 before:su-top-[-35px] before:md:su-top-0 before:md:su-left-[-36px] before:lg:su-left-[-80px]"
  );
  alignClasses.set(
    "right",
    "before:su-right-0 before:su-top-[-35px] before:md:su-top-0 before:md:su-right-[-36px] before:lg:su-right-[-80px]"
  );

  <div className="su-flex su-flex-wrap md:su-flex-nowrap lg:su-flex-wrap su-gap-[68px] md:su-gap-[72px] lg:su-gap-[76px]">
    <div className="su-w-full su-flex-grow">Featured card here</div>
    <div className="su-relative su-flex su-flex-wrap md:su-flex-wrap lg:su-flex-nowrap md:su-items-center md:su-content-center su-gap-[80px] md:su-gap-[72px] lg:su-gap-[76px] md:su-basis-[39.5%] lg:su-basis-[30%] su-flex-grow before:su-w-full before:md:su-w-[1px] before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-[1px] before:md:su-h-full lg:before:su-w-full lg:before:su-h-[1px] before:su-left-0 before:su-top-[-40px] before:md:su-top-0 lg:before:su-top-[-38px] before:md:su-left-[-36px] before:lg:su-left-0">
      <div className="su-relative su-w-full">Supplementary one</div>
      <div className="su-relative su-w-full before:su-w-full before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-[1px] md:before:su-w-full lg:before:su-w-[1px] lg:before:su-h-full before:su-left-0 lg:before:su-left-[-38px] before:su-top-[-40px] md:before:su-top-[-36px] lg:before:su-top-0">
        Supplementary two
      </div>
    </div>
  </div>;

  return items.length > 1 ? (
    <div className="su-w-full su-component-featured-grid">
      <div
        className={[
          "su-flex su-flex-wrap su-gap-[68px] md:su-gap-[72px] md:su-flex-nowrap",
          nested ? "lg:su-flex-wrap lg:su-gap-[76px]" : "lg:su-gap-[160px]",
        ].join(" ")}
      >
        {items[0] && (
          <FeaturedGridContent placement={1} alignment={alignment}>
            {items[0]}
          </FeaturedGridContent>
        )}
        <div
          className={[
            "su-relative su-flex su-flex-wrap su-flex-grow before:su-w-full before:su-absolute before:su-bg-black-30 dark:before:su-bg-black",
            "su-gap-[80px] md:su-gap-[72px] lg:su-gap-[76px]",
            "before:md:su-w-[1px] before:su-h-[1px] before:md:su-h-full",
            "md:su-basis-[39.5%] lg:su-basis-[30%]",
            nested
              ? "lg:before:su-w-full lg:before:su-h-[1px] before:su-left-0 before:su-top-[-40px] before:md:su-top-0 lg:before:su-top-[-38px] before:md:su-left-[-36px] before:lg:su-left-0"
              : "",
            nested
              ? "md:su-flex-wrap lg:su-flex-nowrap"
              : "md:su-items-start md:su-content-start",
            nested ? "" : alignClasses.get(alignment),
          ].join(" ")}
        >
          {items.map((item, i) => {
            return i !== 0 ? (
              <FeaturedGridContent
                key={hash.MD5(item.props)}
                placement={i + 1}
                nested
              >
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
