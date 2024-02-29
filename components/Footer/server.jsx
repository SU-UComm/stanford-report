import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import FetchAdapter from "../../packages/utils/fetchAdapter";

export default async (args, info) => {
  let siteData = null;
  const adapter = new FetchAdapter();
  adapter.url = args.dataUrl;

  siteData = await adapter.fetch();
  const footerArgs = {
    ...args,
    ...siteData,
  };

  return renderComponent({
    Component,
    componentName: "footer-component",
    args: footerArgs,
  });
};
