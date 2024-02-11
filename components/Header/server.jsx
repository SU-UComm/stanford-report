import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import FetchAdapter from "../../packages/utils/fetchAdapter";

export default async (args, info) => {
  let siteData = null;
  const adapter = new FetchAdapter();
  adapter.url = args.dataUrl;

  siteData = await adapter.fetch();
  const headerArgs = {
    ...args,
    ...siteData,
  };

  return renderComponent({
    Component,
    componentName: "header-component",
    args: headerArgs,
  });
};
