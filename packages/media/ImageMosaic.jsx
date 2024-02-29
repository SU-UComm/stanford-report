import React from "react";

/**
 *
 * @param {array} data
 * image data, this data must have an "orientation" property with
 * the image's orientation set. To do this, any image data from
 * Matrix must be processed through the utility function
 * formatCardDataImage.js
 *
 * The orientation property's value is either "v" or "h" the above
 * format library takes care of this.
 *
 * To see an active example, view the server.jsx of the image-gallery-modal
 * component
 *
 * @param {int} remainingImageCount
 * A number that represents all images that haven't made it into
 * the mosaic. This number will be displayed on the final image
 * in the mosaic.
 *
 * @returns {array}
 */
export default function ImageMosaic({ data, remainingImageCount }) {
  const images = [];

  let hasVertical = false;

  data.forEach(({ url, alt, orientation }, i) => {
    const horizontalPositions = [
      "su-horizontal-image-first",
      "su-horizontal-image-second",
      "su-horizontal-image-third",
      "su-horizontal-image-fourth",
    ];

    if (i === 0 && orientation === "v") hasVertical = true;

    let articleClass =
      orientation === "v" && i === 0
        ? "su-vertical-image-first"
        : "su-vertical-image-second";

    articleClass =
      orientation === "h"
        ? `${horizontalPositions[hasVertical ? images.length + 1 : i]} `
        : articleClass;

    images.push(
      <article className={`${articleClass} su-relative`}>
        <img
          src={url}
          alt={alt}
          className="su-w-full su-h-full su-object-cover"
        />

        {remainingImageCount && i === data.length - 1 ? (
          <div className="su-bg-black/[0.33] su-w-full su-h-full su-absolute su-top-0 su-left-0 su-flex su-justify-center su-items-center su-z-[1]">
            <span
              className={[
                "su-text-white su-relative su-z-[2] su-font-bold su-text-[4.8rem] su-leading-[5.76rem]",
                "md:su-text-[10rem] md:su-leading-[11.941rem]",
              ].join(" ")}
            >
              +{remainingImageCount}
            </span>
          </div>
        ) : (
          ""
        )}
      </article>
    );
  });

  return images;
}

/**
 * creates an image mosaic based on
 * specified pattern variations
 * 
 * @param {object} images 
 * the image data (determines the orientation)
 
 * @param {string} pattern 
 * the pattern represents the acceptable possibilities
 * for the mosaic gallery, see an example of this in the
 * Component.jsx of the image-gallery-modal 
 * 
 * @returns {array}
 */
export function mosaic(images, pattern) {
  const patterns = pattern.replace(/\n+|\t+| {2,}/gm, "");
  const preview = [];

  let complete = false;
  let patternFormation = "{";

  images.forEach((card) => {
    if (complete) return;

    const patRegEnd = new RegExp(
      `${patternFormation}${card.orientation}}`,
      "gm"
    );
    const patRegCurrent = new RegExp(
      `${patternFormation}${card.orientation}:`,
      "gm"
    );

    if (patterns.match(patRegEnd)) {
      preview.push(card);
      complete = true;
      return;
    }

    if (!preview.length) {
      preview.push(card);
      patternFormation += `${card.orientation}:`;

      return;
    }

    if (patterns.match(patRegCurrent)) {
      preview.push(card);
      patternFormation += `${card.orientation}:`;
    }
  });

  return preview;
}
