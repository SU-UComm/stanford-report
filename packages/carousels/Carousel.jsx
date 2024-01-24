import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronRight from "../SVG-library/ChevronRight";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";

/**
 * Carousel package
 *
 * @param {string} slides The slides within the carousel
 * @returns {JSX.Element}
 * @constructor
 */
export function Carousel({ slides, variant = "single" }) {
  const swiperRef = useRef();
  const hasSlides = slides.length > 0;

  const variants = new Map();
  variants.set("cards", {
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
    variantClassName: "component-slider-cards component-slider-peek",
  });
  variants.set("media", {
    breakpoints: {
      768: {
        slidesPerView: 1.5,
      },
    },
    slidesPerView: 1,
    variantClassName: "component-slider-single component-slider-peek",
  });
  variants.set("single", {
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
    slidesPerView: 1,
    variantClassName: "component-slider-single",
  });

  return hasSlides ? (
    <div className="component-slider">
      <Swiper
        centeredSlides
        pagination={{
          el: ".component-slider-pagination",
          clickable: true,
          bulletElement: "button",
        }}
        onSlideChange={(swiper) => {
          // Prevent tab focus on out of view slides
          swiper.slides.forEach((slide) => {
            if (slide.classList.contains("swiper-slide-visible")) {
              slide.removeAttribute("aria-hidden");
              slide.removeAttribute("tabindex");
              slide.removeAttribute("inert");
            } else {
              slide.setAttribute("aria-hidden", "true");
              slide.setAttribute("tabindex", "0");
              slide.setAttribute("inert", "true");
            }
          });
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        watchSlidesProgress
        loop
        breakpoints={variants.get(variant).breakpoints}
        modules={[Pagination]}
        className={[variants.get(variant).variantClassName].join(" ")}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <div className="component-slider-controls su-flex su-mt-[45px] lg:su-mt-[48px] su-items-center su-content-center">
        <div className="component-slider-pagination su-mr-full" />
        <button
          className="component-slider-btn component-slider-prev"
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <span className="sr-only">Previous</span>
          <span
            aria-hidden="true"
            className="su-absolute su-top-[50%] su-left-[50%] su-translate-y-[-50%] su-translate-x-[-50%] su-inline-block"
          >
            <ChevronRight />
          </span>
        </button>
        <button
          className="component-slider-btn component-slider-next"
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <span className="sr-only">Next</span>
          <span
            aria-hidden="true"
            className="su-absolute su-top-[50%] su-left-[50%] su-translate-y-[-50%] su-translate-x-[-50%] su-inline-block"
          >
            <ChevronRight />
          </span>
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
