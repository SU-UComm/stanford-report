import React from "react";

export default function BasicFields({ title, children, alignment = "left" }) {
  const alignMap = new Map();

  alignMap.set("left", "su-justify-left");
  alignMap.set("center", "su-justify-center");

  return (
    <div
      className={`su-flex su-flex-col su-gap-[27px] su-pt-[32px] su-pb-[22px] md:su-pt-[45px] md:su-pt-[36px] ${alignMap.get(
        alignment
      )}`}
    >
      <h3 className="su-text-[23px] su-font-bold su-leading-[27.6px] su-font-sans su-m-0 md:su-leading-[27.7px] ">
        {title}
      </h3>

      <div className="su-flex su-flex-col su-gap-[6px] su-text-[21px]">
        {children}
      </div>
    </div>
  );
}
