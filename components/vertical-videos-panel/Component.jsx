import React from "react";
import { VerticalVideoCard } from "../../packages/card/VerticalVideoCard/VerticalVideoCard";
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";
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
  return (
    <Container
      width="full"
      paddingY="10"
      paddingX={false}
      marginTop={marginTop}
      marginBottom={marginBottom}
      className={styles.root}
    >
      <Container width="cc" paddingX={false} className={styles.wrapper}>
        <LinkedHeading
          title={title}
          ctaText={ctaText}
          ctaLink={ctaManualUrl || ctaInternalUrl}
          isAlwaysLight
          className={styles.sectionHeading}
        />
        {!!videosArray?.length && (
          <ul className={styles.cardGrid}>
            {videosArray.map(
              ({ youtubeId, heading, subheading, videoImageData }) => (
                <li key={youtubeId}>
                  <VerticalVideoCard
                    heading={heading}
                    subheading={subheading}
                    youtubeId={youtubeId}
                    videoImageUrl={videoImageData?.url}
                    videoImageAlt={videoImageData?.alt || heading}
                  />
                </li>
              )
            )}
          </ul>
        )}
      </Container>
      {bgImageUrl && (
        <>
          <img src={bgImageUrl} alt="" className={styles.bgImage} />
          <div aria-hidden className={styles.overlay} />
        </>
      )}
    </Container>
  );
}
