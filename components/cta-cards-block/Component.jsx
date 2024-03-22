import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";

export default function CtaCardsBlock({ title }) {
  return (
    <Container>
      <LinkedHeading title={title} />
    </Container>
  );
}
