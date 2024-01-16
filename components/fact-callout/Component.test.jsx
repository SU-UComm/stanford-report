import { render } from "@testing-library/react";
import React from "react";
import FactCallout from "./Component";

const testData = {
  displayConfiguration: {
    icon: "pie chart",
    factText: "Test text",
    indicatorPosition: "top",
    width: "content",
  },
};

describe("FactCallout", () => {
  it("Should display a 'fact-wrapper__decoration-top' node in the DOM if the indicator is set to 'top'", () => {
    render(
      <FactCallout displayConfiguration={testData.displayConfiguration} />
    );

    const element = document.querySelector(".fact-wrapper__decoration-top");

    expect(element).toBeInTheDocument();
  });
});

describe("FactCallout", () => {
  it("Should display a 'fact-wrapper__decoration-bottom' node in the DOM if the indicator is set to 'bottom'", () => {
    testData.displayConfiguration = {
      ...testData.displayConfiguration,
      indicatorPosition: "bottom",
    };

    render(
      <FactCallout displayConfiguration={testData.displayConfiguration} />
    );

    const element = document.querySelector(".fact-wrapper__decoration-bottom");

    expect(element).toBeInTheDocument();
  });
});
