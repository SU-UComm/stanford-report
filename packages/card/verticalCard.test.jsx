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
    render(<VerticalCard data={testData} cardType="vertical" hideImages />);

    const image = document.querySelector("img");

    expect(image).toBe(null);
  });
});
