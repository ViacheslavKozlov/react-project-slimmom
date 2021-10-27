import React, { useEffect, useState } from "react";
import style from "./Modal.module.css";

const Modal = ({ toggleModal }) => {
  useEffect(() => {
    window.addEventListener("keydown", onHandleEscape);
    return () => {
      window.removeEventListener("keydown", onHandleEscape);
    };
  });
  const onHandleEscape = (e) => e.code === "Escape" && toggleModal();

  const onOverlayClick = (e) => e.target === e.currentTarget && toggleModal();

  return (
    <>
      <>
        <div className={style.backdrop} onClick={onOverlayClick}>
          <div className={style.modal_container}>
            <>
              <h2 className={style.modal_title}>
                Ваша рекомендуемая суточная норма калорий составляет
              </h2>
              <p className={style.modal_calories_value}>
                2800<span>ккал</span>
              </p>
              <div className={style.modal_bottom}>
                <h3 className={style.modal_bottom_title}>
                  Продукты, которые вам не рекомендуется употреблять.
                </h3>
                <ul>
                  <li></li>
                </ul>
              </div>
            </>
          </div>
        </div>
      </>
    </>
  );
};

export default Modal;
