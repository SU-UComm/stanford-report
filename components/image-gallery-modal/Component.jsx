import React, { useState } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { SidebarHeading } from "../../packages/headings/Heading";
import { Carousel } from "../../packages/carousels/Carousel";
import Modal from "../../packages/modal/ModalWrapper";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function Base({ contentConfiguration, displayConfiguration }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { images } = contentConfiguration;
  const firstFourImages = images.slice(0, 3);
  const verticalImages = [];
  const horizontalImages = [];

  firstFourImages.forEach((img) => {
    // console.log(img);
    // cards.push(
    //   <Card cardType="media" data={card} displayDescription={false} />
    // );
  });

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
          <div className="su-w-[83.333%] lg:su-max-w-[636px] su-mx-auto">
            <div className="su-text-center [&>*]:su-justify-center [&>*]:su-rs-mb-0">
              {displayConfiguration.displayIconHeading && (
                <SidebarHeading
                  color="media"
                  icon="mediagallery"
                  title="Media gallery"
                />
              )}
              {contentConfiguration.title && (
                <h2 className="md:su-px-[1em]">{contentConfiguration.title}</h2>
              )}
            </div>
            {contentConfiguration.summary && (
              <XssSafeContent
                className={["su-wysiwyg-content su-rs-mt-0"].join(" ")}
                elementType="div"
                data-test="component-story-lead"
                content={contentConfiguration.summary}
              />
            )}
          </div>
          <button onClick={() => handleClick()} type="button">
            Open Modal
          </button>
        </Container>
      </div>
      {isModalOpen && (
        <Modal
          titleId="image-gallery-modal"
          title="Image Gallery"
          onClose={handleCloseModal}
        >
          Carousel to go here
          {/* <Carousel variant="content" slides={slides} /> */}
        </Modal>
      )}
    </>
  );
}
