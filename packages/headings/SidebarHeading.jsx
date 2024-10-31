import React from "react";
import { cnb } from "cnbuilder";
import { faSquareFull } from "@fortawesome/pro-solid-svg-icons";
import { FAIcon } from "../icons/FAIcon";
import {
  Announcement,
  EventsCalendar,
  BullseyePointer,
  FeaturedReading,
  FeaturedAudio,
  MediaGallery,
  TrendingUp,
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
  iconMap.set("Featured reading", {
    light: <FeaturedReading variant="light" />,
    dark: <FeaturedReading variant="dark" />,
  });
  iconMap.set("Featured audio", {
    light: <FeaturedAudio variant="light" />,
    dark: <FeaturedAudio variant="dark" />,
  });
  iconMap.set("mediagallery", {
    light: <MediaGallery variant="light" />,
    dark: <MediaGallery variant="dark" />,
  });
  iconMap.set("trendingup", {
    light: <TrendingUp variant="light" />,
    dark: <TrendingUp variant="dark" />,
  });

  const Tag = headingSize;
  return title !== "" ? (
    <div className="su-text-white su-component-sidebar-heading su-w-full su-flex su-gap-6 su-items-center su-my-0 su-font-sans">
      <FAIcon
        data-testid="icon"
        set="solid"
        icon={icon === "announcement" ? "calendar-days" : ""}
        mask={faSquareFull}
        className="su-bg-gradient-to-r su-from-digital-red su-to-digital-red-dark su-text-white"
      />
      <span
        className={cnb(
          color === "grey" &&
            "su-text-black-90 dark:su-text-white su-font-semibold su-text-18 su-items-end",
          color === "black" &&
            "su-text-black dark:su-text-white su-font-bold su-text-20 md:su-text-28 su-items-start",
          color === "media" &&
            "su-text-black-90 dark:su-text-black-20 su-font-semibold su-text-18 su-items-center"
        )}
      >
        {title}
      </span>
    </div>
  ) : (
    ""
  );
}
