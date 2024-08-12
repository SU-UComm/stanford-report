import React from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import CardThumbnail from "../CardThumbnail";
import * as styles from "./HorizontalVideoCard.styles";

/**
 * Horizontal Video Card component
 * This card is used in the Horizontal Video Testimonials component
 *
 * @param {string} heading
 * The card heading
 *
 * @param {string} description
 * Body text of the card
 *
 * @param {string} youtubeId
 * The video ID in the YouTube URL
 *
 * @param {string} videoImageUrl
 * The URL of the video preview image
 *
 * @param {string} videoImageAlt
 * The alt text of the video preview image
 *
 * @param {string} internalUrl
 * Internal Matrix asset link to the story
 *
 * @param {string} manualUrl
 * Manually entered URL (internal or external)
 *
 * @return {JSX.element}
 */

export function HorizontalVideoCard({
  heading,
  description,
  youtubeId,
  videoImageUrl,
  videoImageAlt,
  internalUrl,
  manualUrl,
}) {
  return (
    <article className={styles.root}>
      <div className={styles.contentWrapper}>
        <h3 className={styles.heading}>{heading}</h3>
        <XssSafeContent content={description} className={styles.description} />
      </div>
      <div className={styles.imageWrapper}>
        <CardThumbnail
          imageUrl={videoImageUrl}
          alt={videoImageAlt}
          aspectRatio={`card-featured`}
          videoUrl={youtubeId}
          size="featured"
        />
      </div>
    </article>
  );
}
