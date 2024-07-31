import React from "react";
import { cnb } from "cnbuilder";

/**
 * Link Item for Sidebar Navigation
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function LinkItem({ level, url, shortName, active }) {
  return (
    <a
      className={cnb(
        "su-block su-border-l-5  hocus:su-underline hocus:su-text-digital-red hocus:su-border-digital-red",
        active
          ? "su-underline su-text-digital-red su-border-digital-red"
          : "su-no-underline su-border-white",
        level === "one" && "su-p-10",
        level === "two" && "su-pl-25 su-pt-0 su-pb-10"
      )}
      href={url}
    >
      {shortName}
    </a>
  );
}
