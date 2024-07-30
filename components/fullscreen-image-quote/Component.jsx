/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Container } from "../../packages/grids/Container";
import { FAIcon } from "../../packages/icons/FAIcon";
import * as styles from "./styles";

/**
 * Fullscreen Image Quote component
 *
 * @param {string} quote
 * The quote to display
 *
 * @param {string} quoteHAlign
 * The horizontal alignment of the quote: "left" | "right"
 *
 * @param {string} quoteVAlign
 * The vertical alignment of the quote: "top" | "center" | "bottom"
 *
 * @param {boolean} removeTopSpacing
 * When this is true, the component will be shifted up to eliminate the spacing between itself and the component above.
 *
 * @param {object} imageData
 * The data of the background image
 *
 * @param {object} mobileImageData
 * The data of the background image for mobile
 *
 * @param {string} internalLinkUrl
 * The internal link URL
 *
 * @param {object} ctaDetails
 * The different fields for the CTA
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function FullscreenImageQuote({
  quote,
  quoteHAlign,
  quoteVAlign,
  removeTopSpacing,
  imageData,
  mobileImageData,
  internalLinkUrl,
  ctaDetails,
}) {
  const { ctaPreText, ctaText, ctaSubtext, externalUrl, isNewWindow } =
    ctaDetails;
  // Check externalUrl field to see if it is actually external
  // Do not use external arrow icon and rel attributes if link has news.stanford.edu
  const isRealExternalLink =
    !!externalUrl && !externalUrl?.includes("news.stanford.edu");

  return (
    <Container
      width="full"
      paddingX={false}
      className={styles.root(removeTopSpacing)}
    >
      <div className={styles.contentWrapper(quoteVAlign)}>
        <blockquote className={styles.blockquote(quoteHAlign)}>
          {quote && <p className={styles.quote}>{quote}</p>}
          {ctaText && (
            <div className={styles.cta}>
              <span className={styles.ctaPreText}>{ctaPreText}</span>
              <a
                href={externalUrl || internalLinkUrl}
                target={isNewWindow ? "_blank" : undefined}
                rel={isRealExternalLink ? "noopener nofollow" : undefined}
                className={styles.ctaLink}
              >
                {ctaText}
                {/* Use this whitespace-nowrap trick so icon won't get pushed to the next line on its own */}
                <span className={styles.ctaIconWrapper}>
                  &#65279;
                  <FAIcon
                    icon={isRealExternalLink ? "arrow-up" : "chevron-right"}
                    width={24}
                    title={isRealExternalLink ? "link is external" : undefined}
                    className={styles.ctaIcon(isRealExternalLink)}
                  />
                </span>
              </a>
            </div>
          )}
          {ctaSubtext && <div className={styles.ctaSubtext}>{ctaSubtext}</div>}
        </blockquote>
      </div>
      {mobileImageData?.url && (
        <img
          src={mobileImageData?.url}
          alt={mobileImageData?.attributes?.alt || ""}
          className={styles.mobileImage}
        />
      )}
      <img
        src={imageData?.url}
        alt={imageData?.attributes?.alt || ""}
        className={styles.image(!!mobileImageData?.url)}
      />
      <div aria-hidden className={styles.overlay(quoteHAlign)} />
    </Container>
  );
}
