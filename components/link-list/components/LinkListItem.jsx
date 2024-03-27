import React from "react";

export default function LinkListItem({ title, url }) {
  return (
    <a href={url} className="su-no-underline hocus:su-underline">
      <h3 className="su-text-16 su-font-bold su-m-0 lg:su-text-24 lg:su-leading-[28.8px]">
        {title}
      </h3>
    </a>
  );
}
