import React from "react";
import { cnb } from "cnbuilder";
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
    <Container
      className={cnb(
        "su-rs-pt-3 su-rs-pb-5",
        showTopBorder && "su-border-t su-border-black-30"
      )}
    >
      <h2 className="su-type-2 su-font-serif su-text-center su-w-auto su-rs-mb-2 dark:su-text-white">
        {heading}
      </h2>
      <div className="su-flex su-grid-gap su-flex-col md:su-flex-row md:su-items-stretch">
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
      </div>
    </Container>
  );
}
