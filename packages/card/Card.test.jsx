import { render, screen } from "@testing-library/react";
import React from "react";
import Card from "./Card";

const testData = {
  title: null,
  description: null,
  url: null,
  imageUrl: null,
  imageAlt: null,
  taxonomy: null,
  taxonomyUrl: null,
  type: null,
};

describe("Card", () => {
  it("should render the component", () => {
    render(<Card data={testData} />);
    const article = document.querySelector("article");
    expect(article).toBeInTheDocument();
  });

  it("should render an image when passed an image url", () => {
    render(<Card data={{ ...testData, imageUrl: "https://example.com" }} />);
    const image = document.querySelector("img");
    expect(image).toBeInTheDocument();
  });

  it("should render the correct image url when passed", () => {
    const imageUrl = "https://example.com/";
    render(<Card data={{ ...testData, imageUrl }} />);
    const image = document.querySelector("img");
    expect(image.src).toBe(imageUrl);
  });

  it("should render the correct image alt tag when passed", () => {
    const imageUrl = "https://example.com/";
    const imageAlt = "alt desc";
    render(<Card data={{ ...testData, imageUrl, imageAlt }} />);
    const image = document.querySelector("img");
    expect(image.alt).toBe(imageAlt);
  });

  it("should render the taxonomy when passed", () => {
    const taxonomy = "test taxonomy";
    render(<Card data={{ ...testData, taxonomy }} />);
    const taxonomyElement = screen.getByText(taxonomy);
    expect(taxonomyElement).toBeInTheDocument();
  });

  it("should render the taxonomy with the correct link when passed", () => {
    const taxonomy = "test taxonomy";
    const taxonomyUrl = "https://example.com/";
    render(<Card data={{ ...testData, taxonomy, taxonomyUrl }} />);
    const taxonomyElement = screen.getByText(taxonomy);
    expect(taxonomyElement.href).toBe(taxonomyUrl);
  });
});
