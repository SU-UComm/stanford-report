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

export default function StoriesCarousel({
  headingConfiguration,
  contentConfiguration,
  data,
}) {
  return (
    <Container>
      <LinkedHeading title={headingConfiguration.title} />
      <Carousel
        breakpoint="cards"
        slides={[
          <Card data={data[0]} />,
          <Card data={data[1]} />,
          <Card data={data[2]} />,
        ]}
      />
    </Container>
  );
}
