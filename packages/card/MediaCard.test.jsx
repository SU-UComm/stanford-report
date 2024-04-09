import { render } from "@testing-library/react";
import React from "react";
import MediaCard from "./MediaCard";

const testData = {
  title: "This is a title",
  description: "This is a test description",
  url: null,
  imageUrl: "https://picsum.photos/200",
  imageAlt: null,
  taxonomy: null,
  taxonomyUrl: null,
  type: "Book",
};

const testAllData = {
  title: "This is a title",
  description: "This is a test description",
  liveUrl: "https://www.squiz.net",
  imageUrl: "https://picsum.photos/200",
  imageAlt: "Alt tag text",
  taxonomy: "Featured reading",
  taxonomyUrl: null,
  author: "Lorem ipsum",
  type: "Book",
};

const testDataNoTitle = {
  description: "This is a test description",
  url: null,
  imageUrl: "https://picsum.photos/200",
  imageAlt: null,
  taxonomy: null,
  taxonomyUrl: null,
  type: "Book",
};

describe("Media Card", () => {
  it("should render the component", () => {
    render(<MediaCard data={testData} />);
    const element = document.querySelector('[data-test="media-card"]');
    expect(element).toBeInTheDocument();
  });

  it("should render the component with an image and description", () => {
    render(<MediaCard data={testData} />);
    const element = document.querySelector('[data-test="media-card"]');
    const description = document.querySelector(
      '[data-test="mediacard-description"]'
    );
    const image = document.querySelector(".su-media-card-thumb");
    expect(image).toBeInTheDocument();
    expect(element).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("should render the component with all the book data", () => {
    render(<MediaCard data={testAllData} />);
    const element = document.querySelector('[data-test="media-card"]');
    const description = document.querySelector(
      '[data-test="mediacard-description"]'
    );
    const gradientBookIcon = document.querySelector(
      '[data-testid="svg-featuredreading-light"]'
    );
    const openCoverBookIcon = document.querySelector(
      '[data-testid="svg-book-open-cover"]'
    );
    const author = document.querySelector('[data-test="mediacard-author"]');
    const image = document.querySelector(".su-media-card-thumb");

    expect(image).toBeInTheDocument();
    expect(element).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(gradientBookIcon).toBeInTheDocument();
    expect(openCoverBookIcon).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });

  it("should not render the component", () => {
    render(<MediaCard data={testDataNoTitle} />);
    const element = document.querySelector('[data-test="media-card"]');
    expect(element).toBeNull();
  });
});
