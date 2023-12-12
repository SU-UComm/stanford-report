import React from "react";

// import specific templates for the component
import { LinkedHeading } from "../../packages/headings/Heading";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function Acknowledgement({ title, content }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="su-mb-[36px] su-w-[100px] su-h-[5px] su-bg-gradient-to-r su-from-digital-red su-to-plum dark:su-from-palo-verde dark:su-to-olive"
      />
      <h2 className="sr-only">{title}</h2>
      <p className="su-basefont-19 su-pb-[36px] su-text-[16px] md:su-text-[19px] lg:su-text-[19px] su-leading-[24px] md:su-leading-[28.5px] lg:su-leading-[28.5px]">
        {content}
      </p>
    </>
  );
}
