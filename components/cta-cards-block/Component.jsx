import React from "react";
import { Container } from "../../packages/grids/Container";
import CtaCard from "../../packages/card/CtaCard";

export default function CtaCardsBlock({ title, eyebrow, description }) {
  return (
    <Container>
      <CtaCard title={title} eyebrow={eyebrow} description={description} />
    </Container>
  );
}
