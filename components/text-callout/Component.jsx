import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";

/**
 * Renders out the text callout component
 *
 * @param {object} displayConfiguration
 * contains all the properties for the content of the component
 *
 * @param {string} displayConfiguration.title
 * the title for the component
 *
 * @param {string} displayConfiguration.content
 * the text/media content that goes into the component
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function TextCallout({ displayConfiguration }) {
  const { title, content } = displayConfiguration;

  return (
    <Container width="narrow" paddingX={false}>
      <section className="su-flex su-flex-col su-gap-[12px] su-p-[20px] md:su-p-[36px] su-flex-col su-justify-start su-items-start su-bg-fog-light lg:su-mx-auto dark:su-bg-black [&>p]:su-m-0 [&>p]:!su-mb-0 [&>p]:su-text-[16px] md:[&>p]:!su-text-[19px] last-of-type:[&>p]:!su-mb-0">
        <div className="su-relative su-justify-start su-items-center su-w-full su-gap-3 su-flex su-overflow-hidden su-mb-[12px]">
          <div>
            <h3 className="su-font-serif su-inline su-bg-fog-light dark:su-bg-black !su-text-[23px] su-pr-[10px] su-m-0">
              {title}
            </h3>
            <span className="su-w-full su-bg-black dark:su-bg-black-70 su-h-[1px] su-absolute su-bottom-[4px]" />
          </div>
        </div>

        <p>{content}</p>
      </section>
    </Container>
  );
}
