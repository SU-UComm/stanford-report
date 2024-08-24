import React from "react";
import CardThumbnail from "../CardThumbnail";
import * as styles from "./VerticalVideoCard.styles";

/**
 * Vertical Video Card component
 * This card is used in the Vertical Videos Panel component
 *
 * @param {string} heading
 * The card heading
 *
 * @param {string} subheading
 * The card subheading
 *
 * @param {string} youtubeId
 * The video ID of the YouTube short
 *
 * @param {string} videoImageUrl
 * The URL of the video preview image
 *
 * @param {string} videoImageAlt
 * The alt text of the video preview image
 *
 * @return {JSX.element}
 */

export function VerticalVideoCard({
  heading,
  subheading,
  youtubeId,
  videoImageUrl,
  videoImageAlt,
}) {
  return (
    <article className={styles.root}>
      <div className={styles.imageWrapper}>
        <CardThumbnail
          imageUrl={videoImageUrl}
          alt={videoImageAlt}
          title={heading}
          aspectRatio="vertical-video"
          videoUrl={youtubeId}
          size="vertical-video"
          videoIconClasses={styles.videoIcon}
        />
      </div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.subheading}>{subheading}</p>
      </div>
    </article>
  );
}
