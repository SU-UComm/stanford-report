import React from "react";

// these are our specific templates for the component.
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import Card from "../../packages/card/Card";
import { LinkedHeading } from "../../packages/headings/Heading";
import { FeaturedGrid, HorizontalCardGrid } from "../../packages/grids/Grids";
import { Container } from "../../packages/grids/Container";
import { SidebarList } from "../../packages/sidebar/SidebarList";
import { ExternalArrowUnstyled } from "../../packages/SVG-library/SVG";

/**
 * Featured content component
 *
 * @param {string} title The component title
 * @param {string} ctaText The cta text
 * @param {string} ctaUrl The cta url
 * @param {object} data JSON data for content
 * @returns {JSX.Element}
 * @constructor
 */

export default function FeaturedContent({
  contentConfiguration,
  displayConfiguration,
  eventsConfiguration,
  announcementsConfiguration,
  data,
  headingData,
  eventData,
  announcementData,
  announcementLink,
}) {
  const featuredCardData = data[0];
  if (
    contentConfiguration.featuredDescription !== "" &&
    contentConfiguration.featuredDescription !== null &&
    contentConfiguration.featuredDescription !== undefined
  ) {
    featuredCardData.description = contentConfiguration.featuredDescription;
  }

  const eventCards = [];
  eventData.forEach((card) => {
    eventCards.push(<Card data={card} cardType="horizontal" />);
  });

  const announcementCards = [];
  announcementData.forEach((card, i) => {
    announcementCards.push(
      <article className="su-relative su-mt-0 su-gap-6 su-flex su-flex-wrap">
        <XssSafeContent
          id={`aria-announcement-${i}`}
          className="su-wysiwyg-content su-w-full su-text-black dark:su-text-white su-mb-0 su-text-18 su-leading-[2.25rem] su-font-sans"
          content={card.description}
          elementType="p"
        />
        <a
          href={card.liveUrl}
          aria-labelledby={`aria-announcement-${i}`}
          className="su-group su-transition dark:su-text-digital-blue-vivid su-text-digital-blue su-flex su-flex-nowrap su-gap-02em su-items-center su-leading-[125%] su-text-16 su-font-semibold su-no-underline su-stretched-link"
        >
          <span className="group-hocus:su-underline">Read more</span>
          <span className="su-sr-only">(link is external)</span>
          <ExternalArrowUnstyled
            aria-hidden
            strokeWidth={3.5}
            className="su-transition su-will-change-transform group-hocus:su-translate-x-02em group-hocus:su--translate-y-02em su-w-08em su-text-digital-blue group-hocus:su-text-digital-red dark:su-text-digital-blue-vivid dark:group-hocus:su-text-dark-mode-red su-mt-0"
          />
        </a>
      </article>
    );
  });

  return (
    <Container width="large" data-component="combined-content-grid">
      <LinkedHeading
        title={headingData.title}
        ctaText={headingData.ctaText}
        ctaLink={headingData.ctaLink}
        ctaNewWindow={headingData.ctaNewWindow}
      />

      <div className="su-w-full su-component-featured-grid">
        <div className="su-flex su-flex-wrap lg:su-flex-nowrap su-gap-[68px] md:su-gap-72 lg:su-gap-[160px]">
          <div className="su-relative su-flex su-flex-wrap md:su-flex-nowrap lg:su-flex-wrap lg:su-order-2 md:su-items-start md:su-content-start su-gap-80 md:su-gap-72 lg:su-gap-[76px] md:su-basis-[39.5%] lg:su-basis-[30%] su-grow before:su-w-full before:md:su-w-full before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-px before:lg:su-h-full before:su-left-0 before:su--bottom-35 before:lg:su-bottom-auto before:lg:su-top-0 before:md:su-left-0 lg:before:su-w-px before:lg:su--left-80">
            <div className="su-relative su-w-full md:su-h-full lg:su-h-auto">
              <SidebarList
                title={eventsConfiguration.heading}
                icon="eventscalendar"
                ctaText="See all events"
                ctaUrl={eventsConfiguration.linkUrl}
                ctaIcon="externalarrow"
              >
                <HorizontalCardGrid
                  items={eventCards}
                  orientation="vertical"
                  maximumItems={Number(eventsConfiguration.numberOfItems)}
                />
              </SidebarList>
            </div>
            <div className="su-relative su-w-full md:su-h-full lg:su-h-auto before:su-w-full before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-px md:before:su-h-full md:before:su-w-px before:su-left-0 md:before:su--left-38 before:su--top-40 md:before:su-top-0 lg:before:su--top-38 lg:before:su-left-0 lg:before:su-w-full lg:before:su-h-px">
              <SidebarList
                title={announcementsConfiguration.heading}
                icon="announcement"
                ctaText="See all announcements"
                ctaUrl={announcementLink}
              >
                <HorizontalCardGrid
                  items={announcementCards}
                  orientation="vertical"
                  maximumItems={Number(
                    announcementsConfiguration.numberOfItems
                  )}
                />
              </SidebarList>
            </div>
          </div>
          <div className="md:su-basis-[58.333%] lg:su-basis-[64.5%] su-grow">
            <FeaturedGrid
              alignment="left"
              items={[
                <Card data={featuredCardData} cardSize="featured" />,
                <Card
                  data={data[1]}
                  displayThumbnail={displayConfiguration.displayThumbnails}
                  displayDescription={displayConfiguration.displayDescriptions}
                  cardSize="small"
                />,
                <Card
                  data={data[2]}
                  displayThumbnail={displayConfiguration.displayThumbnails}
                  displayDescription={displayConfiguration.displayDescriptions}
                  cardSize="small"
                />,
              ]}
              isNested
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
