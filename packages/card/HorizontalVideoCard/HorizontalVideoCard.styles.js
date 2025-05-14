import { cnb } from "cnbuilder";

export const root = (alwaysDark) =>
  cnb(
    "su-rounded-[8px] su-relative su-flex su-flex-col lg:su-flex-row su-gap-30 md:su-gap-38 2xl:su-gap-72 su-items-start lg:su-items-center su-p-34 md:su-p-61 lg:su-p-38 2xl:su-pl-76",
    alwaysDark
      ? "su-bg-black-true dark:su-bg-black-true su-text-white dark:su-text-white"
      : "su-bg-white dark:su-bg-black-true su-text-black dark:su-text-white"
  );

export const contentWrapper =
  "su-relative su-w-full lg:su-basis-[50%] xl:su-basis-[40%] 2xl:su-basis-[30%]";

export const heading = (alwaysDark) =>
  cnb(
    "su-type-3 su-leading-display su-rs-mb-0",
    alwaysDark && "su-text-white dark:su-text-white"
  );
export const link = (alwaysDark) =>
  cnb(
    "su-group su-stretched-link su-no-underline hocus:su-underline dark:su-text-white dark:hocus:su-text-dark-mode-red focus:su-outline-none",
    alwaysDark
      ? "su-text-white hocus:su-text-dark-mode-red"
      : "su-text-black hocus:su-text-digital-red"
  );
export const linkIconWrapper = "su-whitespace-nowrap";
export const linkIcon = (alwaysDark) =>
  cnb(
    "fa-fw su-inline-block su-align-middle su-text-[0.8em] su-ml-5 dark:su-text-dark-mode-red group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em su-transition-transform",
    alwaysDark ? "su-text-dark-mode-red" : "su-text-digital-red"
  );

export const description =
  "su-max-w-prose md:su-max-w-[45ch] lg:su-max-w-none su-card-paragraph *:last:su-mb-0 *:su-leading-display xl:*:su-leading-snug";

export const imageWrapper =
  "su-w-full lg:su-basis-[50%] xl:su-basis-[60%] 2xl:su-basis-[70%] su-relative focus-within:su-ring-4";
export const videoIcon = "group-hocus:su-scale-110 su-transition-transform";
