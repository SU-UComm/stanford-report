import React from "react";
import hash from "object-hash";
import { register } from "swiper/element/bundle";

/**
 * Carousel package
 *
 * @param {string} slides The slides within the carousel
 * @returns {JSX.Element}
 * @constructor
 */
export function Carousel({ slides, breakpoint = "single" }) {
  const hasSlides = slides.length > 0;

  const breakPoints = new Map();
  breakPoints.set("cards", {
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
    slidesPerView: 1,
  });
  breakPoints.set("single", {
    768: {
      slidesPerView: 3,
    },
  });

  const widthClasses = new Map();
  widthClasses.set("narrow", "su-container-narrow");
  widthClasses.set("large", "su-container-large");
  widthClasses.set("wide", "su-container-wide");
  widthClasses.set("full", "su-container-full");

  register();

  return hasSlides ? (
    <div
      className={[
        "su-mx-auto su-component-container",
        // widthClasses.get(width.toLowerCase()),
      ].join(" ")}
    >
      <swiper-container
        slides-per-view={Number(breakPoints.get(breakpoint).slidesPerView)}
        breakpoints={breakPoints.get(breakpoint).breakpoints}
      >
        {slides.map((item) => {
          return <swiper-slide key={hash.MD5(item.props)}>{item}</swiper-slide>;
        })}
      </swiper-container>
    </div>
  ) : (
    ""
  );
}
