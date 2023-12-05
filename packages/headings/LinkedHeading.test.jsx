import { render } from "@testing-library/react";
import React from "react";
import { LinkedHeading } from "./LinkedHeading";

const testData = {
  title: "Lorem ipsum dolor",
  ctaText: "Learn more",
  ctaUrl: "#",
};

describe("LinkedHeading", () => {
  it("should render the component", () => {
    render(
      <LinkedHeading
        title={testData.title}
        ctaText={testData.ctaText}
        ctaUrl={testData.ctaUrl}
      />
    );
    const lineHeading = document.querySelector(".su-component-line-heading");
    expect(lineHeading).toBeInTheDocument();
  });

  it("should not render the component", () => {
    render(<LinkedHeading title="" />);
    const lineHeading = document.querySelector(".su-component-line-heading");
    expect(lineHeading).toBeNull();
  });

  it("should render the title without the CTA", () => {
    render(<LinkedHeading title={testData.title} ctaText={testData.ctaText} />);
    const cta = document.querySelector('[data-test="cta"]');
    expect(cta).toBeNull();
  });
});
