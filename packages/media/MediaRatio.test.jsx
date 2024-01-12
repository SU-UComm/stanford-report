import { render } from "@testing-library/react";
import React from "react";
import MediaRatio from "./MediaRatio";
import VideoPlay from "../SVG-library/VideoPlay";

const testData = {
  imagerUrl: "https://picsum.photos/200",
  videoUrl: "https://example.com",
};

describe("MediaRatio", () => {
  it("should render the component", () => {
    render(<MediaRatio imagerUrl={testData.imagerUrl} />);
    const ratio = document.querySelector(".su-component-media-ratio");
    expect(ratio).toBeInTheDocument();
  });

  it("should render the component with a square ratio", () => {
    render(<MediaRatio imagerUrl={testData.imagerUrl} aspectRatio="square" />);
    const element = document.querySelector(".su-component-media-ratio");
    const ratio = document.querySelector(".su-aspect-\\[1\\/1\\]");
    expect(element).toBeInTheDocument();
    expect(ratio).toBeInTheDocument();
  });

  it("should render the component with a video icon", () => {
    render(
      <MediaRatio
        imagerUrl={testData.imagerUrl}
        videoUrl={testData.videoUrl}
        aspectRatio="card-small"
      >
        <div className="su-absolute su-left-[13px] su-bottom-[13px]">
          <VideoPlay />
        </div>
      </MediaRatio>
    );
    const ratio = document.querySelector(".su-component-media-ratio");
    const svg = document.querySelector('[data-testid="svg-videoplay"]');
    expect(ratio).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
  });
});
