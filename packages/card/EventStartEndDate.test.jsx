import { render } from "@testing-library/react";
import React from "react";
import EventStartEndDate from "./EventStartEndDate";

const testData = {
  date: "2023-12-09T12:00:00-08:00",
  endDate: "2023-12-09T17:00:00-08:00",
};

describe("Event start and end date component", () => {
  test("If there is no end date, the formatting should present as follows, month day | time", () => {
    const data = { ...testData, endDate: null };

    const { date, endDate } = data;

    render(<EventStartEndDate start={date} end={endDate} />);

    const dateNode = document.querySelector(`[data-testid="event-date"]`);
    const dateStr = dateNode.textContent;

    expect(dateStr).toMatch(/\w+ \d+ \| \d+:\d+ \w+/);
  });

  test("If there is an end date, the formatting should present as follows, month startDay - month endDay", () => {
    const data = { ...testData, endDate: "2023-12-19T17:00:00-08:00" };

    const { date, endDate } = data;

    render(<EventStartEndDate start={date} end={endDate} />);

    const dateNode = document.querySelector(`[data-testid="event-date"]`);
    const dateStr = dateNode.textContent;

    expect(dateStr).toMatch(/\w+ \d+ - \w+ \d+/);
  });

  test("If there is no start and end dates passed into the component, there should be no date output", () => {
    const data = { date: null, endDate: null };

    const { date, endDate } = data;

    render(<EventStartEndDate start={date} end={endDate} />);

    const dateNode = document.querySelector(`[data-testid="event-date"]`);

    expect(dateNode).toBe(null);
  });

  test("If start and end dates match, then it should present as if there is no end date, eg: month startDay - month endDay", () => {
    const { date, endDate } = testData;

    render(<EventStartEndDate start={date} end={endDate} />);

    const dateNode = document.querySelector(`[data-testid="event-date"]`);
    const dateStr = dateNode.textContent;

    expect(dateStr).toMatch(/\w+ \d+ \| \d+:\d+ \w+/);
  });
});
