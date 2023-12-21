import { render } from "@testing-library/react";
import React from "react";
import CardThumbnail from "./CardThumbnail";

const testData = {
  imagerUrl: "https://picsum.photos/200",
  videoUrl: "https://example.com",
};

describe("CardThumbnail", () => {
  it("should render the component", () => {
    render(<CardThumbnail imagerUrl={testData.imagerUrl} />);
    const element = document.querySelector(".su-component-card-thumbnail");
    expect(element).toBeInTheDocument();
  });

  it("should render the component with a square ratio", () => {
    render(
      <CardThumbnail imagerUrl={testData.imagerUrl} aspectRatio="square" />
    );
    const element = document.querySelector(".su-component-card-thumbnail");
    const ratio = document.querySelector(".su-aspect-\\[1\\/1\\]");
    expect(element).toBeInTheDocument();
    expect(ratio).toBeInTheDocument();
  });

  it("should render the component with a video icon", () => {
    render(
      <CardThumbnail
        imagerUrl={testData.imagerUrl}
        videoUrl={testData.videoUrl}
        aspectRatio="card"
      />
    );
    const element = document.querySelector(".su-component-card-thumbnail");
    const svg = document.querySelector('[data-testid="svg-videoplay"]');
    expect(element).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
  });
});
