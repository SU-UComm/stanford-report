import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { SidebarHeading } from "../../packages/headings/Heading";
import {
  Podcast,
  ExternalArrow,
  Book,
  FeaturedReading,
} from "../../packages/SVG-library/SVG";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function MediaFeature({
  contentConfiguration,
  bgImageData,
  imageData,
}) {
  const { title, teaserText, mediaType, linkUrl } = contentConfiguration;

  return (
    <Container width="full" paddingX={false}>
      <section className="su-py-[45px] su-px-[20px] su-flex su-justify-center su-relative md:su-py-[72px] md:su-px-[50px]">
        <div className="su-max-w-[1086px] su-flex su-flex-col su-items-center su-z-[2] su-relative su-p-[38px] before:su-content-[''] before:su-bg-foggy-light before:su-w-full before:su-h-full before:su-opacity-[0.9] before:su-absolute before:su-z-[-1] before:su-top-0 before:su-left-0 md:su-flex-row md:su-gap-[20px] md:su-items-start lg:su-p-[48px]">
          <div className="su-h-[224px] su-w-[224px] su-relative su-shrink-0 md:su-w-[182px] md:su-h-[182px] lg:su-w-[292px] lg:su-h-[292px]">
            <img
              // src="https://picsum.photos/600/250"
              src={imageData.url}
              alt={imageData.attributes.alt}
              className="su-absolute su-object-cover su-rounded-[8px] su-z-[2] su-flex-1 su-w-full su-h-full su-shadow-[0px_4px_7px_0px_rgba(0,0,0,0.15)]"
            />
          </div>

          <div>
            <div className="su-py-[20px] su-w-full md:su-pb-[27px] md:su-pt-0 [&>*]:dark:su-text-black">
              <FeaturedHeading type={mediaType} />
            </div>

            <a href={linkUrl} className="su-no-underline">
              <h3 className="su-text-[35px] su-font-bold su-leading-[110%] su-m-0 su-pb-[8px] su-text-black su-text-black md:su-pb-[19px] md:su-text-[40px] lg:su-text-[43px]">
                {title}
                <span className="su-hidden lg:su-inline-block su-relative su-top-[12px]">
                  <ExternalArrow size="large" />
                </span>
              </h3>
            </a>

            <div className="su-w-full su-flex su-text-[18px] su-text-black-70 su-font-semibold su-items-center su-pb-[15px] su-leading-[130%] md:su-pb-[19px] md:su-text-[16px]">
              <MediaType type={mediaType} />
            </div>

            <p className="su-text-[18px] su-w-full su-m-0 su-leading-[125%] su-text-black su-font-normal md:su-text-[19px] lg:su-text-[21px]">
              {teaserText}
            </p>
          </div>
        </div>

        <img
          // src="https://picsum.photos/1300/"
          src={bgImageData.url}
          className="su-absolute su-w-full su-h-full su-object-cover su-left-0 su-top-0 su-z-[1]"
        />
      </section>
    </Container>
  );
}

function MediaType({ type }) {
  const iconMap = new Map();

  iconMap.set("Podcast", <Podcast variant="outline" />);
  iconMap.set("Book", <Book variant="outline" />);

  return (
    <>
      <span className="[&>*]:su-h-[20px] [&>*]:su-w-[20px]">
        {iconMap.get(type)}
      </span>
      {type}
    </>
  );
}

function FeaturedHeading({ type }) {
  switch (type) {
    case "Podcast":
      return <SidebarHeading icon="Featured audio" title="Featured audio" />;
    default:
      return <SidebarHeading icon="Featured reading" title="Featured book" />;
  }
}
