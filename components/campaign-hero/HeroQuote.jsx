import React from "react";
import { cnb } from "cnbuilder";

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
      <div className="su-rs-pt-2 su-rs-pb-6 su-rs-px-5 su-text-white su-flex su-items-center su-flex-col su-gap-44 lg:su-flex-row-reverse su-border-t su-border-black-30 su-relative su-z-[2]">
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
