import React from "react";

// import specific templates for the component
import { PieChart, BarGraph } from "../../packages/SVG-library/SVG";
import { Container } from "../../packages/grids/Container";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */
export default function FactCallout({ displayConfiguration }) {
  const { icon, factText, indicatorPosition, width } = displayConfiguration;
  const svgMap = new Map();
  const indicatorMap = new Map();

  svgMap.set("pie chart", <PieChart />);
  svgMap.set("bar graph", <BarGraph />);

  indicatorMap.set("top", "fact-wrapper__decoration-top");
  indicatorMap.set("bottom", "fact-wrapper__decoration-bottom");

  const indicator = indicatorMap.get(indicatorPosition)
    ? indicatorMap.get(indicatorPosition)
    : "fact-wrapper__decoration-top";

  return (
    <Container width={width}>
      <section className="fact-wrapper su-col-span-full su-my-[121px] md:su-mb-[108px] lg:su-mb-[50px] su-w-full su-relative su-h-auto su-p-[3px] su-bg-gradient decoration-top">
        <div
          className={`${indicator} su-absolute su-left-1/2 su-right-1/2 su-flex su-items-center su-justify-start su-w-[24px] su-h-[90px]`}
        >
          <div className="su-w-[3px] su-h-[72px] lg:su-h-[60px] su-bg-gradient" />
          <div className="su-w-[24px] su-h-[24px] su-rounded-full su-bg-gradient su-flex su-items-center su-justify-center">
            <div className="su-w-[18px] su-h-[18px] su-rounded-full su-bg-white dark:su-bg-black" />
          </div>
        </div>
        <div
          className={`su-px-[38px] ${
            width === "Wide" ? "md:su-px-[121px]" : ""
          } su-py-[38px] md:su-py-[61px] su-w-full su-h-full su-bg-white dark:su-bg-black su-flex su-flex-col su-items-center su-justify-center su-gap-[10px] lg:su-flex-row lg:su-gap-[38px] su-items-center`}
        >
          <div className="su-flex-shrink-0">
            {svgMap.get(icon) ? svgMap.get(icon) : ""}
          </div>

          <p className="su-font-serif su-m-0">{factText}</p>
        </div>
      </section>
    </Container>
  );
}
