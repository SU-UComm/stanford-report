import React, { useState } from "react";
import { cnb } from "cnbuilder";

import { Container } from "../../packages/grids/Container";
import Flip from "../../packages/SVG-library/Flip";
import Plus from "../../packages/SVG-library/Plus";

/**
 * Interactive Photo Card component
 *
 * @param {string} title The title of the text card
 * @param {string} eyebrow The eyebrow/superheading of the text card
 * @returns {JSX.Element}
 * @constructor
 */

export default function InteractivePhotoCard({
  title,
  eyebrow,
  content,
  imageUrl,
  imageAlignment,
}) {
  return (
    <div className="su-cc">
      <article
        className={cnb(
          "su-relative su-flex su-gap-20",
          imageAlignment === "right"
            ? "su-flex-col lg:su-flex-row"
            : "su-flex-col-reverse lg:su-flex-row-reverse"
        )}
      >
        <div className="su-basis-1/2 su-rs-px-5 su-rs-pt-6 su-rs-pb-4 su-shadow-lg su-rounded-[8px]">
          <div className="su-bg-white">
            {eyebrow && (
              <div className="su-type-1 su-text-black-60 su-font-semibold su-rs-mb-1">
                {eyebrow}
              </div>
            )}
            <h3 className="su-type-4 su-font-bold su-font-sans su-type su-rs-mb-0">
              {title}
            </h3>
            <button
              type="button"
              aria-label={`Read more about ${title}`}
              className="su-block su-ml-auto su-mr-0 su-bg-black su-text-white su-rounded-full su-p-10"
            >
              <Plus className="su-size-50 su-fill-none" />
            </button>
          </div>
          <div className="su-bg-cardinal-red su-text-white su-hidden">
            <paragraph className="su-big-paragraph">{content}</paragraph>
            <Flip className="su-size-36 su-fill-none" />
          </div>
        </div>
        <div className="su-rounded-[8px] su-overflow-hidden su-basis-1/2 su-shadow-lg">
          <img src={imageUrl} alt="" className="su-object-cover su-size-full" />
        </div>
      </article>
    </div>
  );
}
