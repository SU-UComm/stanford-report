import React, { useState, useEffect } from "react";
import hash from "object-hash";
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
  const { title, ctaText, ctaManualUrl, marginTop, marginBottom, alwaysDark } =
    sectionConfiguration;

  const [cards, setCards] = useState([]);
  const cardData = [];
  const uniqueClass = hash.MD5(JSON.stringify(videosArray));

  if (videosArray?.length) {
    videosArray.forEach(
      ({ youtubeId, heading, subheading, videoImageData }) => {
        cardData.push(
          <VerticalVideoCard
            key={`${youtubeId}-${heading}`}
            heading={heading}
            subheading={subheading}
            youtubeId={youtubeId}
            videoImageUrl={videoImageData?.url}
            videoImageAlt={videoImageData?.alt || heading}
          />
        );
      }
    );
  }

  // Can't get rid of the useEffect otherwise it would mess up the carousel slides
  useEffect(() => {
    setCards(cardData);
  }, []);

  return (
    <Container
      width="full"
      paddingY={bgImageUrl ? "10" : ""}
      paddingX={false}
      marginTop={marginTop}
      marginBottom={marginBottom}
      className={styles.root(alwaysDark)}
    >
      <div className={styles.wrapper}>
        {title && (
          <div className={styles.headingWrapper}>
            <LinkedHeading
              title={title}
              ctaText={ctaText}
              ctaLink={ctaManualUrl || ctaInternalUrl}
              isAlwaysLight={!!bgImageUrl || alwaysDark}
              className={styles.sectionHeading(alwaysDark)}
            />
          </div>
        )}
        {!!videosArray?.length && (
          <>
            {/* Only render carousel if there are more than 1 videos */}
            {videosArray.length > 1 && (
              <div className={styles.carouselWrapper}>
                <Carousel
                  variant="vertical-videos"
                  slides={cards}
                  isDark={!!bgImageUrl || alwaysDark}
                  uniqueClass={uniqueClass}
                />
              </div>
            )}
            <div className={styles.cardGridWrapper(videosArray.length === 1)}>
              <div className={styles.cardGrid(videosArray.length === 1)}>
                {cardData}
              </div>
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
