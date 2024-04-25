import React, { useState, useEffect } from "react";

// import specific templates for the component
import hash from "object-hash";
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

export default function StoriesCarousel({ data, headingData }) {
  const [cards, setCards] = useState([]);
  const cardData = [];
  const uniqueClass = hash.MD5(
    JSON.stringify(data) + hash.MD5(JSON.stringify(headingData))
  );

  if (data !== null && data !== undefined) {
    data.forEach((card) => {
      cardData.push(<Card data={card} displayDescription={false} />);
    });
  }

  useEffect(() => {
    setCards(cardData);
  }, []);

  return (
    cardData.length > 0 && (
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
