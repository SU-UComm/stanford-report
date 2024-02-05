import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import FetchAdapter from "../../packages/utils/fetchAdapter";

export default async (args, info) => {
  let siteData = null;
  const adapter = new FetchAdapter();
  // adapter.url =
  // "https://sug-web.matrix.squiz.cloud/_designs/component-service/data/header.json";
  adapter.url =
    "https://sug-web.matrix.squiz.cloud/__data/assets/js_file/0021/128910/temp-header.js";

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
