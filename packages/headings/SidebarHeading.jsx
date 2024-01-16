import React from "react";
import {
  Announcement,
  EventsCalendar,
  BullseyePointer,
} from "../SVG-library/SVG";

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
 * @param {string} color
 * The colour variant to display
 *
 * @return {JSX.element}
 */
export function SidebarHeading({
  title,
  icon,
  headingSize = "h2",
  color = "grey",
}) {
  const iconMap = new Map();
  iconMap.set("announcement", {
    light: <Announcement variant="light" />,
    dark: <Announcement variant="dark" />,
  });
  iconMap.set("eventscalendar", {
    light: <EventsCalendar variant="light" />,
    dark: <EventsCalendar variant="dark" />,
  });
  iconMap.set("bullseyePointer", {
    light: <BullseyePointer variant="light" />,
    dark: <BullseyePointer variant="dark" />,
  });

  const colorClassMap = new Map();
  colorClassMap.set(
    "grey",
    "su-text-black-90 dark:su-text-white su-font-semibold su-text-[18px] su-items-end"
  );
  colorClassMap.set(
    "black",
    "su-text-black dark:su-text-white su-font-bold su-text-[20px] md:su-text-[28px] su-items-start"
  );

  const Tag = headingSize;
  return title !== "" ? (
    <Tag
      className={[
        "su-component-sidebar-heading su-w-full su-flex su-flex-wrap su-gap-[6px] su-my-0 su-font-sans",
        colorClassMap.get(color),
      ].join(" ")}
    >
      {iconMap.get(icon) &&
        "light" in iconMap.get(icon) &&
        "dark" in iconMap.get(icon) && (
          <>
            <span data-test="icon" className="dark:su-hidden">
              {iconMap.get(icon).light}
            </span>
            <span data-test="icon" className="su-hidden dark:su-block">
              {iconMap.get(icon).dark}
            </span>
          </>
        )}
      <span>{title}</span>
    </Tag>
  ) : (
    ""
  );
}
