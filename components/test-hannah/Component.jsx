import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function TestHannah({
  image,
  quote,
  attribution,
  yearLabel,
  textPosition,
}) {
  return (
    <Container>
      <div>
        <blockquote>
          {quote}
          <cite>
            <span className="su-block">{attribution}</span>
            <span className="su-block">{yearLabel}</span>
          </cite>
        </blockquote>
      </div>
    </Container>
  );
}
