import React from "react";
import { cnb } from "cnbuilder";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";

/**
 * Info page header component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function InfoPageHeader({ title, alignment }) {
  return (
    <Container>
      <h1
        className={cnb(
          alignment === "left" && "su-text-left",
          alignment === "center" && "su-text-center"
        )}
      >
        {title}
      </h1>
    </Container>
  );
}
