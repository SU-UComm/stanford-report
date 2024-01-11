import { render } from "@testing-library/react";
import React from "react";
import InBrief from "./Component";

const testData = {
  points: ["Lorem ipsum dolor sit amet", "Test Two", "Test Three"],
};

const testDataNoPoints = {
  points: [],
};

describe("In Brief", () => {
  it("should render the component", () => {
    render(<InBrief points={testData.points} />);
    const element = document.querySelector('[data-component="in-brief"]');
    expect(element).toBeNull();
  });

  it("should not render the component, when no content is supplied", () => {
    render(<InBrief points={testDataNoPoints.points} />);
    const element = document.querySelector('[data-component="in-brief"]');
    expect(element).toBeNull();
  });
});
