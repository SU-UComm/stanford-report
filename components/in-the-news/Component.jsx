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
  data,
  featuredContent,
  headingData,
  supplementaryTeaserOne,
  supplementaryTeaserTwo,
}) {
  const { featuredQuote } = featuredContent;
  const { featuredCtaText } = featuredContent;
  const cardData = [];

  const { featuredTeaserDescription } = featuredContent;
  const teaserOneDescription = supplementaryTeaserOne?.teaserOneDescription;
  const teaserTwoDescription = supplementaryTeaserTwo?.teaserTwoDescription;

  const customDescriptions = [
    featuredTeaserDescription,
    teaserOneDescription,
    teaserTwoDescription,
  ];

  if (data.length) {
    const featured = {
      ...data[0],
      quote: featuredQuote,
      description: featuredTeaserDescription,
      ctaText: featuredCtaText,
    };

    data.forEach((card, i) => {
      if (i === 0) {
        cardData.push(<Card cardType="pullquote" data={featured} />);
        return;
      }
      const standardCard = card;
      if (
        typeof customDescriptions[i] !== "undefined" &&
        customDescriptions[i].length > 0
      ) {
        standardCard.description = customDescriptions[i];
      }
      cardData.push(<Card cardType="teaser" data={standardCard} />);
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
