import React, { useRef } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronRight from "../SVG-library/ChevronRight";

/**
 * Carousel package
 *
 * @param {string} slides The slides within the carousel
 * @returns {JSX.Element}
 * @constructor
 */
export function Carousel({
  slides,
  variant = "single",
  uniqueClass = "",
  isDark = false,
}) {
  const swiperRef = useRef();
  const hasSlides = slides.length > 0;

  const variants = new Map();
  variants.set("cards", {
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 40,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 72,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 102,
        centeredSlides: false,
      },
    },
    slidesPerView: 1.5,
    spaceBetween: 40,
    variantClassName: "component-slider-cards component-slider-peek",
    loop: true,
  });
  variants.set("media", {
    breakpoints: {
      0: {
        slidesPerView: 1.4,
        spaceBetween: 0,
        centeredSlides: true,
        initialSlide: 0,
      },
      768: {
        slidesPerView: 1.1,
        spaceBetween: 0,
        centeredSlides: true,
        initialSlide: 0,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        initialSlide: 0,
      },
    },
    slidesPerView: 1,
    variantClassName: "component-slider-single component-slider-peek",
    loop: true,
  });
  variants.set("basicstory", {
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
      },
    },
    slidesPerView: 1,
    variantClassName: "component-slider-single",
    loop: true,
  });
  variants.set("imagegallery", {
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
      },
    },
    slidesPerView: 1,
    variantClassName: "component-slider-imagegallery",
    loop: true,
  });
  variants.set("content", {
    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 1,
        centeredSlides: false,
      },
    },
    slidesPerView: 1,
    variantClassName: "component-slider-single",
    loop: true,
  });

  return hasSlides ? (
    <div className={`component-slider ${isDark ? "su-slider-dark" : ""}`}>
      <Swiper
        loopAdditionalSlides={0}
        slidesPerGroup={1}
        pagination={{
          el: `.component-slider-pagination-${uniqueClass}`,
          clickable: true,
          bulletElement: "button",
          renderBullet: (index, className) => {
            return `<button ${
              index === 0 ? 'aria-current="true"' : ""
            } class="${className}"><span class="sr-only">Slide ${
              index + 1
            }</span></button>`;
          },
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

          if (swiper.pagination.bullets.length > 0) {
            swiper.pagination.bullets.forEach((bullet) => {
              if (
                bullet.classList.contains("swiper-pagination-bullet-active")
              ) {
                bullet.setAttribute("aria-current", "true");
              } else {
                bullet.removeAttribute("aria-current");
              }
            });
          }
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        watchSlidesProgress
        loop={variants.get(variant).loop}
        breakpoints={variants.get(variant).breakpoints}
        modules={[Pagination]}
        className={["", variants.get(variant).variantClassName].join(" ")}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      {slides.length > 1 && (
        <div className="component-slider-controls su-flex su-mt-45 lg:su-mt-48 su-items-center su-content-center">
          <div
            aria-label="Slide Navigation"
            className={`component-slider-pagination component-slider-pagination-${uniqueClass} su-mr-full`}
          />
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
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
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
      )}
    </div>
  ) : (
    ""
  );
}
