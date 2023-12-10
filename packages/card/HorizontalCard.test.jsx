import { render } from "@testing-library/react";
import React from "react";
import HorizontalCard from "./HorizontalCard";

const testData = {
  title: null,
  description: null,
  url: null,
  imageUrl: null,
  imageAlt: null,
  taxonomy: null,
  taxonomyUrl: null,
  type: null,
  date: "2023-12-09T12:00:00-08:00",
  endDate: "2023-12-09T17:00:00-08:00",
};

describe("Horizontal Card", () => {
  test("If a card size is large it should not have a date", () => {
    render(<HorizontalCard data={testData} cardSize="large" />);

    const date = document.querySelector(
      `[data-testid="horizontal-event-date"]`
    );

    expect(date).toBe(null);
  });

  test("If a card does not have a taxonomy, it should not display the taxonomy paragraph", () => {
    render(<HorizontalCard data={testData} cardSize="large" />);

    const taxonomy = document.querySelector(
      `[data-testid="horizontal-card-taxonomy"]`
    );

    expect(taxonomy).toBe(null);
  });

  test("If a large card has a taxonomy and taxonomy URL it should not display, only small event cards show a taxonomy", () => {
    const data = {
      ...testData,
      taxonomy: "Test taxonomy",
      taxonomyUrl: "https://test.com",
    };

    render(<HorizontalCard data={data} cardSize="large" />);

    const taxonomy = document.querySelector(
      `[data-testid="horizontal-card-taxonomy"]`
    );

    expect(taxonomy).toBe(null);
  });

  test("If a large card size has a type, it should display the type node", () => {
    const data = { ...testData, type: "Article" };

    render(<HorizontalCard data={data} cardSize="large" />);

    const type = document.querySelector(`[data-testid="horizontal-card-type"]`);

    expect(type).toBeInTheDocument();
  });

  test("If a large card has no type, there shouldn't be a type in the document", () => {
    render(<HorizontalCard data={testData} cardSize="large" />);

    const type = document.querySelector(`[data-testid="horizontal-card-type"]`);

    expect(type).toBe(null);
  });

  test("If the card is large, it should feature a description node", () => {
    render(<HorizontalCard data={testData} cardSize="large" />);

    const description = document.querySelector(
      `[data-testid="horizontal-card-description"]`
    );

    expect(description).toBeInTheDocument();
  });

  test("If the horizontal card is a small size and has a date, the date should display", () => {
    const data = { ...testData, date: "2023-04-27 00:00:00" };

    render(<HorizontalCard data={data} cardSize="small" />);

    const date = document.querySelector(
      `[data-testid="horizontal-event-date"]`
    );

    expect(date).toBeInTheDocument();
  });

  test("If the card is small, and has a taxonomy, the taxonomy should show", () => {
    const data = {
      ...testData,
      taxonomy: "Test taxonomy",
    };

    render(<HorizontalCard data={data} cardSize="small" />);

    const taxonomy = document.querySelector(
      `[data-testid="horizontal-card-taxonomy"]`
    );

    expect(taxonomy).toBeInTheDocument();
  });

  test("If the card is small, and does not have a taxonomy, the taxonomy should not show", () => {
    const data = { ...testData };

    render(<HorizontalCard data={data} cardSize="small" />);

    const taxonomy = document.querySelector(
      `[data-testid="horizontal-card-taxonomy"]`
    );

    expect(taxonomy).toBe(null);
  });

  test("If the card is small, the type should not appear", () => {
    const data = { ...testData, type: "Article" };

    render(<HorizontalCard data={data} cardSize="small" />);

    const taxonomy = document.querySelector(
      `[data-testid="horizontal-card-type"]`
    );

    expect(taxonomy).toBe(null);
  });

  test("If the card is small, the description should not appear", () => {
    const data = { ...testData, description: "Test description" };

    render(<HorizontalCard data={data} cardSize="small" />);

    const taxonomy = document.querySelector(
      `[data-testid="horizontal-card-description"]`
    );

    expect(taxonomy).toBe(null);
  });
});
