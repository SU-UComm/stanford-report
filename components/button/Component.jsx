import React from "react";
import { Container } from "../../packages/grids/Container";
import { LinkButton } from "../../packages/links/LinkButton";

/**
 * Button component
 *
 * @param {string} title Button
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function Button({
  buttonText,
  internalLinkUrl,
  externalUrl,
  isNewWindow,
}) {
  return (
    <Container>
      <LinkButton
        buttonText={buttonText}
        internalUrl={internalLinkUrl}
        externalUrl={externalUrl}
        isNewWindow={isNewWindow}
      />
    </Container>
  );
}
