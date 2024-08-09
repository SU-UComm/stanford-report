import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { FAIcon } from "../icons/FAIcon";

export default function TeaserCard({ credit, data }) {
  const {
    title,
    liveUrl,
    authorName,
    description,
    source,
    isCustomDescription,
  } = data;

  return (
    <article aria-label={title} className="su-group su-relative">
      {source !== null && source !== undefined && source !== "null" && (
        <div className="su-text-18 su-leading-snug su-font-semibold md:su-pb-13">
          {source}
        </div>
      )}

      <h3 className="su-font-bold su-leading-display su-text-24 su-m-0 md:su-pb-9">
        <XssSafeContent
          className="su-stretched-link su-font-bold su-leading-display su-text-24 su-m-0 md:su-pb-9"
          content={title}
          href={liveUrl}
          elementType="a"
        />
        <FAIcon
          icon="arrow-up-right"
          set="regular"
          // Add a width to prevent getting a flash of huge icon before the CSS fully loads
          width={12}
          className="su-inline-block su-ml-5 su-text-18 su-text-digital-red dark:su-text-dark-mode-red group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em su-transition-transform"
        />
      </h3>

      <div className="su-flex su-flex-col su-text-16 su-text-black-70">
        <div>
          {isCustomDescription ? <strong>Featured scholar:</strong> : ""}
          {credit}
        </div>

        <div>
          {description && (
            <XssSafeContent
              data-test="pullquote-description"
              content={`<p>${
                authorName
                  ? `<span class="su-font-semibold">${authorName}</span>,`
                  : ""
              } ${description.replace(/<p>|<\/p>/g, "")}</p>`}
              elementType="div"
              className="*:su-my-0 *:dark:su-text-white *:su-font-sans *:su-w-full *:su-font-normal *:su-leading-snug"
            />
          )}
        </div>
      </div>
    </article>
  );
}
