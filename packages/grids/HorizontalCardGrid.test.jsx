import { render } from "@testing-library/react";
import React from "react";
import { HorizontalCardGrid } from "./HorizontalCardGrid";

const testDataSixItems = [
  <article>Item One</article>,
  <article>Item Two</article>,
  <article>Item Three</article>,
  <article>Item Four</article>,
  <article>Item Five</article>,
  <article>Item Six</article>,
];

const testDataThreeItems = [
  <article>Item One</article>,
  <article>Item Two</article>,
  <article>Item Three</article>,
];

const testDataNoItems = [];

describe("HorizontalCardGrid", () => {
  it("should render the component", () => {
    render(<HorizontalCardGrid items={testDataSixItems} />);
    const grid = document.querySelector(".su-component-horizontal-card-grid");
    expect(grid).toBeInTheDocument();
  });

  it("should not render the component", () => {
    render(<HorizontalCardGrid items={testDataNoItems} />);
    const grid = document.querySelector(".su-component-horizontal-card-grid");
    expect(grid).toBeNull();
  });

  it("should render the component with six items in the horizontal format", () => {
    render(<HorizontalCardGrid items={testDataSixItems} />);
    const grid = document.querySelector(".su-component-horizontal-card-grid");
    const articles = document.querySelectorAll("article");
    const horizontal = document.querySelector(
      '[data-test="orientation-horizontal"]'
    );
    expect(grid).toBeInTheDocument();
    expect(horizontal).toBeInTheDocument();
    expect(articles.length).toEqual(testDataSixItems.length);
  });

  it("should render the component with three items in the vertical orientation", () => {
    render(
      <HorizontalCardGrid orientation="vertical" items={testDataThreeItems} />
    );
    const grid = document.querySelector(".su-component-horizontal-card-grid");
    const articles = document.querySelectorAll("article");
    expect(grid).toBeInTheDocument();
    expect(articles.length).toEqual(testDataThreeItems.length);
  });
});
