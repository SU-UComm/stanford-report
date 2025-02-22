import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const { callouts } = args;
  const calloutsArray = await Promise.all(
    callouts.map(async (callout) => {
      const { title, content, imageConfiguration, buttonConfiguration } =
        callout;
      const { caption, credit, imagePlacement, image } = imageConfiguration;
      const { buttonText, externalUrl, internalUrl, isNewWindow } =
        buttonConfiguration;

      let imageData = null;
      if (image) {
        imageData = await basicAssetUri(ctx, image);
      }

      let internalLinkUrl = null;
      if (internalUrl) {
        internalLinkUrl = await basicAssetUri(ctx, internalUrl);
      }

      return {
        title,
        content,
        caption,
        credit,
        imagePlacement,
        imageData,
        buttonText,
        externalUrl,
        internalLinkUrl,
        isNewWindow,
      };
    })
  );

  const renderProps = {
    ...args,
    calloutsArray,
  };

  return renderComponent({
    Component,
    componentName: "two-column-text-callout",
    args: renderProps,
  });
};
