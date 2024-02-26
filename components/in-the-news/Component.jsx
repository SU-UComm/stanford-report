import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";
import Card from "../../packages/card/Card";
import { FeaturedGrid } from "../../packages/grids/Grids";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function InTheNews({ data, featuredContent, headingData }) {
  const { featuredQuote } = featuredContent;
  const cardData = [];

  if (data.length) {
    const featured = {
      ...data[0],
      quote: featuredQuote,
    };

    data.forEach((card, i) => {
      if (i === 0) {
        cardData.push(<Card cardType="pullquote" data={featured} />);

        return;
      }

      cardData.push(<Card cardType="teaser" data={card} />);
    });
  }

  return (
    <Container>
      <LinkedHeading
        title={headingData.title}
        ctaText={headingData.ctaText}
        ctaLink={headingData.ctaLink}
        ctaNewWindow={headingData.ctaNewWindow}
      />

      <FeaturedGrid items={cardData} />
    </Container>
  );
}
