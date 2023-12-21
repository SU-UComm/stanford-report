import React, { useEffect, useRef, ReactNode } from "react";
import { useDialog } from "@react-aria/dialog";
import { useOverlay, usePreventScroll, useModal } from "@react-aria/overlays";
import { useFocusManager } from "@react-aria/focus";

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
function ModalContent({ titleId, title, onClose, children }) {
  // Base settings for @react-aria hooks
  const settings = {
    "aria-describedby": titleId,
    title,
    onClose,
    isDismissable: true,
    isOpen: true,
  };

  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  const focusManager = useFocusManager();

  /*
        Provides the behavior for overlays such as dialogs, popovers, and menus. Hides the overlay when
        the user interacts outside it, when the Escape key is pressed, or optionally, on blur.
    */
  const { overlayProps, underlayProps } = useOverlay(settings, modalContentRef);

  /*
        Prevents scrolling on the document body on mount, and restores it on unmount.
        Also ensures that content does not shift due to the scrollbars disappearing.
    */
  usePreventScroll();

  /*
        Hides content outside the current <OverlayContainer> from screen readers on mount and restores it on unmount.
    */
  const { modalProps } = useModal();

  /*
        Provides the behavior and accessibility implementation for a dialog component.
    */
  const { dialogProps, titleProps } = useDialog(settings, modalContentRef);

  /*
        Remove the hidden attribute as soon as its drawn to the DOM so it transitions open like
        the base ES6 modal in the framework.
    */
  useEffect(() => {
    modalRef.current?.removeAttribute("hidden");
    focusManager.focusFirst(); // FocusScope autofocus property wont work due to being hidden so focus first now
  }, [modalRef]);

  return (
    <div ref={modalRef} {...underlayProps} hidden>
      <div
        ref={modalContentRef}
        {...overlayProps}
        {...dialogProps}
        {...modalProps}
        aria-modal="true"
        tabIndex={-1}
      >
        {titleId ? "" : <h2 {...titleProps}>{title}</h2>}
        {children}
      </div>
    </div>
  );
}

export default ModalContent;
