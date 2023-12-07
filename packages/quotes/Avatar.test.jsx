import { render } from "@testing-library/react";
import React from "react";
import { Avatar } from "./Avatar";

const testData = {
  image: "https://picsum.photos/200",
  avatarSize: "large",
};

describe("Avatar", () => {
  it("should render the component", () => {
    render(<Avatar image={testData.image} avatarSize={testData.avatarSize} />);
    const element = document.querySelector(".su-component-avatar");
    expect(element).toBeInTheDocument();
  });

  it("should not render the component", () => {
    render(<Avatar image="" />);
    const element = document.querySelector(".su-component-avatar");
    expect(element).toBeNull();
  });

  it("should render the component at the large size", () => {
    render(<Avatar image={testData.image} avatarSize="large" />);
    const element = document.querySelector(".su-component-avatar");
    const avatar = document.querySelector('[data-test="size-large"]');
    expect(element).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });

  it("should render the component at the medium size", () => {
    render(<Avatar image={testData.image} avatarSize="medium" />);
    const element = document.querySelector(".su-component-avatar");
    const avatar = document.querySelector('[data-test="size-medium"]');
    expect(element).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });

  it("should render the component at the small size", () => {
    render(<Avatar image={testData.image} avatarSize="small" />);
    const element = document.querySelector(".su-component-avatar");
    const avatar = document.querySelector('[data-test="size-small"]');
    expect(element).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });
});
