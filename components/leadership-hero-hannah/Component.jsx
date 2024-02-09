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

export default function LeadershipHeroHannah(props) {
  const { title, pubDateFormatted, topic } = props;
  return (
    <Container>
      <div className="su-flex su-justify-between su-flex-wrap su-rs-mt-6">
        <span className="su-flex su-items-center su-justify-center su-text-[16px] md:su-basefont-23">
          <time className="su-m-0 su-mr-[4px] su-font-semibold">
            {pubDateFormatted}
          </time>
        </span>
        <span className="su-ml-auto su-font-semibold su-text-digital-red dark:su-text-dark-mode-red su-text-[16px] sm:su-text-[21px] md:su-text-[24px]">
          {topic.asset_name}
        </span>
      </div>
      <h1 className="su-mt-[32px] sm:su-mt-[45px] xl:su-mt-[58px] su-font-serif">
        {title}
      </h1>
    </Container>
  );
}
