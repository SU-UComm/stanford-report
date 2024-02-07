import React from "react";

import { Container } from "../../packages/grids/Container";

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
    <Container>
      <article className="su-relative su-grid lg:su-grid-cols-2 su-gap-20">
        <div>
          <div className="su-rounded-[8px] su-bg-white">
            {eyebrow && (
              <div className="su-type-1 su-text-black-60 su-font-semibold su-rs-mb-1">
                {eyebrow}
              </div>
            )}
            <h2 className="su-type-4 su-font-bold su-font-sans su-type">
              {title}
            </h2>
          </div>
          <paragraph className="su-big-paragraph">{content}</paragraph>
        </div>
        <div className="su-rounded-[8px] su-overflow-hidden">
          <img src={imageUrl} alt="" className="su-object-cover su-size-full" />
        </div>
      </article>
    </Container>
  );
}
