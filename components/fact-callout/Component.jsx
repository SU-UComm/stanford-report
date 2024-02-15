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
    <div className={`decoration-${indicatorPosition}`}>
      <Container width={width}>
        <section className="fact-wrapper su-col-span-full su-w-full su-relative su-h-auto su-p-3 su-bg-gradient">
          <div
            className={`${indicator} su-absolute su-left-1/2 su-right-1/2 su-flex su-items-center su-justify-start su-w-24 su-h-90`}
          >
            <div className="su-w-3 su-h-72 lg:su-h-60 su-bg-gradient" />
            <div className="su-size-24 su-rounded-full su-bg-gradient su-flex su-items-center su-justify-center">
              <div className="su-size-18 su-rounded-full su-bg-white dark:su-bg-black" />
            </div>
          </div>
          <div
            className={`su-px-38 ${
              width === "Wide" ? "md:su-px-[12.1rem]" : ""
            } su-py-38 md:su-py-61 su-size-full su-bg-white dark:su-bg-black su-flex su-flex-col su-items-center su-justify-center su-gap-10 lg:su-flex-row lg:su-gap-38`}
          >
            <div className="su-shrink-0">
              {svgMap.get(icon) ? svgMap.get(icon) : ""}
            </div>

            <p className="su-font-serif su-m-0">{factText}</p>
          </div>
        </section>
      </Container>
    </div>
  );
}
