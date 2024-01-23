import React from "react";

// these are our specific templates for the component.
import Card from "../../packages/card/Card";
import { LinkedHeading } from "../../packages/headings/Heading";
import { FeaturedGrid, HorizontalCardGrid } from "../../packages/grids/Grids";
import { Container } from "../../packages/grids/Container";
import { SidebarList } from "../../packages/sidebar/SidebarList";
import { ChevronRight } from "../../packages/SVG-library/SVG";

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
      <article className="su-relative su-mt-0 su-gap-[6px] su-flex su-flex-wrap">
        <p
          className="su-w-full su-text-black dark:su-text-white su-mb-0 su-text-[18px] su-leading-[22.5px] su-font-sans"
          id={`aria-announcement-${i}`}
        >
          {card.description}
        </p>
        <a
          href={card.liveUrl}
          aria-labelledby={`aria-announcement-${i}`}
          className="su-transition dark:su-text-digital-blue-vivid su-flex su-flex-nowrap su-gap-[2px] su-items-center su-leading-[20px] su-text-[16px] su-font-bold su-no-underline before:su-w-full before:su-h-full before:su-top-0 before:su-left-0 before:su-absolute [&>svg]:su-w-[16px] [&>svg]:su-h-[16px]"
        >
          <span>Read more</span>
          <ChevronRight />
        </a>
      </article>
    );
  });

  return (
    <Container width="large" data-component="combined-content-grid">
      <LinkedHeading
        title={headingData.title}
        ctaText={headingData.ctaText}
        ctaUrl={headingData.resolvedUrl}
      />

      <div className="su-w-full su-component-featured-grid">
        <div className="su-flex su-flex-wrap lg:su-flex-nowrap su-gap-[68px] md:su-gap-[72px] lg:su-gap-[160px]">
          <div className="su-relative su-flex su-flex-wrap md:su-flex-nowrap lg:su-flex-wrap lg:su-order-2 md:su-items-start md:su-content-start su-gap-[80px] md:su-gap-[72px] lg:su-gap-[76px] md:su-basis-[39.5%] lg:su-basis-[30%] su-flex-grow before:su-w-full before:md:su-w-full before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-[1px] before:lg:su-h-full before:su-left-0 before:su-bottom-[-35px] before:lg:su-bottom-auto before:lg:su-top-0 before:md:su-left-[0] lg:before:su-w-[1px] before:lg:su-left-[-80px]">
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
            <div className="su-relative su-w-full md:su-h-full lg:su-h-auto before:su-w-full before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-[1px] md:before:su-h-full md:before:su-w-[1px] before:su-left-0 md:before:su-left-[-38px] before:su-top-[-40px] md:before:su-top-[0] lg:before:su-top-[-38px] lg:before:su-left-0 lg:before:su-w-full lg:before:su-h-[1px]">
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
          <div className="md:su-basis-[58.333%] lg:su-basis-[64.5%] su-flex-grow">
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
