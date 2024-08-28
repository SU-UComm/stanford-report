import React, { useState, useEffect } from "react";
import { Carousel } from "../../packages/carousels/Carousel";
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";
import { VerticalVideoCard } from "../../packages/card/VerticalVideoCard/VerticalVideoCard";
import * as styles from "./styles";

/**
 * Vertical Videos Panel component
 *
 * @param {object} sectionConfiguration
 * Field data for the section
 *
 * @param {string} ctaInternalUrl
 * The internal URL for the CTA from the Matrix asset selection
 *
 * @param {string} bgImageUrl
 * The background image URL from the Matrix asset selection
 *
 * @param {array} videosArray
 * An array of objects that will be used to render the vertical video cards
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function VerticalVideosPanel({
  sectionConfiguration,
  ctaInternalUrl,
  bgImageUrl,
  videosArray,
}) {
  const { title, ctaText, ctaManualUrl, marginTop, marginBottom } =
    sectionConfiguration;

  const [cards, setCards] = useState([]);
  const cardData = [];

  if (videosArray?.length) {
    videosArray.forEach((card) => {
      cardData.push(
        <VerticalVideoCard
          key={card.youtubeId}
          heading={card.heading}
          subheading={card.subheading}
          youtubeId={card.youtubeId}
          videoImageUrl={card.videoImageData?.url}
          videoImageAlt={card.videoImageData?.alt || card.heading}
        />
      );
    });
  }

  useEffect(() => {
    setCards(cardData);
  }, []);

  return (
    <Container
      width="full"
      paddingY="10"
      paddingX={false}
      marginTop={marginTop}
      marginBottom={marginBottom}
      className={styles.root}
    >
      <div className={styles.wrapper}>
        <div className="su-cc">
          <LinkedHeading
            title={title}
            ctaText={ctaText}
            ctaLink={ctaManualUrl || ctaInternalUrl}
            isAlwaysLight
            className={styles.sectionHeading}
          />
        </div>
        {!!videosArray?.length && (
          <>
            <div className="lg:su-hidden">
              <Carousel
                variant="vertical-videos"
                slides={cards}
                isDark
                uniqueClass="vertical-video"
              />
            </div>
            <div className="su-cc">
              <ul className={styles.cardGrid}>{cardData}</ul>
            </div>
          </>
        )}
      </div>
      {bgImageUrl && (
        <>
          <img src={bgImageUrl} alt="" className={styles.bgImage} />
          <div aria-hidden="true" className={styles.overlay} />
        </>
      )}
    </Container>
  );
}
