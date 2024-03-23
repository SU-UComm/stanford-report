import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const { cards } = args;

  const cardsArray = await Promise.all(
    cards.map(async (card) => {
      const { eyebrow, title, description, linksDetail } = card;
      let linkUrl = null;
      if (linksDetail?.internalUrl) {
        linkUrl = await basicAssetUri(ctx, linksDetail.internalUrl);
      }
      const internalLinkUrl = linkUrl?.url;

      return {
        eyebrow,
        title,
        description,
        linksDetail,
        internalLinkUrl,
      };
    })
  );

  const renderProps = {
    ...args,
    cardsArray,
  };

  return renderComponent({
    Component,
    componentName: "cta-cards-block",
    args: renderProps,
  });
};
