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
        internalStoryUrl,
        manualStoryUrl,
      } = testimonial;

      let internalLink = null;
      if (internalStoryUrl) {
        internalLink = await basicAssetUri(ctx, internalStoryUrl);
      }
      const internalStoryLink = internalLink?.url;

      let videoImageData = null;
      if (videoImage) {
        videoImageData = await basicAssetUri(ctx, videoImage);
      }

      return {
        heading,
        description,
        videoImageData,
        youtubeId,
        internalStoryLink,
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
