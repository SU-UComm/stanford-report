import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { SidebarHeading } from "../../packages/headings/Heading";
import {
  Podcast,
  ExternalArrow,
  BookOpenCover,
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

  const thumbMap = new Map();

  thumbMap.set(
    "Book",
    "su-shadow-[0px_4px_7px_0px_rgba(0,0,0,0.15)] su-size-full su-object-scale-down su-object-center"
  );
  thumbMap.set(
    "Podcast",
    "su-absolute su-object-cover su-rounded-[8px] su-z-[2] su-flex-1 su-size-full su-shadow-[0px_4px_7px_0px_rgba(0,0,0,0.15)]"
  );

  return (
    <Container width="full" paddingX={false}>
      <section className="su-py-45 su-px-20 su-flex su-justify-center su-relative md:su-py-72 md:su-px-50">
        <div className="su-group su-max-w-[1086px] su-flex su-flex-col su-items-center su-z-[2] su-relative su-p-38 before:su-content-[''] before:su-bg-foggy-light before:su-w-full before:su-h-full before:su-opacity-90 before:su-absolute before:su-z-[-1] before:su-top-0 before:su-left-0 md:su-flex-row md:su-gap-20 md:su-items-start lg:su-p-48 lg:su-gap-48">
          <div
            className={`${
              mediaType === "Podcast" &&
              "su-w-[224px] md:su-w-[182px] lg:su-w-[292px]"
            } su-h-[224px] md:su-h-[182px] lg:su-h-[292px] su-relative su-shrink-0 ${
              mediaType === "Book" && "media-feature__thumb"
            }`}
          >
            <img
              src={imageData.url}
              alt={imageData.attributes.alt}
              className={thumbMap.get(mediaType)}
            />
          </div>

          <div>
            <div className="su-py-20 su-w-full md:su-pb-27 md:su-pt-0 *:dark:su-text-black">
              <FeaturedHeading type={mediaType} />
            </div>

            <h3 className="su-text-[35px] su-font-bold su-leading-tight su-m-0 su-pb-8 md:su-pb-19 md:su-text-[40px] lg:su-text-[43px]">
              <a
                href={linkUrl}
                className="su-media-feature-title-link su-stretched-link"
              >
                {title}
                <span className="su-hidden lg:su-inline-block su-relative su-top-12 [&>*]:su-stroke-digital-red dark:[&>*]:su-stroke-dark-mode-red su-transition group-hocus:su--translate-y-01em group-hocus:su-translate-x-01em [&>svg]:su-translate-y-1">
                  <ExternalArrow size="large" />
                </span>
              </a>
            </h3>

            <div className="su-w-full su-flex su-gap-[0.6rem] su-text-18 su-text-black-70 su-font-semibold su-items-center su-pb-15 su-leading-snug md:su-pb-19 md:su-text-16">
              <MediaType type={mediaType} />
            </div>

            <p className="su-text-18 su-w-full su-m-0 su-leading-[125%] su-text-black su-font-normal md:su-text-19 lg:su-text-21">
              {teaserText}
            </p>
          </div>
        </div>

        <img
          src={bgImageData.url}
          className="su-absolute su-size-full su-object-cover su-left-0 su-top-0 su-z-[1]"
          alt={bgImageData.attributes.alt}
        />
      </section>
    </Container>
  );
}

function MediaType({ type }) {
  const iconMap = new Map();

  iconMap.set("Podcast", <Podcast variant="outline" />);
  iconMap.set("Book", <BookOpenCover className="su-w-[1.2em]" aria-hidden />);

  return (
    <>
      <span className="*:su-size-20">{iconMap.get(type)}</span>
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
