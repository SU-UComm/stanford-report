import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";

export default function LinkListItem({ title, url }) {
  return (
    <a href={url} className="su-no-underline hocus:su-underline">
      <XssSafeContent
        className="su-text-16 su-font-bold su-m-0 lg:su-text-24 lg:su-leading-[28.8px]"
        content={title}
        elementType="h3"
      />
    </a>
  );
}
