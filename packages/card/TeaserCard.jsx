import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";

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
    <article>
      <a
        href={liveUrl}
        className="su-no-underline su-flex su-flex-col su-gap-11 md:su-gap-0"
      >
        <div className="su-text-18 su-leading-snug su-font-semibold md:su-pb-13">
          {source}
        </div>

        <h2 className="su-font-bold su-leading-display su-text-24 su-m-0 md:su-pb-9">
          {title}
        </h2>

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
      </a>
    </article>
  );
}
