import React from "react";
import styles from './Burger.module.css'

import sprite from "../../../icons/sprite.svg";

const Burger = ({toggleModal}) => {
 

  return (
    <>
      <button type="button" onClick={toggleModal} className={styles.burger}>
        <svg width="20" height="20">
          <use href={sprite + "#burger"} />
        </svg>
      </button>
      {/* <button type="button" onClick={toggleModal}>
        закрыть модалку
      </button> */}
    </>
  );
};

export default Burger;
