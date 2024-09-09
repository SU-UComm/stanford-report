import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;

  /**
   * Section configuration data
   */
  let bgImageData = null;
  if (args?.sectionConfiguration?.bgImage) {
    bgImageData = await basicAssetUri(ctx, args.sectionConfiguration.bgImage);
  }
  const bgImageUrl = bgImageData?.url;

  let ctaLink = null;
  if (args.sectionConfiguration?.ctaUrl) {
    ctaLink = await basicAssetUri(ctx, args.sectionConfiguration?.ctaUrl);
  }
  const ctaInternalUrl = ctaLink?.url;

  /**
   * Vertical video cards data
   */
  const { videos } = args;
  const videosArray = await Promise.all(
    videos.map(async (video) => {
      const { heading, subheading, videoImage, youtubeId } = video;

      let videoImageData = null;
      if (videoImage) {
        videoImageData = await basicAssetUri(ctx, videoImage);
      }

      return {
        heading,
        subheading,
        videoImageData,
        youtubeId,
      };
    })
  );

  const renderProps = {
    ...args,
    bgImageUrl,
    ctaInternalUrl,
    videosArray,
  };

  return renderComponent({
    Component,
    componentName: "vertical-videos-panel",
    args: renderProps,
  });
};
