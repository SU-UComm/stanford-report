import React from "react";

export default function carouselImages(data) {
  const images = [];

  data.forEach(({ url, alt, caption }) => {
    images.push(
      <article
        className={`c-carousel-image-slide ${
          caption ? "has-caption" : "has-no-caption"
        }`}
      >
        <div className="c-carousel-image">
          <img src={url} alt={alt} />
        </div>

        {caption ? (
          <div className="c-carousel-caption">
            <p>{caption}</p>
          </div>
        ) : (
          ""
        )}
      </article>
    );
  });

  return images;
}
