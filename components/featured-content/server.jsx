import { renderComponent } from "@squiz/xaccel-component-server-helpers";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";

export default async (args, info) => {
  const { CONTENT_API, CONTENT_API_KEY, FB_JSON_URL } = info.set.environment;
  let data = null;

  // check what data source "Search" or "Select"
  if (args.contentConfiguration.source.toLowerCase() === "search") {
    // compose and fetch the FB search results
    const adapter = new CardDataAdapter(FB_JSON_URL + args.contentConfiguration.searchQuery, "FB");

    data = await adapter.fetch();
  }
  // When Select, use Matix Content API
  else if (args.contentConfiguration.source.toLowerCase() === "select") {
    // get our data from the Content API
    const adapter = new CardDataAdapter(CONTENT_API, "MX");

    adapter
      .assets(args.contentConfiguration.featured, args.contentConfiguration.supporting_01, args.contentConfiguration.supporting_02)
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
  };

  console.log(fbArgs);

  return renderComponent({
    Component,
    componentName: "featured-content",
    args: fbArgs,
  });
};
