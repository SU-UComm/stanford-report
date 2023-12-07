import { render } from "@testing-library/react";
import React from "react";
import { ExternalLink } from "./ExternalLink";

const testData = {
  liveUrl: "https://www.stanford.edu/",
  ctaText: "Read more",
  ctaSize: "large",
};

describe("ExternalLink", () => {
  it("should render the component", () => {
    render(
      <ExternalLink
        liveUrl={testData.liveUrl}
        ctaText={testData.ctaText}
        ctaSize={testData.ctaSize}
      />
    );
    const element = document.querySelector(".su-component-external-link");
    expect(element).toBeInTheDocument();
  });

  it("should not render the component", () => {
    render(
      <ExternalLink
        liveUrl=""
        ctaText={testData.ctaText}
        ctaSize={testData.ctaSize}
      />
    );
    const element = document.querySelector(".su-component-external-link");
    expect(element).toBeNull();
  });

  it("should render the component with default ctaText", () => {
    render(
      <ExternalLink liveUrl={testData.liveUrl} ctaSize={testData.ctaSize} />
    );
    const element = document.querySelector(".su-component-external-link");
    const ctaText = document.querySelector('[data-test="ctaText"]');
    expect(element).toBeInTheDocument();
    expect(ctaText).toBeInTheDocument();
    expect(ctaText.outerHTML).toEqual(
      '<span data-test="ctaText">Read more</span>'
    );
  });

  it("should render the component at a large size, linking to Stanford, with an external icon in the CTA", () => {
    render(
      <ExternalLink
        liveUrl={testData.liveUrl}
        ctaText={testData.ctaText}
        ctaSize={testData.ctaSize}
      />
    );
    const element = document.querySelector('[data-testid="svg-externalarrow"]');
    const largeSize = document.querySelector('[data-test="size-large"]');
    const linkElement = document.querySelector(".su-component-external-link");
    const linkElementHref = linkElement.getAttribute("href");
    expect(element).toBeInTheDocument();
    expect(largeSize).toBeInTheDocument();
    expect(linkElementHref).toEqual(testData.liveUrl);
  });
});
