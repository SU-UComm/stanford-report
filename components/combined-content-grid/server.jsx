import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixCardService from "../../packages/utils/MatrixCardService";
import EventCardService from "../../packages/utils/EventCardService";
import FunnelbackCardService from "../../packages/utils/FunnelbackCardService";
import linkedHeadingService from "../../packages/utils/linkedHeadingService";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  // eslint-disable-next-line no-unused-vars
  const { FB_JSON_URL, API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  const eventAPI = args.eventsConfiguration.endPoint;
  const announcementsAPI = args.announcementsConfiguration.endPoint;

  let data = null;
  let eventData = null;
  let announcementData = null;
  let announcementLink = null;

  // check what data source "Search" or "Select"
  // eslint-disable-next-line no-empty
  if (args.contentConfiguration.source.toLowerCase() === "search") {
    // compose and fetch the FB search results
    const query = args.contentConfiguration.searchQuery;
    const service = new FunnelbackCardService({ FB_JSON_URL, query });

    adapter.setCardService(service);
    data = await adapter.getCards();
  }
  // When Select, use Matix Content API
  else if (args.contentConfiguration.source.toLowerCase() === "select") {
    // Get our card URI's from the args object
    const { cards } = args.contentConfiguration;
    // Create our service
    const service = new MatrixCardService({ ctx, API_IDENTIFIER });

    // Set our card service
    adapter.setCardService(service);

    // get the cards data
    data = await adapter.getCards(cards);
  }

  // Resolve the URI for the section heading link
  const headingData = await linkedHeadingService(
    ctx,
    args.headingConfiguration
  );

  if (eventAPI) {
    const service = new EventCardService({ api: eventAPI });
    adapter.setCardService(service);
    eventData = await adapter.getCards();
  }

  if (announcementsAPI) {
    const query = announcementsAPI;
    const service = new FunnelbackCardService({ FB_JSON_URL, query });

    adapter.setCardService(service);
    announcementData = await adapter.getCards();
  }

  if (
    args.announcementsConfiguration.linkUrl !== "" &&
    args.announcementsConfiguration.linkUrl !== undefined &&
    args.announcementsConfiguration.linkUrl !== null
  ) {
    const announcementPageData = await basicAssetUri(
      ctx,
      args.announcementsConfiguration.linkUrl
    );
    announcementLink = announcementPageData.url;
  }

  const renderProps = {
    ...args,
    data,
    headingData,
    eventData,
    announcementData,
    announcementLink,
  };

  return renderComponent({
    Component,
    componentName: "combined-content-grid",
    args: renderProps,
  });
};
