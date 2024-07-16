import React from "react";
import { cnb } from "cnbuilder";

/**
 * Link Item for Sidebar Navigation
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function LinkItem({ level, url, shortName }) {
  return (
    <a
      className={cnb(
        "su-block su-border-l-5 su-no-underline su-border-white hocus:su-underline active:su-underline active:su-text-digital-red hocus:su-border-digital-red active:su-border-digital-red",
        level === "one" && "su-p-10",
        level === "two" && "su-pl-25 su-pt-0 su-pb-10"
      )}
      href={url}
    >
      {shortName}
    </a>
  );
}
