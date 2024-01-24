import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import FunnelbackCardService from "../../packages/utils/FunnelbackCardService";
import linkedHeadingService from "../../packages/utils/linkedHeadingService";

export default async (args, info) => {
  // eslint-disable-next-line no-unused-vars
  const { FB_JSON_URL, API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  let data = null;

  // check what data source "Search" or "Select"
  // eslint-disable-next-line no-empty
  // compose and fetch the FB search results
  const query = args.contentConfiguration.searchQuery;
  const service = new FunnelbackCardService({ FB_JSON_URL, query });

  adapter.setCardService(service);

  data = await adapter.getCards();

  // Resolve the URI for the section heading link
  const headingData = await linkedHeadingService(
    ctx,
    args.headingConfiguration
  );

  const renderProps = {
    ...args,
    data,
    headingData,
  };

  return renderComponent({
    Component,
    componentName: "stories-carousel",
    args: renderProps,
  });
};
