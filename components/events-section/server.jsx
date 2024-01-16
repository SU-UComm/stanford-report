import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import EventCardService from "../../packages/utils/EventCardService";

export default async (args, info) => {
  // const { ctx } = info;
  const adapter = new CardDataAdapter();
  const eventAPI = args.contentConfiguration.eventsUrl;
  let data = null;

  // Resolve the URI for the section heading link
  // const headingData = await linkedHeadingService(
  //   ctx,
  //   args.headingConfiguration
  // );

  const headingData = {
    title: args.headingConfiguration.title,
    ctaText: args.headingConfiguration.ctaText,
    ctaUrl: args.headingConfiguration.ctaUrl,
  };

  if (eventAPI) {
    const service = new EventCardService({ api: eventAPI });

    adapter.setCardService(service);

    data = await adapter.getCards();
  }

  const renderProps = {
    ...args,
    data,
    headingData,
  };

  return renderComponent({
    Component,
    componentName: "events-section",
    args: renderProps,
  });
};
