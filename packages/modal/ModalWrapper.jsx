import React from "react";
import { OverlayContainer } from "@react-aria/overlays";
import { FocusScope } from "@react-aria/focus";
// import styles from "./modal.module.scss";
import Modal from "./ModalContent";
import { CloseButton } from "./CloseButton";

/**
 * React implementation of the Plug and Play Modal, uses the Adobe @react-aria package
 * to handle the modal / dialog related accessability concerns such as focus movement, focus traps,
 * ESC to close ect.
 *
 * Needs to be wrapped within a <OverlayProvider> to aria hide the application when the modal opens.
 *
 * Comments on @react-aria hooks come directly from their documentation.
 */
/**
 * A function to generate the Modal.
 * @param props The props object.
 * @param props.titleId A string to define the modal in the aria-describedby field.
 * @param props.title The heading to add to the Modal.
 * @param props.onClose A callback function to run on the onClose event.
 * @param props.children A reactNode to add and render out.
 * @param props.className A custom className to add into the markup.
 * @param props.mobileFullScreen A control to make the modal go full width on mobile devices.
 * @returns {JSX.Element}
 */
export function ModalWrapper({
  titleId,
  title,
  onClose,
  children,
  mobileFullScreen,
}) {
  return (
    <OverlayContainer className="su-modal">
      <FocusScope contain restoreFocus autoFocus>
        <CloseButton clickHandler={onClose} />
        <Modal
          titleId={titleId}
          title={title}
          onClose={onClose}
          class="su-modal-content-wrap"
        >
          {children}
        </Modal>
      </FocusScope>
    </OverlayContainer>
  );
}

export default ModalWrapper;
