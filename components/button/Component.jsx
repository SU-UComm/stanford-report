import React from "react";
import { Container } from "../../packages/grids/Container";
import { LinkButton } from "../../packages/links/LinkButton";

/**
 * Button component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function Button({
  buttonText,
  internalUrl,
  externalUrl,
  isNewWindow,
}) {
  return (
    <Container>
      <LinkButton
        buttonText={buttonText}
        internalUrl={internalUrl}
        externalUrl={externalUrl}
        isNewWindow={isNewWindow}
      />
    </Container>
  );
}
