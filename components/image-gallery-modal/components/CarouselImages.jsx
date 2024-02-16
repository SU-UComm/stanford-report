import React from "react";

export default function carouselImages(data) {
  const images = [];

  data.forEach(({ url, alt, caption }) => {
    images.push(
      <article className="su-flex">
        <div>
          <img src={url} alt={alt} />
        </div>

        {caption ? <p>{caption}</p> : ""}
      </article>
    );
  });

  return images;
}
