import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";

/**
 * Leadership hero
 *
 * @param {string} title The props to display the hero
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function LeadershipHero(props) {
  const { title, pubDateFormatted, topic } = props;
  return (
    <Container>
      <div className="su-flex su-justify-between su-flex-wrap su-rs-mt-6">
        <span className="su-flex su-items-center su-justify-center su-text-16 md:su-basefont-23">
          <time className="su-m-0 su-mr-4 su-font-semibold">
            {pubDateFormatted}
          </time>
        </span>
        <span className="su-ml-auto su-font-semibold su-text-digital-red dark:su-text-dark-mode-red su-text-16 sm:su-text-21 md:su-text-24">
          {topic.asset_name}
        </span>
      </div>
      <h1 className="su-mt-32 sm:su-mt-45 xl:su-mt-58 su-font-serif">
        {title}
      </h1>
    </Container>
  );
}
