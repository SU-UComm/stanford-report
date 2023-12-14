import { renderComponent } from "@squiz/xaccel-component-server-helpers";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixCardService from "../../packages/utils/MatrixCardService";
import FunnelbackCardService from "../../packages/utils/FunnelbackCardService";

export default async (args, info) => {
  // eslint-disable-next-line no-unused-vars
  const { FB_JSON_URL, API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  let data = null;

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

  const renderProps = {
    ...args,
    data,
  };

  return renderComponent({
    Component,
    componentName: "featured-content",
    args: renderProps,
  });
};
