import React from "react";

// import specific templates for the component
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
  const images = data.map((image, i) => (
    <Image
      src={image.url}
      caption={imageCaptions[i]}
      numberOfCaptions={imageCaptions.length}
    />
  ));

  return (
    <Container width="wide">
      <section className="su-flex su-flex-col su-gap-[8px] su-py-[50px] md:su-gap-[9px] md:su-py-[72px] lg:su-py-[121px]">
        <div className="su-flex su-gap-[20px] lg:su-gap-[48px]">{images}</div>

        {imageCaptions.length === 1 && (
          <p className="su-text-[14px] su-text-black-70 su-font-normal su-leading-[119.415%] su-text-center md:su-text-[16px]">
            {imageCaptions[0]}
          </p>
        )}
      </section>
    </Container>
  );
}

function Image({ src, caption, numberOfCaptions }) {
  return (
    <div className="su-relative su-flex su-flex-col su-gap-[8px]">
      <img
        src="https://picsum.photos/1200"
        className="su-h-full su-object-cover"
        alt=""
      />

      {caption && numberOfCaptions > 1 && (
        <p className="su-text-[14px] su-text-black-70 su-font-normal su-leading-[119.415%] su-text-center su-m-0  md:su-text-[16px]">
          {caption}
        </p>
      )}
    </div>
  );
}
