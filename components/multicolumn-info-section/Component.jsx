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
  callout,
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
          "su-grid lg:su-grid-cols-12 su-grid-gap su-gap-y-0 su-max-w-800 su-mx-auto lg:su-max-w-none",
          border &&
            "su-border-b su-rs-pb-5 su-border-b-black-30 dark:su-border-b-black"
        )}
      >
        <h2 className="su-type-2 su-break-words su-col-span-full lg:su-col-span-8 xl:su-col-span-3">
          {colOne.title}
        </h2>
        <XssSafeContent
          content={colTwo.infoText}
          className={cnb(
            "su-col-span-full lg:su-col-span-8",
            callout
              ? "xl:su-col-span-6 xl:last:[&>*]:su-mb-0"
              : "xl:su-col-span-7 last:[&>*]:su-mb-0"
          )}
        />
        {callout && (
          <InfoBox
            containerClassName="su-break-words su-col-span-full lg:su-col-span-4 lg:su-col-start-9 xl:su-col-span-3"
            innerClassName="su-p-20 md:su-p-36 lg:su-px-20 lg:su-py-26"
            title={colThree.title}
            content={colThree.content}
            imageData={imageData}
            caption={colThree.imageConfiguration.caption}
            credit={colThree.imageConfiguration.credit}
            imagePlacement={colThree.imageConfiguration.imagePlacement}
            buttonText={colThree.buttonConfiguration.buttonText}
            externalUrl={colThree.buttonConfiguration.externalUrl}
            internalUrl={internalLinkUrl}
            internalLinkUrl={internalLinkUrl}
            isNewWindow={colThree.buttonConfiguration.isNewWindow}
          />
        )}
      </div>
    </Container>
  );
}
