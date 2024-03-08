import React from "react";

// import specific templates for the component
import hash from "object-hash";
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";
import { Carousel } from "../../packages/carousels/Carousel";
import Card from "../../packages/card/Card";

/**
 * Video Recommendations
 *
 * @param {string} data The data for rendering the component
 * @param {string} headingData Title, CTA link elements for the heading
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function VideoRecommendations({ data, headingData }) {
  const cards = [];
  const uniqueClass = hash.MD5(
    JSON.stringify(data) + hash.MD5(JSON.stringify(headingData))
  );

  if (data !== null && data !== undefined) {
    data.forEach((card) => {
      cards.push(
        <Card cardType="vertical" data={card} displayDescription={false} />
      );
    });
  }

  return (
    cards.length > 0 && (
      <Container>
        {headingData && (
          <LinkedHeading
            title={headingData.title}
            ctaText={headingData.ctaText}
            ctaLink={headingData.ctaLink}
            ctaNewWindow={headingData.ctaNewWindow}
          />
        )}
        <Carousel variant="cards" slides={cards} uniqueClass={uniqueClass} />
      </Container>
    )
  );
}
