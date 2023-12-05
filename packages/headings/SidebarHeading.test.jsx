import { render } from "@testing-library/react";
import React from "react";
import { SidebarHeading } from "./SidebarHeading";

const testData = {
  title: "Lorem ipsum dolor",
  icon: "announcement",
};

describe("SidebarHeading", () => {
  it("should render the component", () => {
    render(<SidebarHeading title={testData.title} icon={testData.icon} />);
    const element = document.querySelector(".su-component-sidebar-heading");
    const grey = document.querySelector(".su-text-black-90");
    expect(element).toBeInTheDocument();
    expect(grey).toBeInTheDocument();
  });

  it("should not render the component", () => {
    render(<SidebarHeading title="" />);
    const element = document.querySelector(".su-component-sidebar-heading");
    expect(element).toBeNull();
  });

  it("should render the component without an icon", () => {
    render(<SidebarHeading title={testData.title} />);
    const element = document.querySelector('[data-test="icon"]');
    expect(element).toBeNull();
  });

  it("should render the component in the black colour variant", () => {
    render(
      <SidebarHeading
        title={testData.title}
        icon={testData.icon}
        color="black"
      />
    );
    const element = document.querySelector(".su-text-black");
    expect(element).toBeInTheDocument();
  });
});
