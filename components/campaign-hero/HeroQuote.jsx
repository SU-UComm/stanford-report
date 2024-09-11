import React from "react";
import { cnb } from "cnbuilder";

export default function HeroQuote({
  image,
  quote,
  name,
  quoteLink,
  extra,
  className,
}) {
  return (
    <div className={cnb("su-w-full su-relative", className)}>
      <div className="su-rs-pt-2 su-rs-pb-5 su-rs-px-3 su-text-white su-flex su-items-center su-flex-col su-gap-44 lg:su-flex-row-reverse su-border-t su-border-black-30 su-relative su-z-[2]">
        {image && (
          <div className="su-rounded-full su-size-160 md:su-size-200 2xl:su-size-300 su-shrink-0 su-overflow-hidden">
            <img
              src={image}
              alt="quote placeholder for local dev"
              className="su-object-cover su-size-full"
            />
          </div>
        )}
        <blockquote cite="" className="su-type-1">
          <p className="su-font-serif su-leading-display">“{quote}”</p>
          <footer className="su-font-bold">
            {quoteLink ? (
              <a
                href={quoteLink}
                className="su-font-bold su-text-white su-decoration-dark-mode-red su-underline-offset-[3px] su-decoration-[0.12em] hocus:su-no-underline hocus-visible:su-text-dark-mode-red"
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
