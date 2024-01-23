import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

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
      0: {
        slidesPerView: 1.5,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 72,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 102,
      },
    },
    slidesPerView: 1.5,
    spaceBetween: 40,
    variantClassName: "component-slider-cards",
  });
  breakPoints.set("single", {
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
    slidesPerView: 1,
    variantClassName: "component-slider-single",
  });

  return hasSlides ? (
    <Swiper
      centeredSlides
      pagination={{
        clickable: true,
      }}
      navigation
      loop
      breakpoints={breakPoints.get(breakpoint).breakpoints}
      modules={[Pagination]}
      className={[breakPoints.get(breakpoint).variantClassName].join(" ")}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  ) : (
    ""
  );
}
