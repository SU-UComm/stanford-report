import fetch from "node-fetch";
import { renderComponent } from "@squiz/xaccel-component-server-helpers";
import Component from "./Component";

export default async (args, info) => {
  // compose and fetch the FB search results
  const searchUrl = `${args.search_url}${args.search_query}`;
  const fetchData = await fetch(searchUrl);
  const data = await fetchData.json();
  // we need to pass the data to the component
  const fbArgs = {
    ...args,
    data,
  };

  return renderComponent({
    Component,
    componentName: "featured-content",
    args: fbArgs,
  });
};
