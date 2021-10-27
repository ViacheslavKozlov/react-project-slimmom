import React from "react";
import sprite from "../../icons/sprite.svg";
import styles from "./Buttot.module.css";

const Button = ({ buttonName }) => {
  return (
    <button className={`${styles.btn} ${styles.btn_orange}`} type="button">
      {buttonName}
    </button>
  );
};

const ButtonAdd = () => {
  return (
    <button
      className={`${styles.btn_add} ${styles.btn_orange_add}`}
      type="button"
    >
      <svg width="20" height="20" fill="white">
        <use href={sprite + "#add"} />
      </svg>
    </button>
  );
};

export { ButtonAdd, Button };
