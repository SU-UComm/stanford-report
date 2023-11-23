import fetch from "node-fetch";
import { renderComponent } from "@squiz/xaccel-component-server-helpers";
import Component from "./Component";

export default async (args) => {
  // compose and fetch the FB search results
  const searchUrl = `${args.searchUrl}${args.searchQuery}`;

  const fetchData = await fetch(searchUrl);

  console.log("-------------");
  console.log(`####### ${searchUrl}`);
  console.log("-------------");

  const data = await fetchData.json();
  // const data = {};
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
