import React from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";
import InfoBox from "../../packages/info-box/InfoBox";

/**
 * Multicolumn Info Section component
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function MulticolumnInfoSection({
  border,
  colOne,
  colTwo,
  colThree,
  imageData,
  internalLinkUrl,
}) {
  return (
    <Container width="wide">
      <div
        className={cnb(
          "su-grid su-grid-cols-6 su-grid-gap su-gap-y-0 md:su-grid-cols-12",
          border &&
            "su-border-b su-rs-pb-5 su-border-b-black-30 dark:su-border-b-black"
        )}
      >
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
          <InfoBox
            containerClassName="su-col-span-full md:su-col-span-8 md:su-col-start-5 lg:su-col-span-3"
            title={colThree.title}
            content={colThree.content}
            image={colThree.imageConfiguration.image}
            caption={colThree.imageConfiguration.caption}
            credit={colThree.imageConfiguration.credit}
            imagePlacement={colThree.imageConfiguration.imagePlacement}
            buttonText={colThree.buttonConfiguration.buttonText}
            externalUrl={colThree.buttonConfiguration.externalUrl}
            internalUrl={internalLinkUrl}
            imageData={imageData}
            internalLinkUrl={internalLinkUrl}
            isNewWindow={colThree.buttonConfiguration.isNewWindow}
          />
        )}
      </div>
    </Container>
  );
}
