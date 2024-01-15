import React from "react";

// import specific templates for the component
import Card from "../../packages/card/Card";
import { LinkedHeading } from "../../packages/headings/Heading";
import { HorizontalCardGrid } from "../../packages/grids/Grids";
import { Container } from "../../packages/grids/Container";

/**
 * events section component
 *
 * @param {object} headingData
 * data that feeds into the linked heading package
 *
 * @param {object} displayConfiguration
 * contains info such as how many event items to
 * display
 *
 * @param {object} data
 * the individual card's data
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Base({ headingData, displayConfiguration, data }) {
  const noOfCards = Number(displayConfiguration.numberOfEvents);
  const cards = [];

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
      <HorizontalCardGrid items={cards} maximumItems={noOfCards} />
    </Container>
  );
}
