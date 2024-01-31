import React, { useState } from "react";

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

  return (
    <Container>
      <div>
        <SidebarHeading
          color="media"
          icon="eventscalendar"
          title={contentConfiguration.title}
        />
        <p>Image gallery will go in the button</p>
        <button onClick={() => handleClick()} type="button">
          Open Modal
        </button>
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
    </Container>
  );
}
