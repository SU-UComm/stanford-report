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
export default function TextCallout({
  displayConfiguration,
  imageConfiguration,
  imageData,
}) {
  const { title, content } = displayConfiguration;
  const { caption, credit, imagePlacement, image } = imageConfiguration;

  const captionCredit =
    caption && credit ? `${caption} | ${credit}` : caption || credit;

  return (
    <Container width="narrow">
      <section className="su-flex su-flex-col su-p-20 md:su-p-36 su-justify-start su-items-start su-bg-fog-light lg:su-mx-auto dark:su-bg-black [&>p]:su-m-0 [&>p]:!su-mb-0 [&>p]:su-text-16 md:[&>p]:!su-text-19 last-of-type:[&>p]:!su-mb-0">
        <div className="su-relative su-justify-start su-items-center su-w-full su-gap-3 su-flex su-overflow-hidden su-mb-12">
          <div>
            <h3 className="su-font-serif su-inline !su-text-23 su-pr-10 su-m-0">
              {title}
            </h3>
            <span className="su-w-full su-bg-black-40 dark:su-bg-black-70 su-h-px su-absolute su-bottom-4" />
          </div>
        </div>

        <div
          className={`${
            image && imagePlacement === "Above content"
              ? "su-order-2"
              : "su-order-1"
          } su-flex su-flex-col su-gap-12`}
        >
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
        </div>

        {image && (
          <div
            className={`su-order-${
              imagePlacement === "Above content"
                ? "1 su-pb-20 md:su-pb-12 lg:su-pb-27"
                : "2 su-pt-20 md:su-pt-12 lg:su-pt-27"
            }`}
          >
            <img src={imageData.url} alt={imageData.attributes.alt} />

            <p className="su-m-0 su-text-14 su-leading-[1.672rem] md:su-leading-[1.911rem] md:su-text-16 su-mt-8 md:su-mt-12 lg:su-text-18">
              {captionCredit}
            </p>
          </div>
        )}
      </section>
    </Container>
  );
}
