import React, { useEffect } from "react";
import styles from "./NavModal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");

const NavModal = ({ children, toggleModal }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  return createPortal(
    <div className={styles.ModalBackdrop}>
      <div className={styles.ModalContent}>{children}</div>
    </div>,
    modalRoot
  );
};

export default NavModal;
