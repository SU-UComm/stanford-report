import React from "react";

// import specific templates for the component
import Card from "../../packages/card/Card";
import { LinkedHeading } from "../../packages/headings/Heading";
import { HorizontalCardGrid } from "../../packages/grids/Grids";
import { Container } from "../../packages/grids/Container";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */
export default function Base({ headingData, displayConfiguration, data }) {
  const noOfCards = Number(displayConfiguration.numberOfEvents);
  const cards = [];

  console.log(noOfCards);

  data.forEach((card, i) => {
    if (i + 1 <= noOfCards)
      cards.push(<Card data={card} cardType="horizontal" />);
  });

  return (
    <Container width="content" data-component="events-section">
      <LinkedHeading
        title={headingData.title}
        ctaText={headingData.ctaText}
        ctaUrl={headingData.ctaUrl}
      />
      <HorizontalCardGrid items={cards} />
    </Container>
  );
}
