import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function SubscribeToStanfordReport({ title }) {
  return (
    <Container>
      <LinkedHeading title={title} />
    </Container>
  );
}
