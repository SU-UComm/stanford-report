import React from "react";

// these are our specific templates for the component.
import Card from "../../packages/card/Card";
import { LinkedHeading } from "../../packages/headings/Heading";
import { MultiColumnGrid } from "../../packages/grids/Grids";

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
  title,
  ctaText,
  ctaUrl,
  data,
  displayThumbnails,
  displayDescriptions,
  contentConfiguration: { source, searchMaxCards },
}) {
  const cards = [];

  /**
   * some data coming through might have empty values
   * in the case of "Select", in that case, filter those
   * out so the component doesn't get angry
   */
  data = data.filter(Boolean);
  const maxNumberOfCards = source === "Search" ? searchMaxCards : 3;
  const numberOfCards =
    data.length > maxNumberOfCards ? maxNumberOfCards : data.length;
  const cardSizeMap = new Map();
  cardSizeMap.set(3, "small");
  cardSizeMap.set(2, "medium");

  data.forEach((cardData, i) => {
    if (i < maxNumberOfCards) {
      if (source === "Search") {
        cards.push(
          <Card
            data={cardData}
            displayDescription={displayDescriptions}
            displayThumbnail={displayThumbnails}
            cardSize={cardSizeMap.get(searchMaxCards)}
          />
        );
      } else if (source === "Select") {
        cards.push(
          <Card
            data={cardData}
            displayDescription={displayDescriptions}
            displayThumbnail={displayThumbnails}
            cardSize={cardSizeMap.get(numberOfCards)}
          />
        );
      }
    }
  });

  const componentClassName = "component-multicolumn-listing";
  const componentTitleStateClass = title ? "has-title" : "has-no-title";

  return (
    <div className={[componentClassName, componentTitleStateClass].join(" ")}>
      <LinkedHeading title={title} ctaText={ctaText} ctaUrl={ctaUrl} />
      <MultiColumnGrid separator items={cards} />
    </div>
  );
}
