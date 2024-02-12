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
  featuredLoadTime,
  teaserOneLoadTime,
  teaserTwoLoadTime,
}) {
  const { featuredQuote } = featuredContent;
  const data = [];

  const featured = {
    ...featuredData[0],
    quote: featuredQuote,
  };

  console.log(featuredLoadTime);
  console.log(teaserOneLoadTime);
  console.log(teaserTwoLoadTime);

  if (Object.keys(featured).length) {
    data.push(<Card cardType="pullquote" data={featured} />);
  }

  if (teaserOneData.length) {
    data.push(<Card cardType="teaser" data={teaserOneData[0]} />);
  }

  if (teaserTwoData.length) {
    data.push(<Card cardType="teaser" data={teaserTwoData[0]} />);
  }

  return (
    <Container>
      <LinkedHeading
        title={headingData.title}
        ctaText={headingData.ctaText}
        ctaUrl={headingData.resolvedUrl}
      />

      <FeaturedGrid items={data} />
    </Container>
  );
}
