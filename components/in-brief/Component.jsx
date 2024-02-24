import React from "react";
import hash from "object-hash";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";

/**
 * Renders out the In Brief component
 *
 * @param {string} title
 * the title of the component
 *
 * @param {string} points
 * the bullet points items
 *
 * @returns {JSX.Element}
 */
export default function InBrief({ points }) {
  const hasPoints = points.length > 0;
  return hasPoints ? (
    <Container width="narrow">
      <div
        data-test="in-brief"
        className="su-border-b su-border-black-20"
      >
        <div className="su-relative su-overflow-hidden">
          <h2 className="su-font-serif su-font-black su-inline su-bg-white dark:su-bg-black-true !su-text-23 su-pr-10 su-m-0">
            In brief
          </h2>
          <span className="su-w-full su-bg-black-20 su-h-px su-absolute su-bottom-4" />
        </div>
        <div className="su-wysiwyg-content">
          <ul className="su-basefont-19 su-flex su-flex-col su-mb-0 su-gap-18 su-pt-34 su-pb-27 [&>li]:su-m-0">
            {points.map((item) => {
              return (
                <XssSafeContent
                  elementType="li"
                  key={hash.MD5(item)}
                  className={[
                    "su-basefont-19 su-leading-[125%] su-text-16 md:su-text-19 lg:su-text-19 *:su-text-16 md:*:su-text-19 *:su-leading-[125%]",
                  ].join(" ")}
                  content={item}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  ) : (
    ""
  );
}
