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

export const root =
  "su-aspect-w-1 su-aspect-h-2 sm:su-aspect-w-3 sm:su-aspect-h-4 lg:su-aspect-w-3 lg:su-aspect-h-2 2xl:su-aspect-w-2 2xl:su-aspect-h-1 su-bg-white dark:su-bg-black-true su-text-white";

export const contentWrapper = (quoteVAlign) =>
  cnb(
    "su-absolute su-z-20 su-h-full su-inset-0 su-flex su-items-end su-p-20",
    quoteVAligns[quoteVAlign]
  );

export const blockquote = (quoteHAlign) =>
  cnb("su-rs-py-8 su-cc ", quoteHAligns[quoteHAlign]);

export const overlay = (quoteHAlign) =>
  cnb(
    "su-absolute su-inset-0 su-z-10 su-border-[2rem] su-border-white dark:su-border-black-true su-bg-gradient-to-t su-from-black-true",
    quoteHAlign === "left" ? "lg:su-bg-gradient-to-r" : "lg:su-bg-gradient-to-l"
  );
