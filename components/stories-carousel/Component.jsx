import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";
import { Carousel } from "../../packages/carousels/Carousel";
import Card from "../../packages/card/Card";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function StoriesCarousel({ data, headingData }) {
  const cards = [];

  data.forEach((card) => {
    cards.push(<Card data={card} displayDescription={false} />);
  });

  return (
    <Container>
      <LinkedHeading
        title={headingData.title}
        ctaText={headingData.ctaText}
        ctaUrl={headingData.resolvedUrl}
      />
      <Carousel variant="cards" slides={cards} />
    </Container>
  );
}
