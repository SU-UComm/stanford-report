import { cnb } from "cnbuilder";

export const root = "su-relative su-overflow-hidden su-bg-black su-break-words";
export const wrapper = "su-relative su-z-30";
export const headingWrapper = "su-cc";
export const sectionHeading = "2xl:su-px-[17rem] su-rs-mb-5";

export const cardGridWrapper = (isSingleVideo) =>
  cnb("su-cc", isSingleVideo ? "su-block" : "su-hidden lg:su-block");
export const cardGrid = (isSingleVideo) =>
  cnb(
    "su-relative su-mx-auto su-flex  su-justify-center su-gap-20 xl:su-gap-40 su-z-30",
    isSingleVideo
      ? "*:su-basis-4/5 *:su-max-w-[45rem] *:lg:su-basis-1/3"
      : "*:lg:su-basis-1/3"
  );
export const carouselWrapper = "lg:su-hidden";
export const bgImage =
  "su-absolute su-size-full su-inset-0 su-object-cover su-inset-0";
export const overlay =
  "su-absolute su-size-full su-inset-0 su-z-10 su-bg-black-true/75";
