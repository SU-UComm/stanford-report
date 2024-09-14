import { cnb } from "cnbuilder";

export const root = "su-relative";
export const section = "su-relative";
export const heroWrapper = "su-relative";
export const bgWrapper = "su-sticky su-h-screen su-top-0 su-bg-black";
export const bgVideoWrapper =
  "su-relative su-w-full su-h-screen su-overflow-hidden";
export const bgVideoIframe =
  "su-absolute su-aspect-[16/9] su-min-w-full su-min-h-full su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2";
export const bgImageWrapper = "su-absolute su-top-0 su-size-full";
export const bgImage = "su-object-cover su-size-full";
export const overlay = (hasQuote) =>
  cnb(
    "su-absolute su-block su-size-full su-top-0 su-bg-black-true/20 su-z-10",
    hasQuote ? "" : ""
  );

export const contentWrapper = (isBgVideo, isIntroPulledLeft) =>
  cnb(
    "su-cc su-relative su-z-20",
    !isBgVideo && "su-pt-300 md:su-pt-[40vw] lg:su-pt-[26vw] 2xl:su-pt-400",
    !isBgVideo && !isIntroPulledLeft && "su-rs-pb-2",
    isIntroPulledLeft && "su-rs-pb-6",
    isBgVideo && "su-mt-[-70vh] su-bg-gradient-to-t su-from-black-true"
  );
export const title = (isBgVideo) =>
  cnb(
    "su-fluid-type-6 su-text-white su-text-shadow-lg su-text-center su-max-w-1000 su-mx-auto su-mb-0 su-text-balance",
    !isBgVideo && ""
  );
export const introCentered = (hasYoutube, isBgVideo) =>
  cnb(
    "su-rs-mt-3 su-text-white su-text-center su-type-3 su-mb-0 su-leading-snug su-max-w-800 su-mx-auto",
    !hasYoutube && !isBgVideo ? "su-rs-pb-6" : "su-rs-pb-1"
  );

export const bgVideoButton = (bkgType) =>
  cnb(
    "su-block su-relative su-z-10 su-size-full hocus:su-animate-pulse hocus:su-scale-110 su-transition-all su-w-fit su-mx-auto ",
    bkgType === "Video" ? "su-rs-mb-2" : "lg:su-mb-38"
  );
export const playYoutubeIcon =
  "su-text-[4.5rem] md:su-text-[7.5rem] su-text-white";
