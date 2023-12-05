import { render } from "@testing-library/react";
import React from "react";
import { SidebarList } from "./SidebarList";

const testData = {
  title: "Lorem ipsum dolor",
  icon: "announcement",
  ctaUrl: "#",
  ctaText: "See all examples",
  ctaIcon: "chevronright",
};

describe("SidebarList", () => {
  it("should render the component", () => {
    render(
      <SidebarList>
        <article>Announcement 1</article>
      </SidebarList>
    );
    const element = document.querySelector(".su-component-sidebar-list");
    expect(element).toBeInTheDocument();
  });

  it("should render the component with a heading, 3 article and a CTA", () => {
    render(
      <SidebarList
        title={testData.title}
        icon={testData.icon}
        ctaUrl={testData.ctaUrl}
        ctaText={testData.ctaText}
      >
        <article>Announcement 1</article>
        <article>Announcement 2</article>
        <article>Announcement 3</article>
      </SidebarList>
    );
    const heading = document.querySelector(".su-component-sidebar-heading");
    const children = document.querySelector("article");
    const cta = document.querySelector("[data-test='cta']");
    const ctaIcon = document.querySelector("[data-test='cta'] svg");
    const ctaText = document.querySelector(
      "[data-test='cta'] > span:first-child"
    );
    const ctaURL = cta.getAttribute("href");

    expect(heading).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    expect(cta).toBeInTheDocument();
    expect(ctaIcon).toBeInTheDocument();

    expect(heading.textContent).toEqual(testData.title);
    expect(ctaText.textContent).toEqual(testData.ctaText);
    expect(ctaURL).toEqual(testData.ctaUrl);
  });

  it("should not render the component", () => {
    render(
      <SidebarList
        title={testData.title}
        icon={testData.icon}
        ctaUrl={testData.ctaUrl}
        ctaText={testData.ctaText}
      />
    );
    const element = document.querySelector(".su-component-sidebar-list");
    expect(element).toBeNull();
  });

  it("should render the component with an external icon in the CTA", () => {
    render(
      <SidebarList title={testData.title} ctaUrl="#" ctaIcon="externalarrow">
        <article>Announcement 1</article>
        <article>Announcement 2</article>
        <article>Announcement 3</article>
      </SidebarList>
    );
    const element = document.querySelector('[data-test="svg-externalarrow"]');
    expect(element).toBeNull();
  });
});
