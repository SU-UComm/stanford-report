import { cnb } from "cnbuilder";

export const root = "su-relative";
export const bgWrapper = "su-sticky su-h-screen su-top-0 su-bg-black";
export const bgVideoWrapper =
  "su-relative su-w-screen su-h-screen su-overflow-hidden";
export const bgVideoIframe =
  "su-absolute su-aspect-[16/9] su-min-w-full su-min-h-full su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2";

export const contentWrapper = (bkgType) =>
  cnb(
    "su-cc su-relative su-z-20 su-bg-gradient-to-t su-from-black-true",
    bkgType === "Image" &&
      "su-pt-300 md:su-pt-[40vw] lg:su-pt-[30vw] 2xl:su-pt-400 su-rs-pb-2",
    bkgType === "Video" && "su-mt-[-70vh]"
  );
export const title = (isBgVideo, isIntroPulledLeft) =>
  cnb(
    "su-fluid-type-6 su-text-white su-text-shadow-lg su-text-center su-max-w-1000 su-mx-auto su-mb-0 su-text-balance",
    isIntroPulledLeft && "su-mb-[16vw]",
    !isBgVideo && ""
  );

export const bgVideoButton = (bkgType) =>
  cnb(
    "su-block su-relative su-z-10 su-size-full hocus:su-animate-pulse hocus:su-scale-110 su-transition-all su-w-fit su-mx-auto ",
    bkgType === "Video" ? "su-rs-mb-2" : "lg:su-mb-38"
  );

export const introCentered = (hasYoutube, isBgVideo) =>
  cnb(
    "su-rs-mt-3 su-text-white su-text-center su-type-3 su-mb-0 su-leading-snug su-max-w-800 su-mx-auto",
    !hasYoutube && !isBgVideo ? "su-rs-pb-6" : "su-rs-pb-1"
  );
