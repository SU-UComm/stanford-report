import React from "react";

// import specific templates for the component
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */
export default function CampaignCta({ displayConfiguration, data, linkData }) {
  const { title, description, linkText } = displayConfiguration;

  return (
    <Container width="full" paddingX={false}>
      <section className="su-relative su-flex su-items-center su-justify-center su-flex-col">
        <div className="su-component-campaigncta-wrap su-pt-126 su-pb-108 su-relative su-z-[2] su-text-white su-p-20 su-flex su-flex-col md:su-flex-row">
          <div className="su-component-campaigncta-content su-relative md:su-border-r-black-30 md:su-border-r md:su-mr-25 su-max-w-[655px] md:su-pr-25">
            <h2 className="su-font-serif su-text-[5.5rem] su-leading-none md:su-text-[7.2rem] su-m-0 su-font-bold">
              {title}
            </h2>

            <XssSafeContent
              content={description}
              elementType="div"
              className={[
                "su-mt-34 su-font-serif su-text-20 md:su-text-24 su-mb-0 md:su-mb-[5.9rem] su-text-semibold md:su-mt-61",
                "su-font-semibold su-leading-[130.245%]",
              ].join(" ")}
            />
          </div>

          {linkData && linkData.url && (
            <a
              href={linkData.url}
              className="su-text-18 su-mt-50 su-font-normal su-leading-display su-inline-block su-px-30 su-pt-10 su-pb-12 su-bg-digital-red su-mr-auto su-text-white su-no-underline hover:su-bg-black su-transition md:su-px-35 md:su-pt-14 md:su-pb-16 md:su-text-24 md:su-leading-[119.415%] md:su-mt-auto su-shrink-0"
            >
              {linkText}
            </a>
          )}
        </div>

        <img
          className="su-absolute su-object-cover su-size-full su-z-[1]"
          // src="https://picsum.photos/1200"
          src={data && data.url ? data.url : ""}
          alt={data && data.attributes.alt ? data.attributes.alt : ""}
        />

        <div className="su-campaign-cta-gradient su-z-[1]" />
      </section>
    </Container>
  );
}
