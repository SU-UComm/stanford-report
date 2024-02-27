import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const hasImage = args.image;
  // const hasVideoThumbnail = args.video.thumbnail;
  let imageData = null;
  // const videoThumbData = null;

  if (hasImage) {
    imageData = await basicAssetUri(ctx, hasImage);
  }

  // if (hasVideoThumbnail) {
  //   videoThumbData = await basicAssetUri(ctx, hasVideoThumbnail);
  // }

  const renderProps = {
    ...args,
    imageData,
    // videoThumbData,
  };

  return renderComponent({
    Component,
    componentName: "single-image-video",
    args: renderProps,
  });
};
