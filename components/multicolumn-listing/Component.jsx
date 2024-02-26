import React from "react";

// these are our specific templates for the component.
import Card from "../../packages/card/Card";
import { LinkedHeading } from "../../packages/headings/Heading";
import { MultiColumnGrid } from "../../packages/grids/Grids";
import { Container } from "../../packages/grids/Container";

/**
 * Featured content component
 *
 * @param {string} title The component title
 * @param {string} ctaText The cta text
 * @param {string} ctaUrl The cta url
 * @param {object} data JSON data for content
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function MulticolumnListing({
  contentConfiguration,
  displayConfiguration,
  data,
  headingData,
}) {
  const cards = [];

  const maxNumberOfCards =
    contentConfiguration.source === "Search"
      ? contentConfiguration.searchMaxCards
      : 3;
  const numberOfCards =
    data.length > maxNumberOfCards ? maxNumberOfCards : data.length;
  const cardSizeMap = new Map();
  cardSizeMap.set(3, "small");
  cardSizeMap.set(2, "medium");

  data.forEach((cardData, i) => {
    if (i < maxNumberOfCards) {
      if (contentConfiguration.source === "Search") {
        cards.push(
          <Card
            data={cardData}
            displayDescription={displayConfiguration.displayDescriptions}
            displayThumbnail={displayConfiguration.displayThumbnails}
            cardSize={cardSizeMap.get(contentConfiguration.searchMaxCards)}
          />
        );
      } else if (contentConfiguration.source === "Select") {
        cards.push(
          <Card
            data={cardData}
            displayDescription={displayConfiguration.displayDescriptions}
            displayThumbnail={displayConfiguration.displayThumbnails}
            cardSize={cardSizeMap.get(numberOfCards)}
          />
        );
      }
    }
  });

  const componentClassName = "component-multicolumn-listing";
  const componentTitleStateClass = headingData.title
    ? "has-title"
    : "has-no-title";

  return (
    <div className={[componentClassName, componentTitleStateClass].join(" ")}>
      <Container>
        <LinkedHeading
          title={headingData.title}
          ctaText={headingData.ctaText}
          ctaUrl={headingData.resolvedUrl}
        />
        <MultiColumnGrid separator items={cards} />
      </Container>
    </div>
  );
}
