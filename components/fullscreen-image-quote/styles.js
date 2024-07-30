/* eslint-disable security/detect-object-injection */
import { cnb } from "cnbuilder";

export const quoteVAligns = {
  top: "lg:su-items-start",
  center: "lg:su-items-center",
  bottom: "",
};

export const quoteHAligns = {
  left: "su-ml-0 su-mr-auto lg:su-pr-0",
  right: "su-mr-0 su-ml-auto lg:su-pl-0",
};

export const root = (removeTopSpacing) =>
  cnb(
    "su-aspect-w-1 su-aspect-h-2 sm:su-aspect-w-3 sm:su-aspect-h-4 lg:su-aspect-h-2 2xl:su-aspect-w-2 2xl:su-aspect-h-1 su-bg-black-true su-text-white",
    removeTopSpacing && "su--mt-50 md:su--mt-56 2xl:su--mt-58"
  );

export const contentWrapper = (quoteVAlign) =>
  cnb(
    "su-absolute su-z-20 su-h-full su-inset-0 su-flex su-items-end su-p-20",
    quoteVAligns[quoteVAlign]
  );

export const blockquote = (quoteHAlign) =>
  cnb(
    "su-py-17 sm:su-py-[6.8rem] xl:su-py-140 su-cc ",
    quoteHAligns[quoteHAlign]
  );
export const quote =
  "su-font-serif su-text-24 md:su-text-[3.3rem] lg:su-text-24 xl:su-text-[2.8rem] 2xl:su-text-[3.3rem] *:su-leading-display su-max-w-[55rem] xl:su-max-w-600 last:*:su-mb-0";

export const cta = "su-rs-mt-1";
export const ctaPreText =
  "su-inline su-text-[2.6rem] md:su-text-[2.9rem] su-font-bold su-leading-display su-mr-02em";
export const ctaLink =
  "su-group su-inline su-text-[2.6rem] md:su-text-[2.9rem] su-font-bold su-leading-display su-text-white dark:su-text-white su-underline su-decoration-dark-mode-red su-underline-offset-4 su-decoration-[3px] hocus:su-decoration-white hocus:su-text-white dark:hocus:su-text-white su-transition-all";
export const ctaIconWrapper = "su-whitespace-nowrap";
export const ctaIcon = (isRealExternalLink) =>
  cnb(
    "su-ml-04em su-text-19 md:su-text-22 su-transition-transform su-text-dark-mode-red group-hocus:su-translate-x-02em group-hocus:su-text-white",
    isRealExternalLink &&
      "su-rotate-45 group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em"
  );
export const ctaSubtext = "su-card-paragraph su-leading-display su-mt-9";

export const image = (hasMobileImage) =>
  cnb(
    "su-object-cover su-w-full su-h-full su-p-20",
    hasMobileImage && "su-hidden lg:su-block"
  );
export const mobileImage =
  "su-object-cover su-w-full su-h-full su-p-20 lg:su-hidden";
export const overlay = (quoteHAlign) =>
  cnb(
    "su-absolute su-inset-0 su-z-10 su-border-[2rem] su-border-black-true su-bg-gradient-to-t su-from-black-true",
    quoteHAlign === "left" ? "lg:su-bg-gradient-to-r" : "lg:su-bg-gradient-to-l"
  );
