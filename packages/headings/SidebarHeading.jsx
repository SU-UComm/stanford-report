import React from "react";
import { Announcement, EventsCalendar } from "../SVG-library/SVG";

/**
 * Renders out the icon heading
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
export function SidebarHeading({
  title,
  icon,
  headingSize = "h2",
  color = "grey",
}) {
  const iconMap = {
    announcement: {
      light: <Announcement variant="light" />,
      dark: <Announcement variant="dark" />,
    },
    eventscalendar: {
      light: <EventsCalendar variant="light" />,
      dark: <EventsCalendar variant="dark" />,
    },
  };

  const colorClassMap = {
    grey: "su-text-black-90 dark:su-text-white su-font-semibold su-text-[18px] su-items-end",
    black:
      "su-text-black dark:su-text-white su-font-bold su-text-[16px] md:su-text-[18px] su-items-start",
  };

  const Tag = headingSize;
  return title !== "" ? (
    <Tag
      className={[
        "su-component-sidebar-heading su-w-full su-flex su-flex-wrap su-gap-[6px] su-my-0 su-font-sans",
        colorClassMap[color],
      ].join(" ")}
    >
      {iconMap[icon] && "light" in iconMap[icon] && "dark" in iconMap[icon] && (
        <>
          <span data-test="icon" className="dark:su-hidden">
            {iconMap[icon].light}
          </span>
          <span data-test="icon" className="su-hidden dark:su-block">
            {iconMap[icon].dark}
          </span>
        </>
      )}
      <span>{title}</span>
    </Tag>
  ) : (
    ""
  );
}
