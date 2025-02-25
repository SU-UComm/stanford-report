import React from "react";
import InfoBox from "../../packages/info-box/InfoBox";
import { Container } from "../../packages/grids/Container";

/**
 * Two Column Text Callout component
 *
 * @param {string} heading
 * The title of the section.
 *
 * @param {boolean} showTopBorder
 * If true, display a horizontal divider above the title.
 *
 * @param {array} calloutsArray
 * A array of 1 to 2 callouts objects that will be used to render the text callouts.
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function TwoColumnTextCallout({
  heading,
  showTopBorder = true,
  calloutsArray,
}) {
  return (
    <Container width="wide" marginTop={3} marginBottom={5}>
      {showTopBorder && <hr className="su-border-black-30 su-rs-mb-3 su-h-1" />}
      {heading && (
        <h2 className="su-type-2 su-font-serif su-text-center su-w-auto su-rs-mb-2 su-text-black dark:su-text-white">
          {heading}
        </h2>
      )}
      <Container
        paddingX
        className="su-flex su-grid-gap su-flex-col lg:su-flex-row lg:su-items-stretch"
      >
        {calloutsArray?.map((callout) => (
          <InfoBox
            key={callout.title}
            containerClassName="su-flex"
            title={callout.title}
            content={callout.content}
            caption={callout.caption}
            credit={callout.credit}
            imagePlacement={callout.imagePlacement}
            buttonText={callout.buttonText}
            externalUrl={callout.externalUrl}
            imageData={callout.imageData}
            internalLinkUrl={callout.internalLinkUrl}
            isNewWindow={callout.isNewWindow}
          />
        ))}
      </Container>
    </Container>
  );
}
