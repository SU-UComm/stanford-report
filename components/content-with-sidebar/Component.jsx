import React from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";
import InfoBox from "../../packages/info-box/InfoBox";

/**
 * Content with sidebar component.
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function ContentWithSidebar({
  heading,
  content,
  infoBox,
  imageData,
  internalLinkUrl,
}) {
  return (
    <Container width="wide">
      <div className="su-grid su-grid-cols-4 sm:su-grid-cols-12 su-grid-gap su-gap-y-0 su-mx-auto lg:su-max-w-none">
        <div className="su-col-span-full sm:su-col-start-2 sm:su-col-span-10 lg:su-col-start-2 lg:su-col-span-7 xl:su-col-start-3 xl:su-col-span-6 xl:last:[&>*]:su-mb-0">
          {heading && <h2 className="su-type-2 su-break-words">{heading}</h2>}
          <XssSafeContent content={content} className="xl:last:[&>*]:su-mb-0" />
        </div>
        <InfoBox
          containerClassName="su-break-words su-col-span-full sm:su-col-start-2 sm:su-col-span-10 lg:su-col-span-4 lg:su-col-start-9"
          innerClassName="su-p-20 md:su-p-36 lg:su-px-20 lg:su-py-26"
          title={infoBox.title}
          content={infoBox.content}
          imageData={imageData}
          caption={infoBox.imageConfiguration.caption}
          credit={infoBox.imageConfiguration.credit}
          imagePlacement={infoBox.imageConfiguration.imagePlacement}
          buttonText={infoBox.buttonConfiguration.buttonText}
          externalUrl={infoBox.buttonConfiguration.externalUrl}
          internalUrl={internalLinkUrl}
          internalLinkUrl={internalLinkUrl}
          isNewWindow={infoBox.buttonConfiguration.isNewWindow}
        />
      </div>
    </Container>
  );
}
