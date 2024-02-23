import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";
import { MultiColumnGrid } from "../../packages/grids/Grids";
import Card from "../../packages/card/Card";

/**
 * Leadership Messages
 *
 * @param {string} data The data for rendering the component
 * @param {string} headingData Title, CTA link elements for the heading
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function LeadershipMessages({ data, headingData }) {
  const cards = [];

  const maxNumberOfCards = 3;

  if (data !== null && data !== undefined) {
    data.forEach((card, i) => {
      if (i < maxNumberOfCards) {
        cards.push(<Card cardType="avatar" data={card} />);
      }
    });
  }

  return (
    cards.length > 0 && (
      <Container>
        {headingData && (
          <LinkedHeading
            title={headingData.title}
            ctaText={headingData.ctaText}
            ctaUrl={headingData.resolvedUrl}
          />
        )}
        <MultiColumnGrid items={cards} />
      </Container>
    )
  );
}
