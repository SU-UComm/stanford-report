import React from "react";

// import specific templates for the component
import hash from "object-hash";
import { number } from "prop-types";
import { Container } from "../../packages/grids/Container";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function MulticolumnImage({ data, imageCaptions }) {
  const numberOfCaptions = imageCaptions.filter(Boolean).length;

  const images = data.map((image, i) => (
    <Image
      src={image.url}
      caption={imageCaptions[i]}
      numberOfCaptions={numberOfCaptions}
      key={hash.MD5(image)}
    />
  ));

  return (
    <Container width="wide">
      <section className="su-flex su-flex-col su-gap-8 md:su-gap-9">
        <div className="su-flex su-gap-20 lg:su-gap-48">{images}</div>

        {numberOfCaptions === 1 && (
          <p className="su-text-14 su-text-black-70 dark:su-text-black-30 su-font-normal su-leading-[119.415%] su-text-center md:su-text-16 su-mb-0">
            {imageCaptions.filter(Boolean)[0]}
          </p>
        )}
      </section>
    </Container>
  );
}

function Image({ src, caption, numberOfCaptions }) {
  return (
    <div className="su-relative su-flex su-flex-col su-gap-8 su-flex-1">
      <img src={src} className="su-object-cover" alt="" />

      {caption && numberOfCaptions > 1 && (
        <p className="su-text-14 su-text-black-70 dark:su-text-black-30 su-font-normal su-leading-[119.415%] su-text-center su-m-0  md:su-text-16">
          {caption}
        </p>
      )}
    </div>
  );
}
