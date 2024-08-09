import React from "react";
import * as styles from "./styles";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";

/**
 * Horizontal Video Testimonials component
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
      paddingY={10}
      marginTop={marginTop}
      marginBottom={marginBottom}
      className={styles.root}
    >
      <Container width="cc" paddingX={false} className="su-relative su-z-30">
        <LinkedHeading
          title={title}
          ctaText={ctaText}
          ctaLink={ctaManualUrl}
          isAlwaysLight
          className="2xl:su-px-[17rem] su-rs-mb-4"
        />
        <div className={styles.cardGrid} />
      </Container>

      <img src={bgImageUrl} alt="" className={styles.bgImage} />
      <div aria-hidden className={styles.overlay} />
    </Container>
  );
}
