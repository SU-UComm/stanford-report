import React from "react";

export default function BasicFields({ title, children, alignment = "left" }) {
  const alignMap = new Map();

  alignMap.set("left", "su-justify-left");
  alignMap.set("center", "su-justify-center");

  return (
    <div
      className={`su-flex su-flex-col su-gap-27 su-pt-32 su-pb-22 md:su-pt-45 md:su-pt-36 ${alignMap.get(
        alignment
      )}`}
    >
      <h3 className="su-text-23 su-font-bold su-leading-[27.6px] su-font-sans !su-m-0 md:su-leading-[27.7px] ">
        {title}
      </h3>

      <div className="su-flex su-flex-col su-gap-6 su-text-21">{children}</div>
    </div>
  );
}
