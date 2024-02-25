import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import EventCardService from "../../packages/utils/EventCardService";
import linkedHeadingService from "../../packages/utils/linkedHeadingService";

export default async (args, info) => {
  const adapter = new CardDataAdapter();
  const eventAPI = args.contentConfiguration.eventsUrl;
  let data = null;
  const { ctx } = info;

  // Resolve the URI for the section heading link
  const headingData = await linkedHeadingService(
    ctx,
    args.headingConfiguration
  );

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
