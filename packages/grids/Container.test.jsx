import { render } from "@testing-library/react";
import React from "react";
import { Container } from "./Container";

describe("Container", () => {
  it("should render the component", () => {
    render(
      <Container>
        <p>This is some content</p>
      </Container>
    );
    const element = document.querySelector(".su-component-container");
    expect(element).toBeInTheDocument();
  });

  it("should not render the component", () => {
    render(<Container />);
    const element = document.querySelector(".su-component-container");
    expect(element).toBeNull();
  });

  it("should render the component with a wide container width", () => {
    render(
      <Container width="wide">
        <p>This is some content</p>
      </Container>
    );
    const element = document.querySelector(".su-component-container");
    const width = document.querySelector(".su-container-wide");
    expect(element).toBeInTheDocument();
    expect(width).toBeInTheDocument();
  });

  it("should render the component with a wide container width and with padding", () => {
    render(
      <Container width="wide">
        <p>This is some content</p>
      </Container>
    );
    const element = document.querySelector(".su-component-container");
    const width = document.querySelector(".su-container-wide");
    const paddingX = document.querySelector(".su-container-px");
    expect(element).toBeInTheDocument();
    expect(width).toBeInTheDocument();
    expect(paddingX).toBeInTheDocument();
  });

  it("should render the component at a wide width, without horizontal padding", () => {
    render(
      <Container width="wide" paddingX={false}>
        <p>This is some content</p>
      </Container>
    );
    const element = document.querySelector(".su-component-container");
    const width = document.querySelector(".su-container-wide");
    const paddingX = document.querySelector(".su-container-px");
    expect(element).toBeInTheDocument();
    expect(width).toBeInTheDocument();
    expect(paddingX).toBeNull();
  });
});
