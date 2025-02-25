import React from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";

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
  const { title, titleAlignment, summary } = props;
  return (
    <Container>
      <div className="su-flex su-justify-between su-flex-wrap su-rs-mb-5">
        <h1
          className={cnb(
            "su-font-serif su-mb-0",
            titleAlignment === "center" && "su-text-center su-mx-auto"
          )}
        >
          {title}
        </h1>
        {summary && (
          <XssSafeContent
            className={[
              "su-font-serif su-intro-text su-mb-0 su-rs-mt-2 su-text-21 su-leading-[27.35px] md:su-text-28 md:su-leading-[36.47px]",
              "",
            ].join(" ")}
            content={summary}
            elementType="div"
          />
        )}
      </div>
    </Container>
  );
}
