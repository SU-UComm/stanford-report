import React from "react";

export default function LinkListItem({ title, url }) {
  return (
    <a href={url} className="su-no-underline">
      <h3 className="su-text-[16px] su-font-bold su-m-0 lg:su-text-[24px] lg:su-leading-[28.8px]">
        {title}
      </h3>
    </a>
  );
}
