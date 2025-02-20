import React from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";
import TextCallout from "../text-callout/Component";

/**
 * Multicolumn Info Section component
 *
 * @param {string} title
 * The title of the text block.
 *
 * @param {string} eyebrow
 * The eyebrow/superheading.
 *
 * @param {string} paddingY
 * Responsive vertical padding of the container
 *
 * @param {array} facts
 * A array of 1 to 3 facts each with a FontAwesome icon and a text description.
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function MulticolumnInfoSection({
  colOne,
  colTwo,
  colThree,
  imageData,
  internalLinkUrl,
}) {
  console.log(imageData);
  console.log(internalLinkUrl);
  console.log(internalLinkUrl);
  return (
    <Container width="wide">
      <div className="su-grid su-grid-cols-6 su-grid-gap su-gap-y-0 md:su-grid-cols-12 su-border-b su-rs-pb-5">
        <h2 className="su-type-2 su-col-span-full md:su-col-span-4 lg:su-col-span-3">
          {colOne.title}
        </h2>
        <XssSafeContent
          content={colTwo.infoText}
          className={cnb(
            "su-col-span-full md:su-col-span-8",
            colThree.callout ? "lg:su-col-span-6" : "lg:su-col-span-7"
          )}
        />
        {colThree.callout && (
          <TextCallout
            containerClassName="su-col-span-full md:su-col-span-8 md:su-col-start-5 lg:su-col-span-3"
            displayConfiguration={{
              title: colThree.title,
              content: colThree.content,
            }}
            imageConfiguration={{
              image: colThree.imageConfiguration.image,
              caption: colThree.imageConfiguration.caption,
              credit: colThree.imageConfiguration.credit,
              imagePlacement: colThree.imageConfiguration.imagePlacement,
            }}
            buttonConfiguration={{
              buttonText: colThree.buttonConfiguration.buttonText,
              externalUrl: colThree.buttonConfiguration.externalUrl,
              internalUrl: internalLinkUrl,
            }}
            imageData={imageData}
            internalLinkUrl={internalLinkUrl}
          />
        )}
      </div>
    </Container>
  );
}
