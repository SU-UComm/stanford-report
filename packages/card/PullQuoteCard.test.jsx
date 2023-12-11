import { render } from "@testing-library/react";
import React from "react";
import PullQuoteCard from "./PullQuoteCard";

const testData = {
  imageUrl: "https://picsum.photos/200",
  quote:
    "<p>A sanctuary, it’s a forever thing. And so we want to know not only what’s here now, but how it’s changing over time.</p>",
  description:
    "<p><strong>Stephen Palumbi</strong>, the Jane and Marshall Steel Jr. Professor in Marine Sciences and a professor of biology, is working with the Northern Chumash Tribe to assess the health of what could soon become the largest national marine sanctuary in the continental U.S.</p>",
  liveUrl: "https://www.stanford.edu/",
  ctaText: "Read the story",
};

const noQuoteData = {
  imageUrl: "https://picsum.photos/200",
  description:
    "<p><strong>Stephen Palumbi</strong>, the Jane and Marshall Steel Jr. Professor in Marine Sciences and a professor of biology, is working with the Northern Chumash Tribe to assess the health of what could soon become the largest national marine sanctuary in the continental U.S.</p>",
  liveUrl: "https://www.stanford.edu/",
  ctaText: "Read the story",
};

const noAvatarData = {
  quote:
    "<p>A sanctuary, it’s a forever thing. And so we want to know not only what’s here now, but how it’s changing over time.</p>",
  liveUrl: "https://www.stanford.edu/",
  ctaText: "Read the story",
};

describe("PullQuoteCard", () => {
  test("should render the component", () => {
    render(<PullQuoteCard data={testData} />);

    const element = document.querySelector(".su-component-card-pullquote");
    expect(element).toBeInTheDocument();
  });

  test("should not render the component", () => {
    render(<PullQuoteCard data={noQuoteData} />);

    const element = document.querySelector(".su-component-card-pullquote");
    expect(element).toBeNull();
  });

  test("should render the component with an avatar, description and link", () => {
    render(<PullQuoteCard data={testData} />);

    const element = document.querySelector(".su-component-card-pullquote");
    const avatar = document.querySelector(`.su-component-avatar`);
    const externalLink = document.querySelector(`.su-component-external-link`);
    const description = document.querySelector(
      `[data-test="pullquote-description"]`
    );
    expect(element).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(externalLink).toBeInTheDocument();
  });

  test("should render the component with an avatar", () => {
    render(<PullQuoteCard data={testData} />);

    const element = document.querySelector(".su-component-card-pullquote");
    const avatar = document.querySelector(`.su-component-avatar`);
    expect(element).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });

  test("should render the component without an avatar and without a description", () => {
    render(<PullQuoteCard data={noAvatarData} />);

    const element = document.querySelector(".su-component-card-pullquote");
    const avatar = document.querySelector(`.su-component-avatar`);
    const description = document.querySelector(
      `[data-test="pullquote-description"]`
    );
    expect(element).toBeInTheDocument();
    expect(avatar).toBeNull();
    expect(description).toBeNull();
  });
});
