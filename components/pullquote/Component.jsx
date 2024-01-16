import React from "react";

// import specific templates for the component
import { PullQuote } from "../../packages/quotes/Quote";
import { Container } from "../../packages/grids/Grids";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function PullQuote({ title }) {
  return (
    <Container>
      <PullQuote />
    </Container>
  );
}
