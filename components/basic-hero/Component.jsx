import React from "react";
import { cnb } from "cnbuilder";

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

export default function BasicHero(props) {
  const { title, titleAlignment } = props;
  return (
    <div className="su-flex su-justify-between su-flex-wrap su-rs-mt-6 su-rs-mb-5">
      <h1
        className={cnb(
          "su-font-serif su-mb-0",
          titleAlignment === "center" && "su-text-center su-mx-auto"
        )}
      >
        {title}
      </h1>
    </div>
  );
}
