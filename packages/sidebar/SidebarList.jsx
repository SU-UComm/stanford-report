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
  iconAlignments.set("chevronright", "su-items-center");
  iconAlignments.set("externalarrow", "su-items-end");

  const hasChildren = children !== undefined;

  return hasChildren ? (
    <div
      className={[
        "su-component-sidebar-list su-flex su-flex-wrap su-gap-[27px]",
      ].join(" ")}
    >
      {title && <SidebarHeading title={title} icon={icon} />}
      {children}
      {ctaUrl && (
        <a
          data-test="cta"
          href={ctaUrl}
          className={[
            "su-transition su-justify-center su-items-center md:su-justify-start hover:su-underline focus:su-underline su-w-full su-flex su-text-digital-red dark:su-text-dark-mode-red su-flex-nowrap su-gap-[2px] su-leading-[26.25px] su-text-[21px] su-font-semibold su-no-underline",
            iconAlignments.get(icon),
          ].join(" ")}
        >
          <span>{ctaText}</span>
          {iconMap.get(ctaIcon)}
        </a>
      )}
    </div>
  ) : (
    ""
  );
}
