import React from "react";

// import specific templates for the component
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { SidebarHeading } from "../../packages/headings/Heading";
import { Container } from "../../packages/grids/Grids";

/**
 * Related Story
 *
 * @param {string} data
 * asset data from the matrix asset
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function RelatedStory({ data }) {
  const { title, description, liveUrl, imageUrl, imageAlt } = data[0];

  return (
    <Container width="narrow">
      <section className="story__related-story su-col-span-full sm:su-col-span-10 sm:su-col-start-2 lg:su-col-span-6 lg:su-col-start-4 su-mx-auto su-py-[60px] md:su-py-[81px] lg:su-py-[86px]">
        <SidebarHeading
          title="Related story"
          icon="bullseyePointer"
          headingSize="h3"
          color="black"
        />

        <a className="su-text-black su-no-underline" href={liveUrl}>
          <div className="su-flex su-gap-[20px] sm:su-gap-[40px] su-mt-[30px] lg:su-mt-[36px] lg:su-mt-[38px]">
            <img
              className="su-object-cover su-h-auto su-max-h-[103px] su-max-w-[103px] md:su-max-h-[168px] md:su-max-w-[168px] lg:su-max-h-[185px] lg:su-max-w-[185px] su-object-center su-object-cover"
              src={imageUrl}
              alt={imageAlt}
            />

            <div className="">
              <h4 className="su-text-[20px] dark:su-text-white sm:su-text-[24px] su-font-serif !su-font-bold su-leading-[120%] su-mb-[9px] su-text-[20px] sm:su-text-[24px]">
                {title}
              </h4>

              <XssSafeContent
                className="su-text-[16px] sm:su-text-[18px] su-leading-[125%] !su-m-0 su-font-normal dark:su-text-white"
                content={description}
              />
            </div>
          </div>
        </a>
      </section>
    </Container>
  );
}
