import React, { useState } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { SidebarHeading } from "../../packages/headings/Heading";
import { Carousel } from "../../packages/carousels/Carousel";
import Modal from "../../packages/modal/ModalWrapper";

// sub components
import Images from "./components/Images";
import carouselImages from "./components/CarouselImages";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function Base({
  contentConfiguration,
  displayConfiguration,
  data,
}) {
  // state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // events
  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const testImages = [
    {
      orientation: "v",
      alt: "",
      url: "https://picsum.photos/800/950",
      caption:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus erat, mattis porttitor sollicitudin quis, sollicitudin et lectus. Ut leo purus, iaculis ac",
    },
    { orientation: "h", alt: "", url: "https://picsum.photos/850/350" },
    {
      orientation: "h",
      alt: "",
      url: "https://picsum.photos/800/350",
      caption:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus erat, mattis porttitor sollicitudin quis, sollicitudin et lectus. Ut leo purus, iaculis ac",
    },
    {
      orientation: "h",
      alt: "",
      url: "https://picsum.photos/700/450",
      caption:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus erat, mattis porttitor sollicitudin quis, sollicitudin et lectus. Ut leo purus, iaculis ac",
    },
    { orientation: "h", alt: "", url: "https://picsum.photos/730/450" },
    { orientation: "v", alt: "", url: "https://picsum.photos/900/1050" },
  ];

  const modalImages = carouselImages(testImages);
  const previewImages = [];

  // generate the preview images
  const previewData = mosaic(
    testImages,
    `
    {v:v}
    {h:h:h:h}
    {h:h:v}
    {v:h:h}
  `
  );

  // change {testImages} back to {data}
  const leftOverImages = testImages.length - previewData.length;

  return (
    <>
      <div
        className={[
          displayConfiguration.backgroundColor === "grey"
            ? "su-bg-fog-light su-rs-pt-6 su-rs-pb-8"
            : "",
        ].join(" ")}
      >
        <Container width="wide">
          <div className="su-w-[100%] md:su-max-w-[60.7rem] lg:su-max-w-[63.6rem] su-mx-auto">
            <div
              className={[
                "su-text-center [&>*]:su-justify-center [&>*]:su-rs-mb-0 su-flex su-flex-col su-gap-[2.1rem]",
                "md:su-gap-[2.5rem]",
              ]}
            >
              {displayConfiguration.displayIconHeading && (
                <SidebarHeading
                  color="media"
                  icon="mediagallery"
                  title="Media gallery"
                />
              )}
              {contentConfiguration.title && (
                <h2
                  className={[
                    "su-text-[3.5rem] su-leading-[4.179rem] su-font-bold",
                    "md:su-text-[4.0rem] md:su-leading-[4.776rem]",
                    "lg:su-text-[4.9rem] lg:su-leading-[6.37rem]",
                  ].join(" ")}
                >
                  {contentConfiguration.title}
                </h2>
              )}
            </div>
            {contentConfiguration.summary && (
              <XssSafeContent
                className={[
                  "su-wysiwyg-content su-rs-mt-0 su-text-[1.8rem] su-leading-[2.25rem] su-mt-[1.5rem]",
                  "md:su-text-[1.9rem] md:su-leading-[2.375rem] md:su-mt-[1.9rem]",
                  "lg:su-text-[2.1rem] lg:su-leading-[2.625rem]",
                ].join(" ")}
                elementType="div"
                data-test="component-story-lead"
                content={contentConfiguration.summary}
              />
            )}
          </div>

          <button
            onClick={() => handleClick()}
            title="Open image gallery"
            aria-label="Open image gallery"
            type="button"
            className={[
              "su-grid su-grid-cols-2 su-grid-rows-2 su-max-w-[1312px] su-gap-x-[0.691rem] su-gap-y-[0.572rem] su-mt-[3.2rem]",
              "md:su-mt-[4.8rem] md:su-gap-x-[1.448rem] md:su-gap-y-[1.199rem]",
              "lg:su-gap-x-[2.589rem] lg:su-gap-y-[2.143rem]",
            ].join(" ")}
          >
            <Images data={previewData} remainingImageCount={leftOverImages} />
          </button>
        </Container>
      </div>

      {isModalOpen && (
        <Modal
          titleId="image-gallery-modal"
          title="Image Gallery"
          onClose={handleCloseModal}
        >
          {/* use {data} instead of {testImages} here */}
          <div>
            <Carousel slides={modalImages} variant="media" />
          </div>
        </Modal>
      )}
    </>
  );
}

/**
 * creates an image mosaic based on
 * specified pattern variations
 * 
 * @param {object} images 
 * the image data (determines the orientation)
 
 * @param {string} pattern 
 * @returns 
 */
function mosaic(images, pattern) {
  const patterns = pattern.replace(/\n+|\t+| {2,}/gm, "");
  const preview = [];

  let complete = false;
  let patternFormation = "{";

  images.forEach((card) => {
    if (complete) return;

    const patRegEnd = new RegExp(
      `${patternFormation}${card.orientation}}`,
      "gm"
    );
    const patRegCurrent = new RegExp(
      `${patternFormation}${card.orientation}:`,
      "gm"
    );

    if (patterns.match(patRegEnd)) {
      preview.push(card);
      complete = true;
      return;
    }

    if (!preview.length) {
      preview.push(card);
      patternFormation += `${card.orientation}:`;

      return;
    }

    if (patterns.match(patRegCurrent)) {
      preview.push(card);
      patternFormation += `${card.orientation}:`;
    }
  });

  return preview;
}
