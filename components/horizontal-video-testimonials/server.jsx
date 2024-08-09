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

  let ctaUrl = null;
  if (args?.ctaUrl) {
    ctaUrl = await basicAssetUri(ctx, args?.ctaUrl);
  }
  const ctaInternalUrl = ctaUrl?.url;

  /**
   * Testimonials data
   */
  const { testimonials } = args;
  const testimonialsArray = await Promise.all(
    testimonials.map(async (testimonial) => {
      const {
        heading,
        description,
        videoImage,
        youtubeId,
        storyUrl,
        manualStoryUrl,
      } = testimonial;

      let internalStoryLink = null;
      if (storyUrl) {
        internalStoryLink = await basicAssetUri(ctx, storyUrl);
      }
      const internalStoryUrl = internalStoryLink?.url;

      let videoImageData = null;
      if (videoImage) {
        videoImageData = await basicAssetUri(ctx, videoImage);
      }

      return {
        heading,
        description,
        videoImageData,
        youtubeId,
        internalStoryUrl,
        manualStoryUrl,
      };
    })
  );

  const renderProps = {
    ...args,
    bgImageUrl,
    ctaInternalUrl,
    testimonialsArray,
  };

  return renderComponent({
    Component,
    componentName: "horizontal-video-testimonials",
    args: renderProps,
  });
};
