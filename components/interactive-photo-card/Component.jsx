import React, { useRef, useState } from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import ArrowsRotate from "../../packages/SVG-library/ArrowsRotate";
import Plus from "../../packages/SVG-library/Plus";

/**
 * Interactive Photo Card component
 *
 * @param {string} title The title of the text card
 * @param {string} eyebrow The eyebrow/superheading of the text card
 * @param {string} content The content on the flip side of the text card
 * @param {string} imageUrl The URL of the image to display
 * @param {string} imageAlignment The image card can be on the left or right on desktop
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function InteractivePhotoCard({
  title,
  eyebrow,
  content,
  imageUrl,
  imageAlignment,
  alwaysDark,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardInnerRef = useRef(null);

  // Toggle the card's isFlipped state
  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  // Onclick function to rotate cardInnerRef around the Y axis
  const flipCard = (degrees) => {
    if (cardInnerRef.current) {
      cardInnerRef.current.style.transform = `rotateY(${degrees}deg)`;
      toggleCard();
    }
  };

  return (
    <div className="su-cc">
      <article className="su-relative su-grid xl:su-grid-cols-2 su-gap-20 [perspective:100rem] su-transition-transform">
        <div
          ref={cardInnerRef}
          className={cnb(
            "su-flex su-relative [transform-style:preserve-3d] su-duration-1000",
            imageAlignment === "left" && "xl:su-order-2"
          )}
        >
          {/* Front of the content card */}
          <div
            className={cnb(
              "su-relative su-backface-hidden su-rounded-[8px] su-min-w-full",
              alwaysDark
                ? "su-bg-black-true su-border-2 su-border-black"
                : "su-bg-white su-shadow-lg"
            )}
            aria-hidden={isFlipped}
          >
            <div className="su-flex su-flex-col su-h-full su-rs-px-5 su-rs-pt-6 su-rs-pb-4">
              {eyebrow && (
                <div className="su-type-1 su-text-black-60 su-font-semibold su-rs-mb-1">
                  {eyebrow}
                </div>
              )}
              <h2
                className={cnb(
                  "su-grow su-type-4 su-font-bold su-font-sans su-rs-mb-0",
                  alwaysDark
                    ? "su-text-white"
                    : "su-text-black dark:su-text-black"
                )}
              >
                {title}
              </h2>
              <button
                type="button"
                aria-hidden={isFlipped}
                tabIndex={isFlipped ? -1 : undefined}
                onClick={() => flipCard(180)}
                aria-label="See additional information"
                className={cnb(
                  "su-group su-block su-ml-auto su-mr-0 su-bg-black su-text-white su-rounded-full su-p-10 su-transition-all su-opacity-100 aria-hidden:su-opacity-0",
                  alwaysDark
                    ? "su-bg-white su-text-black-true hocus:su-bg-dark-mode-red"
                    : "su-bg-black su-text-white hocus:su-bg-digital-red"
                )}
              >
                <Plus
                  className={cnb(
                    "su-size-30 md:su-size-50 su-fill-none group-hover:su-scale-110 group-focus-within:su-scale-110 su-transition-transform",
                    alwaysDark ? "[&_path]:su-fill-black-true" : "su-fill-none"
                  )}
                />
              </button>
            </div>
          </div>
          {/* Back of the content card */}
          <div
            className={cnb(
              "su-relative su-flex su-flex-col su-h-full su-min-w-full su-rounded-[8px] su-rs-px-5 su-rs-pt-6 su-rs-pb-4 su-bg-digital-red-dark su-text-white [transform:rotateY(180deg)_translate(100%,0)] su-backface-hidden su-transition-transform",
              !alwaysDark && "su-shadow-lg"
            )}
            aria-hidden={!isFlipped}
          >
            <XssSafeContent
              data-test="interactive-photo-card-content"
              className="su-big-paragraph su-grow"
              content={content}
            />
            <button
              type="button"
              aria-hidden={!isFlipped}
              tabIndex={isFlipped ? undefined : -1}
              onClick={() => flipCard(0)}
              aria-label="Dismiss content"
              className={cnb(
                "su-group su-block su-ml-auto su-mr-0 su-border-3 su-border-white su-rounded-full su-text-white su-p-7 lg:su-p-14 su-transition-colors",
                alwaysDark
                  ? "focus:su-bg-black-true hocus:su-bg-black-true"
                  : "focus:su-bg-black hocus:su-bg-black"
              )}
            >
              <ArrowsRotate className="su-size-30 lg:su-size-36 su-fill-none aria-hidden:invisible group-hocus:su-rotate-45 su-transition-transform" />
            </button>
          </div>
        </div>
        {/* Image card */}
        <div
          className={cnb(
            "su-rounded-[8px] su-overflow-hidden su-shadow-lg",
            imageAlignment === "left" && "xl:su-order-first"
          )}
        >
          <img src={imageUrl} alt="" className="su-object-cover su-size-full" />
        </div>
      </article>
    </div>
  );
}
