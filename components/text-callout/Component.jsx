import React from "react";
import InfoBox from "../../packages/info-box/InfoBox";

/**
 * Renders out the text callout component.
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function TextCallout({
  displayConfiguration,
  imageConfiguration,
  imageData,
  buttonConfiguration,
  internalLinkUrl,
}) {
  const { title, content } = displayConfiguration;
  const { caption, credit, imagePlacement, image } = imageConfiguration;
  const { buttonText, externalUrl, isNewWindow } = buttonConfiguration;

  return (
    <InfoBox
      title={title}
      content={content}
      image={image}
      caption={caption}
      credit={credit}
      imagePlacement={imagePlacement}
      buttonText={buttonText}
      externalUrl={externalUrl}
      internalUrl={internalLinkUrl}
      imageData={imageData}
      internalLinkUrl={internalLinkUrl}
      isNewWindow={isNewWindow}
    />
  );
}
