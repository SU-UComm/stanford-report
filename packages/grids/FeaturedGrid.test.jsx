import { render } from "@testing-library/react";
import React from "react";
import { FeaturedGrid } from "./FeaturedGrid";

const items = [
  <article>Featured column</article>,
  <article>Supplementary column one</article>,
  <article>Supplementary column two</article>,
];

// const notEnoughItems = [<article>Featured column</article>];

describe("FeaturedGrid", () => {
  it("should render the component", () => {
    render(<FeaturedGrid items={items} />);
    const grid = document.querySelector(".su-component-featured-grid");
    expect(grid).toBeInTheDocument();
  });

  // it("should not render the component", () => {
  //   render(<FeaturedGrid items={notEnoughItems} />);
  //   const grid = document.querySelector(".su-component-featured-grid");
  //   expect(grid).toBeNull();
  // });

  it("should render the featured item on the right on large screens", () => {
    render(<FeaturedGrid items={items} alignment="right" />);
    const rightAlignment = document.querySelector(".md\\:su-order-2");
    expect(rightAlignment).toBeInTheDocument();
  });

  it("should render a separator line between supplementary items", () => {
    render(<FeaturedGrid items={items} />);
    const separatorBorder = document.querySelector(".before\\:su-w-full");
    expect(separatorBorder).toBeInTheDocument();
  });
});
