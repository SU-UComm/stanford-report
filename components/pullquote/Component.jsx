import React from "react";

// import specific templates for the component
import { PullQuote } from "../../packages/quotes/Quotes";
import { Container } from "../../packages/grids/Grids";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */
export default function PullQuoteStory({ displayConfiguration, data }) {
  const { quote, name, title, width } = displayConfiguration;

  let imageUrl = "";

  if (data.type === "page_standard")
    imageUrl = data.metadata.csFeaturedImageUrl[0];
  else if (data.type === "image") imageUrl = data.url;

  return (
    <Container paddingX={false} width={width}>
      <PullQuote quote={quote} name={name} title={title} avatar={imageUrl} />
    </Container>
  );
}
