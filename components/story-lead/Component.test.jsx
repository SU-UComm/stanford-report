import { render } from "@testing-library/react";
import React from "react";
import StoryLead from "./Component";

const testData = {
  content: "Lorem ipsum dolor sit amet",
};

const testDataNoPoints = {
  points: [],
};

describe("In Brief", () => {
  it("should render the component", () => {
    render(<StoryLead content={testData.content} />);
    const element = document.querySelector('[data-component="story-lead"]');
    expect(element).toBeNull();
  });

  it("should not render the component, when no content is supplied", () => {
    render(<StoryLead content={testDataNoPoints.content} />);
    const element = document.querySelector('[data-component="story-lead"]');
    expect(element).toBeNull();
  });
});
