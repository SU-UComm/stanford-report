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

  it("Should show the piechart SVG when the pie chart is selected", () => {
    render(
      <FactCallout displayConfiguration={testData.displayConfiguration} />
    );

    const element = document.querySelector(`[data-testid="pie-chart-svg"]`);

    expect(element).toBeInTheDocument();
  });

  // it("Should show the bargraph SVG when the bar graph is selected", () => {
  //   testData.displayConfiguration = {
  //     ...testData.displayConfiguration,
  //     icon: "bar graph",
  //   };

  //   render(
  //     <FactCallout displayConfiguration={testData.displayConfiguration} />
  //   );

  //   const element = document.querySelector(`[data-testid="bar-graph-svg"]`);

  //   expect(element).toBeInTheDocument();
  // });
});
