import React from "react";

export default function FeaturedField({ title, children, alignment = "left" }) {
  const alignMap = new Map();

  alignMap.set("left", "su-text-left");
  alignMap.set("center", "su-text-center");

  return (
    <div className={`${alignMap.get(alignment)}`}>
      <h3 className="su-metadata-fields-title su-text-15 su-leading-display su-font-bold su-font-sans !su-m-0 su-pb-8 md:su-pb-9 md:su-text-19">
        {title}
      </h3>

      <div className="">{children}</div>
    </div>
  );
}
