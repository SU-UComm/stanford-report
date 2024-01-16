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
  const { imageUrl } = data[0];

  const widthMap = new Map();

  widthMap.set("content", "narrow");
  widthMap.set("container", "wide");

  const widthSetting = widthMap.get(width)
    ? widthMap.get(width)
    : widthMap.get("content");

  return (
    <Container paddingX={false} width={widthSetting}>
      <PullQuote quote={quote} name={name} title={title} avatar={imageUrl} />
    </Container>
  );
}
