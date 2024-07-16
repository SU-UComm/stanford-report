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
        "su-block su-p-10 su-border-l-5 su-no-underline su-border-white hocus:su-underline active:su-underline hocus:su-border-digital-red active:su-border-digital-red",
        level === "two" && "su-pl-25"
      )}
      href={url}
    >
      {shortName}
    </a>
  );
}
