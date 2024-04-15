import React from "react";
import hash from "object-hash";
import { SidebarHeading } from "../headings/Heading";
import { ChevronRight, ExternalArrow } from "../SVG-library/SVG";

/**
 * Listing displayed in a sidebar, has a heading, listing and link
 *
 * @param {JSX.element} children
 * The children making  up the listing
 *
 * @param {string} title
 * The title text
 *
 * @param {string} icon
 * The icon to display before the title text
 *
 * @param {string} ctaUrl
 * The url for the CTA below the list
 *
 * @param {string} ctaText
 * The text for the CTA
 *
 * @param {string} ctaIcon
 * The icon displayed after the CTA text
 *
 * @return {JSX.element}
 */
export function SidebarList({
  children,
  title,
  icon,
  ctaUrl,
  ctaText = "See all",
  ctaIcon = "chevronright",
}) {
  const iconMap = new Map();
  iconMap.set("chevronright", <ChevronRight />);
  iconMap.set("externalarrow", <ExternalArrow />);

  const iconAlignments = new Map();
  iconAlignments.set("chevronright", "group-hocus:su-translate-x-01em");
  iconAlignments.set(
    "externalarrow",
    "group-hocus:su--translate-y-01em group-hocus:su-translate-x-01em [&>svg]:su-translate-y-1"
  );

  const hasChildren = children !== undefined;

  return hasChildren ? (
    <div
      className={[
        "su-component-sidebar-list su-flex su-flex-wrap su-gap-27",
      ].join(" ")}
    >
      {title && <SidebarHeading title={title} icon={icon} />}
      {children}
      {ctaUrl && (
        <a
          data-test="cta"
          href={ctaUrl}
          className={[
            "su-items-center su-group su-transition su-justify-center md:su-justify-start su-w-full su-flex su-text-digital-red dark:su-text-dark-mode-red su-flex-nowrap su-gap-2 su-leading-[125%] su-text-21 su-font-semibold su-no-underline hocus:su-underline *:su-transition",
          ].join(" ")}
        >
          <span>{ctaText}</span>
          <span
            className={["su-transition", iconAlignments.get(ctaIcon)].join(" ")}
          >
            {iconMap.get(ctaIcon)}
          </span>
        </a>
      )}
    </div>
  ) : (
    ""
  );
}
