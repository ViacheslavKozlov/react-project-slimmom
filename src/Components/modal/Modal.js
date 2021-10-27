import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "./Modal.module.css";

const Modal = ({ toggleModal, dailyRate }) => {
  const history = useHistory();
  useEffect(() => {
    // console.log(dailyRate.notAllowedProducts.length);
    window.addEventListener("keydown", onHandleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onHandleEscape);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });
  const onHandleEscape = (e) => e.code === "Escape" && toggleModal();

  const onOverlayClick = (e) => e.target === e.currentTarget && toggleModal();

  const onHandelBtnClick = () => {
    history.push("/register");
  };

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
                {dailyRate.dailyRate}
                <span>ккал</span>
              </p>
              <div className={style.modal_bottom}>
                <h3 className={style.modal_bottom_title}>
                  Продукты, которые вам не рекомендуется употреблять.
                </h3>
                {dailyRate.notAllowedProducts.length !== 0 ? (
                  <ol>
                    {dailyRate.notAllowedProducts.map((product) => (
                      <li key={product}>{product}</li>
                    ))}
                  </ol>
                ) : (
                  <p>Можно всё!</p>
                )}
              </div>
              {/* <Button buttonName="Начать худеть" /> */}
              <button
                className={style.formbtn}
                type="button"
                onClick={onHandelBtnClick}
              >
                Начать худеть
              </button>
            </>
          </div>
        </div>
      </>
    </>
  );
};

export default Modal;
