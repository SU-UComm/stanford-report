import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
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

export default function StoriesCarousel({ data }) {
  const cards = [];

  data.forEach((card) => {
    cards.push(
      <Card cardType="media" data={card} displayDescription={false} />
    );
  });

  return (
    <Container>
      <Carousel variant="media" slides={cards} />
    </Container>
  );
}
