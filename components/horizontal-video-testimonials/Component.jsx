import React from "react";
import { HorizontalVideoCard } from "../../packages/card/HorizontalVideoCard/HorizontalVideoCard";
import * as styles from "./styles";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";

/**
 * Horizontal Video Testimonials component
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
 * @param {array} testimonialsArray
 * An array of testimonial objects that will be used to render the video cards
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function HorizontalVideoTestimonials({
  sectionConfiguration,
  ctaInternalUrl,
  bgImageUrl,
  testimonialsArray,
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
        {title && (
          <LinkedHeading
            title={title}
            ctaText={ctaText}
            ctaLink={ctaManualUrl || ctaInternalUrl}
            isAlwaysLight
            className={styles.sectionHeading}
          />
        )}
        {!!testimonialsArray?.length && (
          <ul className={styles.cardGrid}>
            {testimonialsArray.map(
              ({
                youtubeId,
                heading,
                description,
                videoImageData,
                internalStoryLink,
                manualStoryUrl,
              }) => (
                <li key={youtubeId}>
                  <HorizontalVideoCard
                    heading={heading}
                    description={description}
                    youtubeId={youtubeId}
                    videoImageUrl={videoImageData?.url}
                    videoImageAlt={videoImageData?.alt || heading}
                    internalUrl={internalStoryLink}
                    manualUrl={manualStoryUrl}
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
