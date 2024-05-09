import fetch from "node-fetch";
import { encode } from "html-entities";
import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixCardService from "../../packages/utils/MatrixCardService";
import FunnelbackCardService from "../../packages/utils/FunnelbackCardService";
import linkedHeadingService from "../../packages/utils/linkedHeadingService";

export default async (args, info) => {
  // eslint-disable-next-line no-unused-vars
  const { FB_JSON_URL, API_IDENTIFIER, BASE_DOMAIN } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  let data = null;

  // check what data source "Search" or "Select"
  // eslint-disable-next-line no-empty
  if (args.contentConfiguration.source.toLowerCase() === "search") {
    // compose and fetch the FB search results
    const query = args.contentConfiguration.searchQuery;
    const service = new FunnelbackCardService({ FB_JSON_URL, query });

    const siteData = await fetch(
      `${BASE_DOMAIN}__data/assets/js_file/0027/128736/topics.js`
    ).catch((error) => {
      throw new Error(error);
    });

    const siteJson = await siteData.json();

    adapter.setCardService(service);

    data = await adapter.getCards();

    data.forEach((item, i) => {
      const { taxonomy } = item;

      if (!item.taxonomyUrl) {
        const ids = Object.keys(siteJson);

        ids.forEach((assetid) => {
          const { asset_name, asset_url } = siteJson[assetid];

          if (asset_name === encode(taxonomy)) {
            data[i].taxonomyUrl = asset_url;
          }
        });
      }
    });
  }

  // When Select, use Matix Content API
  else if (args.contentConfiguration.source.toLowerCase() === "select") {
    // Get our card URI's from the args object
    const { cards } = args.contentConfiguration;

    // Create our service
    const service = new MatrixCardService({ BASE_DOMAIN, API_IDENTIFIER });

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

  const renderProps = {
    ...args,
    data,
    headingData,
  };

  return renderComponent({
    Component,
    componentName: "multicolumn-listing",
    args: renderProps,
  });
};
