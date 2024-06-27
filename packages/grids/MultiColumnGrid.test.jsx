import { render } from "@testing-library/react";
import React from "react";
import { MultiColumnGrid } from "./MultiColumnGrid";

const testDataThreeColumns = [
  <article>Column One</article>,
  <article>Column Two</article>,
  <article>Column Three</article>,
];

const testDataTwoColumns = [
  <article>Column One</article>,
  <article>Column Two</article>,
];

const testDataOneColumn = [<article>Column One</article>];

const testDataZeroColumn = [];

describe("MultiColumnGrid", () => {
  it("should render the component", () => {
    render(<MultiColumnGrid items={testDataThreeColumns} />);
    const grid = document.querySelector(".su-component-multicolumn");
    expect(grid).toBeInTheDocument();
  });

  it("should render the component with one item", () => {
    render(<MultiColumnGrid items={testDataOneColumn} />);
    const grid = document.querySelector(".su-component-multicolumn");
    expect(grid).toBeInTheDocument();
  });

  it("should not render the component", () => {
    render(<MultiColumnGrid items={testDataZeroColumn} />);
    const grid = document.querySelector(".su-component-multicolumn");
    expect(grid).toBeNull();
  });

  it("should render three columns with no line separators between", () => {
    render(<MultiColumnGrid items={testDataThreeColumns} />);
    const lineSeparators = document.querySelectorAll(".before\\:su-w-full");
    const articles = document.querySelectorAll("article");
    expect(articles).toHaveLength(3);
    expect(lineSeparators).toHaveLength(0);
  });

  it("should render two columns with no line separators between", () => {
    render(<MultiColumnGrid items={testDataTwoColumns} />);
    const lineSeparators = document.querySelectorAll(".before\\:su-w-full");
    const articles = document.querySelectorAll("article");
    expect(articles).toHaveLength(2);
    expect(lineSeparators).toHaveLength(0);
  });

  it("should render three columns with line separators between, first item does not have separator", () => {
    render(<MultiColumnGrid items={testDataThreeColumns} separator />);
    const lineSeparators = document.querySelectorAll(".before\\:su-w-full");
    const firstItemLineSeparator = document.querySelectorAll(
      '[data-test="column-0"].before\\:su-w-full'
    );
    expect(lineSeparators[0]).toBeInTheDocument();
    expect(lineSeparators).toHaveLength(2);
    expect(firstItemLineSeparator).toHaveLength(0);
  });

  it("should render two columns with a line separator between, first item does not have separator", () => {
    render(<MultiColumnGrid items={testDataTwoColumns} separator />);
    const lineSeparators = document.querySelectorAll(".before\\:su-w-full");
    const firstItemLineSeparator = document.querySelectorAll(
      '[data-test="column-0"].before\\:su-w-full'
    );
    expect(lineSeparators[0]).toBeInTheDocument();
    expect(lineSeparators).toHaveLength(1);
    expect(firstItemLineSeparator).toHaveLength(0);
  });
});
