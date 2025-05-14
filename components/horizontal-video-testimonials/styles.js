import { cnb } from "cnbuilder";

export const root = (alwaysDark) =>
  cnb(
    "su-relative su-overflow-hidden su-bg-black dark:su-bg-black-true",
    alwaysDark && "su-bg-black-true"
  );
export const wrapper = "su-relative su-z-30";
export const sectionHeading = "2xl:su-px-[17rem] su-rs-mb-5";
export const cardGrid =
  "su-relative su-grid su-gap-20 su-z-30 su-list-unstyled *:su-mb-0";
export const cardGridItem = (bgImageUrl) =>
  cnb(!bgImageUrl && "su-border-2 su-border-black");

export const bgImage =
  "su-absolute su-size-full su-inset-0 su-object-cover su-inset-0";
export const overlay =
  "su-absolute su-size-full su-inset-0 su-z-10 su-bg-gradient-to-b su-from-black-true/75 su-to-black-true/60";
