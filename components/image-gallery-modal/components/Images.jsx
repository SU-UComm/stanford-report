import React from "react";

export default function Images({ data, remainingImageCount }) {
  const images = [];

  let hasVertical = false;

  data.forEach(({ url, alt, orientation }, i) => {
    const horizontalPositions = [
      "su-horizontal-image-first",
      "su-horizontal-image-second",
      "su-horizontal-image-third",
      "su-horizontal-image-fourth",
    ];

    if (i === 0 && orientation === "v") hasVertical = true;

    let articleClass =
      orientation === "v" && i === 0
        ? "su-vertical-image-first"
        : "su-vertical-image-second";

    articleClass =
      orientation === "h"
        ? `${
            horizontalPositions[hasVertical ? images.length + 1 : i]
          } su-aspect-[50/33]`
        : articleClass;

    if (remainingImageCount) {
      //
    }

    images.push(
      <article className={`${articleClass} su-relative`}>
        <img
          src={url}
          alt={alt}
          className="su-w-full su-h-full su-object-cover"
        />

        {remainingImageCount && i === data.length - 1 ? (
          <div className="su-bg-black/[0.33] su-w-full su-h-full su-absolute su-top-0 su-left-0 su-flex su-justify-center su-items-center su-z-[1]">
            <span
              className={[
                "su-text-[white] su-relative su-z-[2] su-font-bold su-text-[4.8rem] su-leading-[5.76rem]",
                "md:su-text-[10rem] md:su-leading-[11.941rem]",
              ].join(" ")}
            >
              +{remainingImageCount}
            </span>
          </div>
        ) : (
          ""
        )}
      </article>
    );
  });

  return images;
}
