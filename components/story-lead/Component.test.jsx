import { render } from "@testing-library/react";
import React from "react";
import StoryLead from "./Component";

const testData = {
  content: "<p>Lorem ipsum dolor sit amet</p>",
};

describe("Story Lead", () => {
  it("should render the component", () => {
    render(<StoryLead content={testData.content} />);
    const element = document.querySelector(
      '[data-test="component-story-lead"]'
    );
    expect(element).toBeInTheDocument();
  });

  it("should not render the component, when no content is supplied", () => {
    render(<StoryLead content={null} />);
    const element = document.querySelector(
      '[data-test="component-story-lead"]'
    );
    expect(element).toBeNull();
  });

  it("should render the component with an SVG", () => {
    render(<StoryLead variant="Featured Story" content={testData.content} />);
    const element = document.querySelector(
      '[data-test="component-story-lead"]'
    );
    const svg = document.querySelector(
      '[data-test="component-story-lead-letter"]'
    );
    expect(element).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
  });

  it("should render the component with no SVG letter", () => {
    render(<StoryLead variant="Basic Story" content={testData.content} />);
    const element = document.querySelector(
      '[data-test="component-story-lead"]'
    );
    const svg = document.querySelector(
      '[data-test="component-story-lead-letter"]'
    );
    expect(element).toBeInTheDocument();
    expect(svg).toBeNull();
  });
});
