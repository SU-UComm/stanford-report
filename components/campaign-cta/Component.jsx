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
      <section className="su-container-inner su-relative su-flex su-items-center su-justify-center su-flex-col">
        <div className="su-component-campaigncta-wrap su-pt-[126px] su-pb-[108px] su-relative su-z-[2] su-text-white su-p-[20px] md:su-px-[50px] su-flex su-flex-col md:su-flex-row">
          <div className="su-component-campaigncta-content su-relative md:su-border-r-black-30 md:su-border-r md:su-border-r-solid md:su-mr-[25px] su-w-full md:su-max-w-[655px] md:su-pr-[25px]">
            <h2 className="su-font-serif su-text-[55px] su-leading-[100%] md:su-text-[72px] su-m-0 su-leading-[100%] su-font-bold">
              {title}
            </h2>

            <XssSafeContent
              content={description}
              elementType="div"
              className={[
                "su-mt-[34px] su-font-serif su-text-[20px] md:su-text-[24px] su-mb-0 md:su-mb-[59px] su-text-semibold md:su-mt-[61px]",
                "su-font-semibold su-leading-[130.245%]",
              ].join(" ")}
            />
          </div>

          {linkData && linkData.url && (
            <a
              href={linkData.url}
              className="su-text-[18px] su-mt-[50px] su-font-normal su-leading-[120%] su-inline-block su-px-[30px] su-pt-[10px] su-pb-[12px] su-bg-digital-red su-mr-auto su-text-white su-no-underline hover:su-bg-black su-transition md:su-px-[35px] md:su-pt-[14px] md:su-pb-[16px] md:su-text-[24px] md:su-leading-[119.415%] md:su-mt-auto su-shrink-0"
            >
              {linkText}
            </a>
          )}
        </div>

        <img
          className="su-absolute su-object-cover su-w-full su-h-full su-z-[1]"
          // src="https://picsum.photos/1200"
          src={data && data.url ? data.url : ""}
          alt={data && data.attributes.alt ? data.attributes.alt : ""}
        />

        <div className="su-campaign-cta-gradient su-z-[1]" />
      </section>
    </Container>
  );
}
