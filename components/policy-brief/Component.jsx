import React from "react";
import { PolicyBrief, CaseStudy } from "../../packages/SVG-library/SVG";

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

export default function PolicyBriefComponent({ data, contentConfiguration }) {
  const { type, title, summary, linkUrl, linkText } = contentConfiguration;
  const SVGMap = new Map();

  SVGMap.set("Policy Brief", {
    light: <PolicyBrief variant="light" />,
    dark: <PolicyBrief variant="dark" />,
  });

  SVGMap.set("Case Study", {
    light: <CaseStudy variant="light" />,
    dark: <CaseStudy variant="dark" />,
  });

  return (
    <Container width="wide" paddingX={false}>
      <section className="su-relative su-flex su-flex-col su-gap-20 su-py-30 su-px-20 su-bg-fog-light md:su-mx-50 md:su-flex-row md:su-gap-18 lg:su-gap-48 md:su-p-36 lg:su-py-61 lg:su-px-65 dark:su-bg-transparent dark:before:su-bg-black dark:before:su-opacity-[0.5] dark:before:su-content-[''] dark:before:su-absolute dark:before:su-w-full dark:before:su-h-full dark:before:su-top-0 dark:before:su-left-0 dark:before:su-z-1">
        <div className="su-relative su-w-full su-h-[233px] md:su-h-auto md:su-min-w-[257px] lg:su-h-[378.331px] lg:su-flex-1 su-z-2">
          <img
            // src="https://picsum.photos/800"
            src={data && data.url ? data.url : ""}
            className="su-absolute su-size-full su-object-cover"
            alt={data && data.attributes.alt ? data.attributes.alt : ""}
          />
        </div>

        <div className="lg:su-flex-1 su-relative su-z-2">
          <div className="su-flex su-gap-6 su-items-center su-text-18 su-font-semibold su-pb-20 md:su-pb-27">
            {SVGMap.get(type) && (
              <>
                <span className="dark:su-hidden">{SVGMap.get(type).light}</span>
                <span className="su-hidden dark:su-block">
                  {SVGMap.get(type).dark}
                </span>
              </>
            )}

            <span>{type}</span>
          </div>

          <h2 className="su-text-[33px] su-font-bold su-leading-[125%] su-font-serif su-pb-19 su-m-0">
            {title}
          </h2>

          <p className="su-text-19 su-font-normal su-leading-[125%] su-pb-20 md:su-pb-27 su-m-0">
            {summary}
          </p>

          {linkUrl && (
            <a
              href={linkUrl}
              className="su-flex su-gap-2 su-text-19 su-font-semibold su-leading-[125%] su-text-digital-red su-no-underline"
            >
              {linkText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
              >
                <path
                  d="M8.95664 7.42241L15.5563 7.42241M15.5563 7.42241L15.5563 14.0221M15.5563 7.42241L7.07102 15.9077"
                  stroke="#B1040E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </section>
    </Container>
  );
}
