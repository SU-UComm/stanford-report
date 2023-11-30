import React from "react";

/**
 * GridContent helper
 *
 * @param {string} children The components children
 * @returns {JSX.Element}
 * @constructor
 */
export function FeaturedGridContent({
  children,
  placement,
  alignment = "left",
}) {
  const rightAlignmentClasses = "md:su-order-2";
  // Featured placement
  if (placement === 1) {
    return (
      <div
        className={[
          "md:su-basis-[58.333%] lg:su-basis-[64.5%] su-flex-grow",
          alignment === "right" ? rightAlignmentClasses : "",
        ].join(" ")}
      >
        {children}
      </div>
    );
  }
  // Supplementary, top position
  if (placement === 2) {
    return <div className="su-relative su-w-full">{children}</div>;
  }
  // Catch all for all additional supplementary items (3+)
  return (
    <div className="su-relative su-w-full before:su-w-full before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-[1px] before:su-left-0 before:su-top-[-40px] md:before:su-top-[-36px] lg:before:su-top-[-38px]">
      {children}
    </div>
  );
}
