import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  let bgImageData = null;
  if (args?.bgImage) {
    bgImageData = await basicAssetUri(ctx, args.bgImage);
  }
  const bgImageUrl = bgImageData?.url;

  let videoImageData = null;
  if (args?.videoImage) {
    videoImageData = await basicAssetUri(ctx, args.videoImage);
  }

  let ctaUrl = null;
  if (args?.ctaUrl) {
    ctaUrl = await basicAssetUri(ctx, args?.ctaUrl);
  }
  const ctaInternalUrl = ctaUrl?.url;

  const renderProps = {
    ...args,
    bgImageUrl,
    videoImageData,
    ctaInternalUrl,
  };

  return renderComponent({
    Component,
    componentName: "horizontal-video-testimonials",
    args: renderProps,
  });
};
