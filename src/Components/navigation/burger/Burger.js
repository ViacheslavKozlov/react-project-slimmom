import React from "react";
import styles from "./Burger.module.css";

import sprite from "../../../icons/sprite.svg";

const Burger = ({ toggleModal, showModal }) => {
  return (
    <>
      <button type="button" onClick={toggleModal} className={styles.burger}>
        {showModal ? (
          <svg width="20" height="20">
            <use href={sprite + "#close"} />
          </svg>
        ) : (
          <svg width="20" height="20">
            <use href={sprite + "#burger"} />
          </svg>
        )}
      </button>
     
    </>
  );
};

export default Burger;
