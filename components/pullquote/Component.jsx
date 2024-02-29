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
export default function PullQuoteStory({ displayConfiguration, imageUrl }) {
  const { quote, name, title, width } = displayConfiguration;

  return (
    <Container width={width}>
      <PullQuote quote={quote} name={name} title={title} avatar={imageUrl} />
    </Container>
  );
}
