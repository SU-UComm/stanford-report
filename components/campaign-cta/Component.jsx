import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */
export default function CampaignCta({ title }) {
  return (
    <Container width="full" paddingX={false}>
      <section className="su-relative su-flex su-items-center su-justify-center su-flex-col">
        <div className="su-pt-[126px] su-pb-[108px] su-relative su-z-[2] su-text-white su-p-[20px] su-flex su-flex-col lg:su-flex-row">
          <div className="su-relative before:content-[''] lg:before:su-absolute lg:before:su-h-full lg:before:su-w-[1px] lg:before:su-bg-black-30 lg:before:su-right-0 lg:before:su-ml-[25px] lg:su-mr-[25px] su-max-w-[655px]">
            <h2 className="su-font-serif su-text-[50px] md:su-text-[72px] su-m-0">
              The Next Great Discovery
            </h2>

            <p className="su-mt-[34px] su-font-serif su-text-[20px] md:su-text-[24px] su-mb-0 lg:su-mb-[59px]">
              Many of today's greatest innovations are built on the shoulders of
              fundamental research conducted decades ago.
            </p>
          </div>

          <a
            href="#"
            className="su-mt-[50px] su-inline-block su-px-[30px] su-py-[10px] su-bg-digital-red su-mr-auto su-text-white su-no-underline hover:su-bg-black su-transition lg:su-mt-auto su-shrink-0"
          >
            Learn more
          </a>
        </div>

        <img
          className="su-absolute su-object-cover su-w-full su-h-full su-z-[1]"
          src="https://picsum.photos/1200"
        />

        <div className="su-campaign-cta-gradient su-z-[1]" />
        {/* <div className="su-bg-gradient-to-t su-from-[black]/60 su-from-[53.06%] su-from-[black]/60 su-to-[black]/0 su-to-[100%] su-absolute su-z-[1] su-w-full su-h-full" /> */}
      </section>
    </Container>
  );
}
