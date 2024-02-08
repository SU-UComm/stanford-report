import React, { useRef, useState } from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";
import Flip from "../../packages/SVG-library/Flip";
import Plus from "../../packages/SVG-library/Plus";

/**
 * Interactive Photo Card component
 *
 * @param {string} title The title of the text card
 * @param {string} eyebrow The eyebrow/superheading of the text card
 * @returns {JSX.Element}
 * @constructor
 */

export default function InteractivePhotoCard({
  title,
  eyebrow,
  content,
  imageUrl,
  imageAlignment,
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
      <article
        className={cnb(
          "su-relative su-flex su-gap-20 [perspective:100rem] su-transition-transform",
          imageAlignment === "right"
            ? "su-flex-col xl:su-flex-row"
            : "su-flex-col-reverse xl:su-flex-row-reverse"
        )}
      >
        <div
          ref={cardInnerRef}
          className="su-flex su-relative su-overflow-hidden su-basis-1/2 su-shadow-lg su-rounded-[8px] [transform-style:preserve-3d] su-transform-gpu su-duration-1000"
        >
          {/* Front of the content card */}
          <div
            className="su-group/front su-relative su-size-full su-bg-white"
            aria-hidden={isFlipped}
          >
            <div className="su-rs-px-5 su-rs-pt-6 su-rs-pb-4">
              {eyebrow && (
                <div className="su-type-1 su-text-black-60 su-font-semibold su-rs-mb-1">
                  {eyebrow}
                </div>
              )}
              <h3 className="su-type-4 su-font-bold su-font-sans su-type su-rs-mb-0">
                {title}
              </h3>
              <button
                type="button"
                onClick={() => flipCard(180)}
                aria-label={`Read more about ${title}`}
                className="su-block su-ml-auto su-mr-0 su-bg-black su-text-white su-rounded-full su-p-10 su-stretched-link group-aria-hidden/front:su-invisible"
              >
                <Plus className="su-size-50 su-fill-none" />
              </button>
            </div>
          </div>
          {/* Back of the content card */}
          <div
            className="su-group/back su-rs-px-5 su-rs-pt-6 su-rs-pb-4 su-bg-digital-red-dark su-text-white su-absolute su-size-full su-top-0 su-left-0 [transform:rotateY(180deg)] aria-hidden:opacity-0 aria-hidden:su-backface-hidden su-transition-transform"
            aria-hidden={!isFlipped}
          >
            <XssSafeContent
              data-test="interactive-photo-card-content"
              className="su-big-paragraph"
              content={content}
            />
            <button
              type="button"
              onClick={() => flipCard(0)}
              aria-label="Dismiss content"
              className="su-block su-ml-auto su-mr-0 su-border-3 su-border-white su-rounded-full su-text-white su-p-19 su-stretched-link"
            >
              <Flip className="su-size-36 su-fill-none group-aria-hidden/back:invisible" />
            </button>
          </div>
        </div>
        {/* Image card */}
        <div className="su-rounded-[8px] su-overflow-hidden su-basis-1/2 su-shadow-lg">
          <img src={imageUrl} alt="" className="su-object-cover su-size-full" />
        </div>
      </article>
    </div>
  );
}
