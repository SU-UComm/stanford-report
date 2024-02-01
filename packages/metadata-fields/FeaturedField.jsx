import React from "react";

export default function FeaturedField({ title, children, alignment = "left" }) {
  const alignMap = new Map();

  alignMap.set("left", "su-text-left");
  alignMap.set("center", "su-text-center");

  return (
    <div className={`${alignMap.get(alignment)}`}>
      <h3 className="su-text-[15px] su-leading-[18px] su-font-bold su-font-sans su-m-0 su-pb-[9px] md:su-text-[19px] md:su-leading-[22.8px]">
        {title}
      </h3>

      <div>{children}</div>
    </div>
  );
}
