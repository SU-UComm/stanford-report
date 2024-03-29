import { render } from "@testing-library/react";
import React from "react";
import Acknowledgement from "./Component";

const testData = {
  title: "Article details",
  content:
    "<p>Acknowledgement lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet cursus sit amet dictum sit amet. Dui id ornare arcu odio. Scelerisque in dictum non consectetur. Facilisi nullam vehicula ipsum a arcu cursus vitae. Tempus quam pellentesque nec nam aliquam sem. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Porta non pulvinar neque laoreet. Lectus magna fringilla urna porttitor rhoncus. Vulputate dignissim suspendisse in est. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Dignissim sodales ut eu sem integer vitae justo eget.</p>",
};

describe("Acknowledgement", () => {
  it("should render the component", () => {
    render(
      <Acknowledgement title={testData.title} content={testData.content} />
    );
    const element = document.querySelector('[data-test="acknowledgement"]');
    expect(element).toBeInTheDocument();
  });

  it("should not render the component, when no content is supplied", () => {
    render(<Acknowledgement content="" />);
    const element = document.querySelector('[data-test="acknowledgement"]');
    expect(element).toBeNull();
  });
});
