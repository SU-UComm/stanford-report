import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { FAIcon } from "../../icons/FAIcon";
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
  const isRealExternalLink =
    !!manualUrl && !manualUrl?.includes("news.stanford.edu");

  return (
    <article className={styles.root}>
      <div className={styles.contentWrapper}>
        {internalUrl || manualUrl ? (
          <h3 className={styles.heading}>
            <a
              href={internalUrl || manualUrl}
              className={styles.link}
              rel={isRealExternalLink ? "noopener noreferrer" : undefined}
            >
              {heading}
              {isRealExternalLink && (
                // Use this whitespace-nowrap trick so icon won't get pushed to the next line on its own
                <span className={styles.linkIconWrapper}>
                  &#65279;
                  <FAIcon
                    icon="arrow-up-right"
                    set="regular"
                    title="(link is external)"
                    // Add a width to prevent getting a flash of huge icon before the CSS fully loads
                    width={24}
                    className={styles.linkIcon}
                  />
                </span>
              )}
            </a>
          </h3>
        ) : (
          <h3 className={styles.heading}>{heading}</h3>
        )}
        {!!description && (
          <XssSafeContent
            content={description}
            className={styles.description}
          />
        )}
      </div>
      <div className={styles.imageWrapper}>
        <CardThumbnail
          imageUrl={videoImageUrl}
          alt={videoImageAlt}
          title={heading}
          aspectRatio="video"
          videoUrl={youtubeId}
          size="featured"
          videoIconClasses={styles.videoIcon}
        />
      </div>
    </article>
  );
}
