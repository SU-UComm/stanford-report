import React, { useState } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { cnb } from "cnbuilder";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { SidebarHeading } from "../../packages/headings/Heading";
import { Carousel } from "../../packages/carousels/Carousel";
import Modal from "../../packages/modal/ModalWrapper";

// sub components
import ImageMosaic, { mosaic } from "../../packages/media/ImageMosaic";
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
  layoutConfiguration,
  displayConfiguration,
  contentConfiguration,
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

  // testing data
  const testImages = [
    {
      orientation: "h",
      alt: "",
      url: "https://picsum.photos/400/350",
      caption:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus erat, mattis porttitor sollicitudin quis, sollicitudin et lectus. Ut leo purus, iaculis ac",
    },
    { orientation: "h", alt: "", url: "https://picsum.photos/350/250" },
    {
      orientation: "h",
      alt: "",
      url: "https://picsum.photos/350/210",
      caption:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus erat, mattis porttitor sollicitudin quis, sollicitudin et lectus. Ut leo purus, iaculis ac",
    },
    { orientation: "v", alt: "", url: "https://picsum.photos/300/550" },
    { orientation: "h", alt: "", url: "https://picsum.photos/730/450" },
    {
      orientation: "v",
      alt: "",
      url: "https://picsum.photos/300/550",
      caption:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus erat, mattis porttitor sollicitudin quis, sollicitudin et lectus. Ut leo purus, iaculis ac",
    },
    { orientation: "v", alt: "", url: "https://picsum.photos/300/500" },
    { orientation: "v", alt: "", url: "https://picsum.photos/250/550" },
  ];

  // place testData in this param to debug
  const modalImages = carouselImages(data);
  // const modalImages = carouselImages(testImages);

  // generate the preview images
  // replace first param with testImages to debug
  const previewData = mosaic(
    data,
    // testImages,
    `
      {v:v}
      {h:h:h:h}
      {h:h:v}
      {v:h:h}
    `,
    `
      {h:h:h:v}
    `
  );

  const width = displayConfiguration.width === "Wide" ? "full" : "narrow";

  // caption & credit
  const captionCredit =
    contentConfiguration.caption && contentConfiguration.credit
      ? `${contentConfiguration.caption} | ${contentConfiguration.credit}`
      : contentConfiguration.caption || contentConfiguration.credit;

  // change {testImages} back to {data}
  const leftOverImages = data.length - previewData.length;
  // const leftOverImages = testImages.length - previewData.length;

  return (
    <>
      <div
        className={cnb(
          displayConfiguration.backgroundColor === "Grey"
            ? "su-bg-fog-light su-rs-pt-6 su-rs-pb-8 dark:su-bg-black/[0.5]"
            : ""
        )}
      >
        <Container width={width}>
          {layoutConfiguration.layout === "Title & Content" && (
            <div className="su-w-[100%] md:su-max-w-[60.7rem] lg:su-max-w-[63.6rem] su-mx-auto">
              <div
                className={cnb(
                  "su-text-center [&>*]:su-justify-center [&>*]:su-rs-mb-0 su-flex su-flex-col su-gap-[2.1rem]",
                  "md:su-gap-[2.5rem]"
                )}
              >
                <SidebarHeading
                  color="media"
                  icon="mediagallery"
                  title="Media gallery"
                />
                <h2
                  className={cnb(
                    "su-text-[3.5rem] su-leading-[4.179rem] su-font-bold",
                    "md:su-text-[4.0rem] md:su-leading-[4.776rem]",
                    "lg:su-text-[4.9rem] lg:su-leading-[6.37rem]"
                  )}
                >
                  {layoutConfiguration.title}
                </h2>
              </div>

              {layoutConfiguration.summary && (
                <XssSafeContent
                  className={cnb(
                    "su-wysiwyg-content su-rs-mt-0 su-text-[1.8rem] su-leading-[2.25rem] su-mt-[1.5rem]",
                    "md:su-text-[1.9rem] md:su-leading-[2.375rem] md:su-mt-[1.9rem]",
                    "lg:su-text-[2.1rem] lg:su-leading-[2.625rem]"
                  )}
                  elementType="div"
                  data-test="component-story-lead"
                  content={layoutConfiguration.summary}
                />
              )}
            </div>
          )}

          <button
            onClick={() => handleClick()}
            title="Open image gallery"
            aria-label="Open image gallery"
            type="button"
            className={cnb(
              "su-grid su-grid-cols-2 su-mx-auto su-grid-rows-2 su-max-w-[1312px] su-gap-x-[0.691rem] su-gap-y-[0.572rem] su-mt-[3.2rem] su-pb-[1rem]",
              "md:su-mt-[4.8rem] md:su-gap-x-[1.448rem] md:su-gap-y-[1.199rem]",
              "lg:su-gap-x-[2.589rem] lg:su-gap-y-[2.143rem]"
            )}
          >
            <ImageMosaic
              data={previewData}
              remainingImageCount={leftOverImages}
            />
          </button>

          <div className="su-text-[1.5rem] su-w-full su-text-center dark:su-text-white md:su-max-w-[482px] lg:su-max-w-[633px] su-mx-auto">
            <p className="su-m-0 su-text-left">{captionCredit}</p>
          </div>
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
            <Carousel slides={modalImages} variant="imagegallery" isDark />
          </div>
        </Modal>
      )}
    </>
  );
}
