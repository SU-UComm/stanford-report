import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import FetchAdapter from "../../packages/utils/fetchAdapter";

export default async (args, info) => {
  const { CONTENT_API, CONTENT_API_KEY } = info.set.environment;
  let data = null;
  // get our data from the Content API
  const adapter = new FetchAdapter(CONTENT_API, "MX");

  adapter
    .assets(args.assetid)
    .data("contents")
    .request({
      headers: {
        Authorization: `Bearer ${CONTENT_API_KEY}`,
      },
    });

  data = await adapter.fetch();
  const element = data[0].contents;

  const footerArgs = {
    ...args,
    data: element,
  };

  return renderComponent({
    Component,
    componentName: "footer-component",
    args: footerArgs,
  });
};
