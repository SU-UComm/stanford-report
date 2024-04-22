import React from "react";

/**
 * checks if the date portion of two timestamps match
 * eg: 2023-05-12 === 2023-05-12
 *
 * @param {string} start
 * the starting date
 *
 * @param {string} end
 * the ending date
 *
 * @returns {bool}
 */
function datesMatch(start, end) {
  if (!end) return true;

  const sDate = start.match(/(\d+-\d+-\d+)/)[0];
  const eDate = end.match(/(\d+-\d+-\d+)/)[0];

  return sDate === eDate;
}

/**
 * Date formatter sub-component
 *
 * @param {object} prop.time
 * The timestamp, comes from the date prop of the main component
 *
 * @returns {JSX.Element}
 */
export default function EventStartEndDate({ start, end }) {
  if (!start && !end) return null;

  const sDate = new Date(start);
  const eDate = end ? new Date(end) : null;
  const params = {
    day: "numeric",
    month: "short",
    hour12: true,
    time: "long",
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "numeric",
  };

  let fullDate = "";

  // do the start end end dates match?
  const matchingDates = datesMatch(start, end);

  // if an end date is there, time is not present.
  if (!matchingDates) {
    delete params.time;
    delete params.hour;
    delete params.minute;
  }

  // start date
  const startDateFull = new Intl.DateTimeFormat("en-US", params).format(sDate);

  // end date
  const endDateFull = end
    ? new Intl.DateTimeFormat("en-US", params).format(eDate)
    : "";

  // single date for matching dates
  if (matchingDates) {
    return (
      <span data-testid="event-date" className="su-mb-0 su-text-16">
        {startDateFull.replace(/, /, " | ")}
      </span>
    );
  }

  // start day & end day
  fullDate += `${startDateFull} - ${endDateFull}`;

  return (
    <span data-testid="event-date" className="su-mb-0 su-text-16">
      {fullDate}
    </span>
  );
}
