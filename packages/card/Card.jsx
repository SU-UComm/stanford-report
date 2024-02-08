import React from "react";

import VerticalCard from "./verticalCard";
import PullQuoteCard from "./PullQuoteCard";
import HorizontalCard from "./HorizontalCard";
import MediaCard from "./MediaCard";

/**
 * This component orchestrates the type of card
 * returned to the main component.
 *
 * @param {object} data
 * The data to feed into the card, containing things such as:
 * title, description, liveUrl, imageUrl, etc...
 *
 * @param {string} cardType
 * the type of card, can be the following:
 * vertical, horizontal, teaser, avatar, etc...
 *
 * @param {string} cardSize
 * The size of the card.
 * small, medium or featured
 *
 * @param {bool} limitedDescription
 * Determines if the card's description should be shown or not.
 *
 * @param {bool} hideImages
 * Determines if the card should display images or not.
 *
 * @return {JSX.Element}
 */
export default function Card({
  data,
  cardType,
  cardSize = "small",
  displayDescription = true,
  displayThumbnail = true,
}) {
  // orchestrate the type of card to output
  switch (cardType) {
    case "horizontal":
      return <HorizontalCard data={data} cardSize={cardSize} />;
    case "teaser":
      break;
    case "avatar":
      break;
    case "pullquote":
      return <PullQuoteCard data={data} />;
    case "media":
      return <MediaCard data={data} />;
    default:
      return (
        <VerticalCard
          data={data}
          cardSize={cardSize}
          displayDescription={displayDescription}
          displayThumbnail={displayThumbnail}
        />
      );
  }
}
