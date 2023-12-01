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
  test("when a specific card type is passed the vertical card is not shown", () => {
    render(<Card data={testData} cardType="horizontal" />);

    const verticalCardElement = screen.queryByTestId("vertical-card");

    expect(verticalCardElement).toBeNull();
  });

  test("when no card type is passed a vertical card should be shown", () => {
    render(<Card data={testData} cardType={undefined} />);

    const verticalCardElement = screen.getByTestId("vertical-card");

    expect(verticalCardElement).toBeInTheDocument();
  });

  test("when hide images is set", () => {
    render(<Card data={testData} cardType="vertical" hideImages />);

    const image = screen.queryByTestId("vertical-card-image");

    expect(image).toBe(null);
  });

  test("when hide images is not set", () => {
    const data = { ...testData, imageUrl: "https://picsum.photos/500/330" };

    render(<Card data={data} cardType="vertical" hideImages={false} />);

    const image = screen.getByTestId("vertical-card-image-wrapper");

    expect(image).toBeInTheDocument();
  });
});
