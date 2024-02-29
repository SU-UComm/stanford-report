import { render } from "@testing-library/react";
import React from "react";
import VerticalCard from "./verticalCard";

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

describe("Vertical Card", () => {
  test("when we have a img url and hide images is set to false, an image should be shown", () => {
    render(
      <VerticalCard
        data={{ ...testData, imageUrl: "https://example.com" }}
        hideImages={false}
      />
    );

    const image = document.querySelector("img");
    expect(image).toBeInTheDocument();
  });

  test("when hide images is set", () => {
    render(
      <VerticalCard
        data={testData}
        cardType="vertical"
        displayThumbnail={false}
      />
    );

    const image = document.querySelector("img");

    expect(image).toBe(null);
  });

  test("when hide image is not set and no URL for the image is provided it should display a default image.", () => {
    render(
      <VerticalCard data={testData} cardType="vertical" displayThumbnail />
    );

    const image = document.querySelector("img");

    expect(image).toBeInTheDocument();
  });

  test("when a taxonomy is not present, it should not appear", () => {
    render(
      <VerticalCard
        data={testData}
        cardType="vertical"
        displayThumbnail={false}
      />
    );

    const taxonomy = document.querySelector(
      `[data-testid="vertical-card-taxonomy"]`
    );

    expect(taxonomy).toBe(null);
  });

  test("when a taxonomy is present, it should appear", () => {
    testData.taxonomy = "Earch & Climate";

    render(
      <VerticalCard
        data={testData}
        cardType="vertical"
        displayThumbnail={false}
      />
    );

    const taxonomy = document.querySelector(
      `[data-testid="vertical-card-taxonomy"]`
    );

    expect(taxonomy).toBeInTheDocument();
  });

  test("when a taxonomy is present, there should be a corresponding URL", () => {
    testData.taxonomyUrl = "https://test.com";
    testData.taxonomy = "Test";

    render(
      <VerticalCard
        data={testData}
        cardType="vertical"
        displayThumbnail={false}
      />
    );

    const taxonomyURL = document.querySelector(
      `[data-testid="vertical-card-taxonomy"] a`
    );

    expect(taxonomyURL.href).toMatch(/https:\/\/.*/);
  });

  test("when a card does not have a type, no type should render", () => {
    render(
      <VerticalCard
        data={testData}
        cardType="vertical"
        displayThumbnail={false}
      />
    );

    const taxonomy = document.querySelector(
      `[data-testid="vertical-card-type"]`
    );

    expect(taxonomy).toBe(null);
  });

  test("when a card does have a type, the type should render", () => {
    testData.type = "News";

    render(
      <VerticalCard
        data={testData}
        cardType="vertical"
        displayThumbnail={false}
      />
    );

    const taxonomy = document.querySelector(
      `[data-testid="vertical-card-type"]`
    );

    expect(taxonomy).toBeInTheDocument();
  });

  test("The type of card should correspond to the type of SVG icon", () => {
    testData.type = "News";

    render(
      <VerticalCard
        data={testData}
        cardType="vertical"
        displayThumbnail={false}
      />
    );

    const svg = document.querySelector(`[data-testid="svg-news"]`);

    expect(svg).toBeInTheDocument();
  });

  test("No SVG icon should appear if the type doesn't correspond to any defined SVGs", () => {
    testData.type = "Test";

    render(
      <VerticalCard
        data={testData}
        cardType="vertical"
        displayThumbnail={false}
      />
    );

    const svg = document.querySelector(
      `[data-testid="vertical-card-type"] svg`
    );

    expect(svg).toBe(null);
  });
});
