import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import FetchAdapter from "../../packages/utils/fetchAdapter";

export default async (args) => {
  let siteData = null;

  const adapter = new FetchAdapter();

  adapter.url = args.dataUrl;
  siteData = await adapter.fetch();

  delete siteData.site;
  delete siteData.navigation;

  const renderProps = {
    ...args,
    ...siteData,
  };

  return renderComponent({
    Component,
    componentName: "link-list",
    args: renderProps,
  });
};
