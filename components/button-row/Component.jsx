import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { LinkButton } from "../../packages/links/LinkButton";

/**
 * Button row
 *
 * @param {string} title ButtonRow
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function ButtonRow({ buttonsArray }) {
  return (
    <Container>
      {buttonsArray.map((button) => {
        const { buttonText, internalLinkUrl, externalUrl, isNewWindow } =
          button;
        return (
          <LinkButton
            key={buttonText}
            buttonText={buttonText}
            internalUrl={internalLinkUrl}
            externalUrl={externalUrl}
            isNewWindow={isNewWindow}
          />
        );
      })}
    </Container>
  );
}
