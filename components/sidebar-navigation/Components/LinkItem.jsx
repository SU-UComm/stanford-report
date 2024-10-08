import React from "react";
import { cnb } from "cnbuilder";

/**
 * Link Item for Sidebar Navigation
 * @param {string} level Pass "one" or "two" to control the nesting indent
 * @param {string} url URL of the page asset
 * @param {string} active Indicates if the nav item is the current page
 * @param {string} shortName Short name (title) of the page asset
 *
 * @returns {LinkItem}
 * @constructor
 */
export default function LinkItem({ level, url, shortName, active }) {
  return (
    <a
      className={cnb(
        "su-block su-leading-display su-border-l-5 hocus:su-underline hocus:su-text-digital-red hocus:su-border-digital-red dark:hocus:su-text-dark-mode-red dark:hocus:su-border-dark-mode-red",
        active
          ? "su-underline su-text-digital-red su-border-digital-red dark:su-text-dark-mode-red dark:su-border-dark-mode-red"
          : "su-no-underline su-border-white dark:su-border-black-true",
        level === "one" && "su-p-10",
        level === "two" && "su-pl-25 su-pt-0 su-pb-10"
      )}
      href={url}
      aria-current={active}
    >
      {shortName}
    </a>
  );
}
