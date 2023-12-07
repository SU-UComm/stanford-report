import { render } from "@testing-library/react";
import React from "react";
import { PullQuote } from "./PullQuote";

const testData = {
  avatar: "https://picsum.photos/200",
  name: "Samantha Bunke",
  title: "Ph.D. Student, Department of Chemical Engineering",
  quoteText:
    "<p>Working in a lab, everything is more abstract. You can’t really see it. [With Give & Go], I am literally getting up on the dumpsters, reaching in, and pulling stuff out. It’s so much fun.</p>",
};

describe("PullQuote", () => {
  it("should render the component", () => {
    render(
      <PullQuote
        image={testData.avatar}
        name={testData.name}
        title={testData.title}
        quote={testData.quoteText}
      />
    );
    const element = document.querySelector(".su-component-pullquote");
    expect(element).toBeInTheDocument();
  });

  it("should render the component with a large avatar", () => {
    render(
      <PullQuote
        image={testData.avatar}
        name={testData.name}
        title={testData.title}
        quote={testData.quoteText}
        avatarSize="large"
      />
    );
    const element = document.querySelector(".su-component-pullquote");
    const largeAvatar = document.querySelector('[data-test="size-large"');
    expect(element).toBeInTheDocument();
    expect(largeAvatar).toBeInTheDocument();
  });

  it("should not render the component", () => {
    render(
      <PullQuote
        image={testData.avatar}
        name={testData.name}
        title={testData.title}
      />
    );
    const element = document.querySelector(".su-component-pullquote");
    expect(element).toBeNull();
  });

  it("should render the component, without an avatar", () => {
    render(
      <PullQuote
        name={testData.name}
        quote={testData.quoteText}
        title={testData.title}
      />
    );
    const element = document.querySelector(".su-component-pullquote");
    const avatar = document.querySelector(".su-component-avatar");
    expect(avatar).toBeNull();
    expect(element).toBeInTheDocument();
  });
});
