import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";

/**
 * Basic hero
 *
 * @param {string} title The props to display the hero
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function VideoHero(props) {
  const { title } = props;
  return (
    <Container>
      <div className="su-flex su-justify-between su-flex-wrap su-rs-mt-6 su-rs-mb-5">
        <h1 className="su-font-serif su-mb-0">{title}</h1>
      </div>
    </Container>
  );
}
