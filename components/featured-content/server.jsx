import { renderComponent } from "@squiz/xaccel-component-server-helpers";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixCardService from "../../packages/utils/MatrixCardService";

export default async (args, info) => {
  const { FB_JSON_URL, API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  let data = null;

  // check what data source "Search" or "Select"
  if (args.source.toLowerCase() === "search") {
  }
  // When Select, use Matix Content API
  else if (args.source.toLowerCase() === "select") {
    // Get our card URI's from the args object
    const { featured, supporting1, supporting2 } = args;
    const cards = { featured, supporting1, supporting2 };
    // Create our service
    const service = new MatrixCardService({ ctx, API_IDENTIFIER });

    // Set our card service
    adapter.setCardService(service);

    // get the cards data
    data = await adapter.getCards(cards);

    return JSON.stringify(data);
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
