import React, { Children } from "react";
import hash from "object-hash";
import { SidebarHeading } from "../headings/Heading";
import { ChevronRight, ExternalArrow } from "../SVG-library/SVG";

/**
 * Listing displayed in a sidebar, has a heading, listing and link
 *
 * @param {string} title
 * The title text
 *
 * @param {string} icon
 * The icon to display before the title text
 *
 * @param {string} headingSize
 * The semantic heading tag
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
  const iconMap = {
    chevronright: <ChevronRight />,
    externalarrow: <ExternalArrow />,
  };

  const iconAlignments = {
    chevronright: "su-items-center",
    externalarrow: "su-items-end",
  };

  return (
    <div
      className={[
        "su-component-sidebar-list su-flex su-flex-wrap su-gap-[27px]",
      ].join(" ")}
    >
      {title && <SidebarHeading title={title} icon={icon} />}
      {children}
      {ctaUrl && (
        <a
          href={ctaUrl}
          className={[
            "su-transition su-justify-center md:su-justify-start su-w-full su-flex su-text-digital-red dark:su-text-dark-mode-red su-flex-nowrap su-gap-[2px] su-leading-[26.25px] su-text-[21px] su-font-semibold su-no-underline",
            iconAlignments[ctaIcon],
          ].join(" ")}
        >
          <span>{ctaText}</span>
          {iconMap[ctaIcon]}
        </a>
      )}
    </div>
  );
}
