import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const { buttons } = args;

  const buttonsArray = await Promise.all(
    buttons.map(async (button) => {
      const { buttonText, internalUrl, externalUrl, isNewWindow } = button;
      let linkUrl = null;
      if (internalUrl) {
        linkUrl = await basicAssetUri(ctx, internalUrl);
      }
      const internalLinkUrl = linkUrl?.url;

      return {
        buttonText,
        internalLinkUrl,
        externalUrl,
        isNewWindow,
      };
    })
  );

  const renderProps = {
    ...args,
    buttonsArray,
  };

  return renderComponent({
    Component,
    componentName: "button-row",
    args: renderProps,
  });
};
