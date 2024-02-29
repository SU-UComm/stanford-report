import React from "react";

// import specific templates for the component
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
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
    <Container width="narrow">
      <section className="su-flex su-flex-col su-gap-12 su-p-20 md:su-p-36 su-justify-start su-items-start su-bg-fog-light lg:su-mx-auto dark:su-bg-black [&>p]:su-m-0 [&>p]:!su-mb-0 [&>p]:su-text-16 md:[&>p]:!su-text-19 last-of-type:[&>p]:!su-mb-0">
        <div className="su-relative su-justify-start su-items-center su-w-full su-gap-3 su-flex su-overflow-hidden su-mb-12">
          <div>
            <h3 className="su-font-serif su-inline !su-text-23 su-pr-10 su-m-0">
              {title}
            </h3>
            <span className="su-w-full su-bg-black-40 dark:su-bg-black-70 su-h-px su-absolute su-bottom-4" />
          </div>
        </div>

        <XssSafeContent
          data-test="acknowledgement"
          className={[
            "su-wysiwyg-content",
            "*:su-text-16 *:md:su-text-19",
            "*:su-leading",
            "last:*:su-mb-0",
          ].join(" ")}
          content={content}
        />
      </section>
    </Container>
  );
}
