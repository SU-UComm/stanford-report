import { cnb } from "cnbuilder";

// Using clip-path:inset(0) because overflow:hidden doesn't work with a position:sticky element inside
export const root = "su-relative [clip-path:inset(0)] su-bg-black-true";
export const section = "su-relative";
export const heroWrapper = "su-relative";
export const bgWrapper = "su-sticky su-h-screen su-top-0 su-bg-black";
export const bgVideoWrapper =
  "su-relative su-w-full su-h-screen su-overflow-hidden";

/**
 * I tried using su-aspect-[16/9] instead of su-w-[177.77777778vh] su-h-[56.25vw],
 * but it didn't work on Firefox for large screens
 */
export const bgVideoIframe =
  "su-absolute su-w-[177.77777778vh] su-h-[56.25vw] su-min-w-full su-min-h-full su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2";
export const bgImageWrapper = "su-absolute su-top-0 su-size-full";
export const bgImage = "su-object-cover su-size-full";
export const overlay = (hasQuote, isBgVideo) =>
  cnb(
    "su-absolute su-block su-top-0",
    isBgVideo && !hasQuote
      ? "su-bg-gradient-to-t su-from-black-true su-w-full su-h-[max(100vh,100%)]"
      : "su-bg-black-true/20 su-size-full"
  );

export const contentWrapper = (
  hasIntro,
  hasQuote,
  isBgVideo,
  isIntroPulledLeft
) =>
  cnb(
    "su-cc su-relative su-z-20",
    !isBgVideo && "su-pt-300 md:su-pt-[40vw] lg:su-pt-[26vw] 2xl:su-pt-400",
    !isBgVideo &&
      !hasIntro &&
      !hasQuote &&
      "su-pb-300 md:su-pb-[40vw] lg:su-pb-[26vw] 2xl:su-pb-400",
    !isBgVideo && !isIntroPulledLeft && hasIntro && "su-rs-pb-2",
    isIntroPulledLeft && "su-rs-pb-6",
    isBgVideo && "su-mt-[-70vh]",
    isBgVideo && !hasQuote && !hasIntro && "su-rs-pb-6",
    !(isBgVideo && !hasQuote) && "su-bg-gradient-to-t su-from-black-true"
  );
export const title =
  "su-fluid-type-6 su-text-white su-text-shadow-lg su-text-center su-max-w-1000 su-mx-auto su-mb-0 su-text-balance";
export const introCentered = (hasYoutube, isBgVideo) =>
  cnb(
    "su-rs-mt-3 su-text-white su-text-center su-type-3 last:*:su-mb-0 *:su-leading-snug su-max-w-800 su-mx-auto",
    !hasYoutube && !isBgVideo ? "su-rs-pb-6" : "su-rs-pb-1"
  );

export const bigVideoButton = (hasIntro, isBgVideo) =>
  cnb(
    "su-block su-relative su-z-10 su-size-full hocus-visible:su-animate-pulse hocus-visible:su-scale-110 su-transition-all su-w-fit su-mx-auto ",
    isBgVideo ? "su-rs-mb-2" : "lg:su-mb-38",
    !hasIntro && "su-rs-mt-1"
  );
export const playYoutubeIcon =
  "su-text-[4.5rem] md:su-text-[7.5rem] su-text-white";
export const srOnly = "su-sr-only";
export const playPauseWrapper = (hasIntro) =>
  cnb("su-max-w-1200 su-mx-auto", !hasIntro && "su-mt-150 md:su-mt-200");
export const playPauseButton = (hasYoutube) =>
  cnb(
    "su-group su-flex su-gap-10 su-items-end su-text-16 su-leading-display su-mr-0 su-ml-auto su-text-white su-w-fit hocus-visible:su-underline su-underline-offset-2 su-py-14 ",
    hasYoutube && "su--mt-24"
  );
export const playPauseIcon =
  "su-text-20 su-text-white group-hocus-visible:su-animate-pulse group-hocus-visible:su-scale-110 su-transition-transform";
export const introPulledLeft =
  "su-type-3 lg:su-max-w-800 xl:su-max-w-1000 2xl:su-max-w-1100 su-ml-0 *:su-leading-snug su-text-white su-font-serif su-border-l su-border-color su-border-black-30 su-pl-32 md:su-pl-48 lg:su-pl-100 2xl:su-pl-170 su-py-38 last:*:su-mb-0 su-rs-mt-10";

export const quote = (hasIntro, isBgVideo) =>
  cnb(
    "su-hidden lg:su-block su-max-w-1200 su-mx-auto",
    !hasIntro && !isBgVideo && "su-rs-mt-8"
  );
export const quoteMobile = (hasIntro, isBgVideo) =>
  cnb(
    "su-cc lg:su-hidden su-bg-black-true",
    !hasIntro && !isBgVideo && "su-pt-80"
  );
