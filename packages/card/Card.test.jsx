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
});
