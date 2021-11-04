import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";
import style from "./Modal.module.css";
import Loader from "react-loader-spinner";
import { dailyRateLoading } from "../../redux/dailyRate/dailyRateSelectors";
import { useSelector } from "react-redux";
import useDeviceSizes from "../../hooks/useDeviceSizec";
import sprite from "../../icons/sprite.svg";

const Modal = ({ toggleModal, dailyRate }) => {
  const history = useHistory();
  const isLoading = useSelector(dailyRateLoading);
  const { isMobileDevice } = useDeviceSizes();

  useEffect(() => {
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
            {isLoading ? (
              <Loader
                type="BallTriangle"
                color={`var(--active-color)`}
                height={90}
                width={90}
              />
            ) : (
              <>
                {!isMobileDevice && (
                  <>
                    <button
                      className={style.modal_closeBtn}
                      type="button"
                      data-action="close-modal"
                      onClick={toggleModal}
                    ></button>

                    <button
                      className={style.modal_closeBtn}
                      type="button"
                      data-action="close-modal"
                      onClick={toggleModal}
                    >
                      <svg width="12" height="12">
                        <use href={sprite + "#close"}></use>
                      </svg>
                    </button>
                  </>
                )}
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
                  {isLoading ? (
                    <Loader
                      type="Oval"
                      color="#fc842d"
                      height={40}
                      width={40}
                    />
                  ) : (
                    <>
                      {dailyRate.notAllowedProducts?.length !== 0 ? (
                        <ol>
                          {dailyRate.notAllowedProducts?.map(
                            (product, index) => (
                              <li key={product}>
                                {`${index + 1}. ${product}`}
                              </li>
                            )
                          )}
                        </ol>
                      ) : (
                        <p>Можно всё!</p>
                      )}
                    </>
                  )}
                </div>

                <Button
                  buttonName="Начать худеть"
                  type={"button"}
                  onClick={onHandelBtnClick}
                >
                  Начать худеть
                </Button>
              </>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default Modal;
