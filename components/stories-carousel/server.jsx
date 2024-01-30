import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import linkedHeadingService from "../../packages/utils/linkedHeadingService";

export default async (args, info) => {
  // eslint-disable-next-line no-unused-vars
  const { FB_JSON_URL, API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  const data = {
    fbJsonUrl: FB_JSON_URL,
    fbQuery: args.contentConfiguration.searchQuery,
  };

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
    componentName: "stories-carousel",
    args: renderProps,
  });
};
