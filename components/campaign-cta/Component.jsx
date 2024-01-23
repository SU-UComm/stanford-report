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
export default function CampaignCta({ displayConfiguration, data }) {
  const { title, description, linkUrl, linkText } = displayConfiguration;

  return (
    <Container width="full" paddingX={false}>
      <section className="su-relative su-flex su-items-center su-justify-center su-flex-col">
        <div className="su-pt-[126px] su-pb-[108px] su-relative su-z-[2] su-text-white su-p-[20px] su-flex su-flex-col lg:su-flex-row">
          <div className="su-relative before:content-[''] lg:before:su-absolute lg:before:su-h-full lg:before:su-w-[1px] lg:before:su-bg-black-30 lg:before:su-right-0 lg:before:su-ml-[25px] lg:su-mr-[25px] su-max-w-[655px]">
            <h2 className="su-font-serif su-text-[50px] md:su-text-[72px] su-m-0">
              {title}
            </h2>

            <XssSafeContent
              content={description}
              elementType="div"
              className={[
                "su-mt-[34px] su-font-serif su-text-[20px] md:su-text-[24px] su-mb-0 lg:su-mb-[59px]",
              ].join(" ")}
            />
          </div>

          <a
            href={linkUrl}
            className="su-mt-[50px] su-inline-block su-px-[30px] su-py-[10px] su-bg-digital-red su-mr-auto su-text-white su-no-underline hover:su-bg-black su-transition lg:su-mt-auto su-shrink-0"
          >
            {linkText}
          </a>
        </div>

        <img
          className="su-absolute su-object-cover su-w-full su-h-full su-z-[1]"
          // src="https://picsum.photos/1200"
          src={data.url}
        />

        <div className="su-campaign-cta-gradient su-z-[1]" />
      </section>
    </Container>
  );
}
