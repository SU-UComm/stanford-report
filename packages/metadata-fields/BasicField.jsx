import React from "react";

export default function BasicFields({ title, children, alignment = "left" }) {
  const alignMap = new Map();

  alignMap.set("left", "su-justify-left");
  alignMap.set("center", "su-justify-center");

  return (
    <div
      className={`su-flex su-flex-col su-gap-[27px] ${alignMap.get(alignment)}`}
    >
      <h3 className="su-text-[23px] su-font-bold su-leading-[27.6px] su-font-sans su-text-[red]">
        {title}
      </h3>

      <div className="su-flex su-flex-col su-gap-[6px]">{children}</div>
    </div>
  );
}
