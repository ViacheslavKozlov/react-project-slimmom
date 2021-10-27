import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import style from "./DailyCaloriesForm.module.css";
import Modal from "../modal/Modal";
import { dailyRateSelector } from "../../redux/dailyRate/dailyRateSelectors";
import { getDailyRateOperation } from "../../redux/dailyRate/dailyRateOperations";
import { Button } from "../button/Button";

const initialState = {
  weight: JSON.parse(localStorage.getItem("weight")) || "",
  height: JSON.parse(localStorage.getItem("height")) || "",
  age: JSON.parse(localStorage.getItem("age")) || "",
  desiredWeight: JSON.parse(localStorage.getItem("desiredWeight")) || "",
  // bloodType: 1,
  bloodType: JSON.parse(localStorage.getItem("bloodType")) || 1,
};

const DailyCaloriesForm = () => {
  const [userData, setUserData] = useState(initialState);

  const [modal, setModalOpen] = useState(false);

  const dailyRate = useSelector(dailyRateSelector);

  const dispatch = useDispatch();

  const location = useLocation();

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDailyRateOperation(userData));

    localStorage.removeItem("weight");
    localStorage.removeItem("height");
    localStorage.removeItem("age");
    localStorage.removeItem("desiredWeight");
    localStorage.removeItem("bloodType");

    setUserData({ ...initialState });
    if (location.pathname === "/calculator") {
      return;
    }
    toggleModal();
  };

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    // console.log(Number(""));
    if (value === "") {
      setUserData((prev) => ({ ...prev, [name]: value }));
      localStorage.setItem([name], JSON.stringify(value));
      return;
    }
    setUserData((prev) => ({ ...prev, [name]: Number(value) }));
    // if (type === "radio") {
    //   return;
    // }
    localStorage.setItem([name], JSON.stringify(Number(value)));
  };

  const { weight, height, age, desiredWeight, bloodType } = userData;
  return (
    <>
      {modal && <Modal toggleModal={toggleModal} dailyRate={dailyRate} />}
      <div className={`${style.form_wrapper} container`}>
        <h1 className={style.form_title}>
          {location.pathname === "/calculator"
            ? "Узнай свою суточную норму калорий"
            : "Просчитай свою суточную норму калорий прямо сейчас"}
        </h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.inputs_wrapper}>
            <div className={style.inputs_box_first}>
              {/* <label>Рост</label> */}
              <input
                className={style.inputItem}
                id="userHeight"
                type="number"
                required
                autoComplete="off"
                min="100"
                max="250"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                onChange={onHandleChange}
                placeholder="Рост *"
                name="height"
                value={height}
              />

              <input
                className={style.inputItem}
                id="userAge"
                type="number"
                required
                autoComplete="off"
                min="18"
                max="100"
                onChange={onHandleChange}
                placeholder="Возраст *"
                name="age"
                value={age}
              />

              <input
                className={style.inputItem}
                id="userWeight"
                type="number"
                autoComplete="off"
                required
                min="20"
                max="500"
                onChange={onHandleChange}
                placeholder="Текущий вес *"
                name="weight"
                value={weight}
              />
            </div>
            <div className={style.inputs_box_second}>
              <input
                className={style.inputItem}
                id="userDesiredWeight"
                type="number"
                required
                autoComplete="off"
                min="20"
                max="500"
                onChange={onHandleChange}
                placeholder="Желаемый вес *"
                name="desiredWeight"
                value={desiredWeight}
              />

              <p>Группа крови *</p>
              <div className={style.inputRadioWrapper}>
                <label>
                  <input
                    type="radio"
                    className={style.radioInput}
                    checked={bloodType === 1}
                    name="bloodType"
                    value="1"
                    onChange={onHandleChange}
                  />
                  1
                </label>
                <label>
                  <input
                    type="radio"
                    className={style.radioInput}
                    checked={bloodType === 2}
                    name="bloodType"
                    value="2"
                    onChange={onHandleChange}
                  />
                  2
                </label>
                <label>
                  <input
                    type="radio"
                    className={style.radioInput}
                    checked={bloodType === 3}
                    name="bloodType"
                    value="3"
                    onChange={onHandleChange}
                  />
                  3
                </label>
                <label>
                  <input
                    type="radio"
                    className={style.radioInput}
                    checked={bloodType === 4}
                    name="bloodType"
                    value="4"
                    onChange={onHandleChange}
                  />
                  4
                </label>
              </div>
            </div>
            {/* <Button buttonName="Похудеть" /> */}
          </div>
          <button className={style.formbtn} type="submit">
            Похудеть
          </button>
        </form>
      </div>
    </>
  );
};

export default DailyCaloriesForm;
