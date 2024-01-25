import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import MatrixMediaCardService from "../../packages/utils/MatrixMediaCardService";

export default async (args, info) => {
  // eslint-disable-next-line no-unused-vars
  const { FB_JSON_URL, API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  let data = null;

  data = await MatrixMediaCardService(ctx, args.cards);

  // // Resolve the URI for the section heading link
  // const headingData = await linkedHeadingService(
  //   ctx,
  //   args.headingConfiguration
  // );

  // console.log(data);

  const renderProps = {
    ...args,
    data,
    // headingData,
  };

  return renderComponent({
    Component,
    componentName: "media-carousel",
    args: renderProps,
  });
};
