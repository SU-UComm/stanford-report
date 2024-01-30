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

export default function InTheNews({
  featuredContent,
  featuredData,
  teaserOneData,
  teaserTwoData,
  headingData,
}) {
  const { featuredQuote } = featuredContent;

  const featured = {
    ...featuredData[0],
    quote: featuredQuote,
  };

  return (
    <Container>
      <LinkedHeading
        title={headingData.title}
        ctaText={headingData.ctaText}
        ctaUrl={headingData.resolvedUrl}
      />

      <FeaturedGrid
        items={[
          <Card cardType="pullquote" data={featured} />,
          <Card cardType="teaser" data={teaserOneData[0]} />,
          <Card cardType="teaser" data={teaserTwoData[0]} />,
        ]}
      />
    </Container>
  );
}
