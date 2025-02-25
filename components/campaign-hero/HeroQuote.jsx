import React from "react";
import { cnb } from "cnbuilder";

/**
 * Quote component that is optional in the Campaign Hero
 *
 * @param {string} imageSrc
 * The source URL of the image
 *
 * @param {string} imageAlt
 * The alt text of the image
 *
 * @param {string} quote
 * The quote text
 *
 * @param {string} name
 * The name of the quotee
 *
 * @param {string} quoteLink
 * The link for the quotee name
 *
 * @param {string} extra
 * Extra text after the name, e.g., title
 *
 * @param {string} className
 * Additional classes to be passed to the outermost container of the component
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function HeroQuote({
  imageSrc,
  imageAlt,
  quote,
  name,
  quoteLink,
  extra,
  className,
}) {
  return (
    <div className={cnb("su-w-full su-relative su-z-20", className)}>
      <div className="su-rs-pt-2 su-rs-pb-6 su-rs-px-5 su-text-white su-flex su-items-center su-flex-col su-gap-44 lg:su-flex-row-reverse su-border-t su-border-black-30 su-relative">
        {imageSrc && (
          <div className="su-rounded-full su-size-160 md:su-size-200 2xl:su-size-300 su-shrink-0 su-overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt || ""}
              className="su-object-cover su-size-full"
            />
          </div>
        )}
        <blockquote className="su-type-1">
          <p className="su-font-serif su-leading-display">“{quote}”</p>
          <footer className="su-font-bold su-leading-snug">
            {quoteLink ? (
              <a
                href={quoteLink}
                className="su-font-bold su-text-white dark:su-text-white su-underline su-decoration-dark-mode-red su-underline-offset-4 su-decoration-[3px] hocus-visible:su-decoration-white hocus-visible:su-text-white dark:hocus-visible:su-text-white su-transition-all"
              >
                {name}
              </a>
            ) : (
              <span>{name}</span>
            )}
            {extra && `, ${extra}`}
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
