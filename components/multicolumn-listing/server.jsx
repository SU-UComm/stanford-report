import { renderComponent } from "@squiz/xaccel-component-server-helpers";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";

export default async (args, info) => {
  const { CONTENT_API, CONTENT_API_KEY, FB_JSON_URL } = info.set.environment;
  let data = null;

  // check what data source "Search" or "Select"
  if (args.source.toLowerCase() === "search") {
    // compose and fetch the FB search results
    const adapter = new CardDataAdapter(FB_JSON_URL + args.searchQuery, "FB");

    data = await adapter.fetch();
  }
  // When Select, use Matix Content API
  else if (args.source.toLowerCase() === "select") {
    // get our data from the Content API
    const adapter = new CardDataAdapter(CONTENT_API, "MX");

    adapter
      .assets(args.columnOne, args.columnTwo, args.columnThree)
      .data("metadata", "attributes", "urls")
      .request({
        headers: {
          Authorization: `Bearer ${CONTENT_API_KEY}`,
        },
      });

    data = await adapter.fetch();
  }

  const fbArgs = {
    ...args,
    data,
    numberOfCards: args.numberOfCards,
  };

  return renderComponent({
    Component,
    componentName: "multicolumn-listing",
    args: fbArgs,
  });
};
