import React, { useState } from "react";
import { Formik } from "formik";
import { getDailyRateOperation } from "../../redux/dailyRate/dailyRateOperations";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import axios from "axios";
import style from "./DailyCaloriesForm.module.css";
import Modal from "../modal/Modal";

// {
//   "weight": 100,
//   "height": 170,
//   "age": 30,
//   "desiredWeight": 60,
//   "bloodType": 1
// }

const initialState = {
  weight: JSON.parse(localStorage.getItem("weight")) || "",
  height: JSON.parse(localStorage.getItem("height")) || "",
  age: JSON.parse(localStorage.getItem("age")) || "",
  desiredWeight: JSON.parse(localStorage.getItem("desiredWeight")) || "",
  bloodType: JSON.parse(localStorage.getItem("bloodType")) || "1",
};

const DailyCaloriesForm = () => {
  const [userData, setUserData] = useState(initialState);

  const [modal, setModalOpen] = useState(false);

  const location = useLocation();

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(getDailyRateOperation(userData));
    try {
      const response = await axios.post(
        `https://slimmom-backend.goit.global/daily-rate/`,
        userData
      );
      // dispatch(getDailyRateSucces({ ...response.data }));
      console.log(response.data);
    } catch (error) {
      // dispatch(getDailyRateError(error.message));
      console.log(error);
    }
    toggleModal();
    // dispatch(getDailyRateOperation(userData));
  };

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    localStorage.setItem([name], JSON.stringify(value));
  };

  const { weight, height, age, desiredWeight, bloodType } = userData;
  return (
    <>
      {modal && <Modal toggleModal={toggleModal} />}
      <div className={style.form_wrapper}>
        <h1 className={style.form_title}>
          {location.pathname === "/calculator"
            ? "Узнай свою суточную норму калорий"
            : "Просчитай свою суточную норму калорий прямо сейчас"}
        </h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.inputs_wrapper}>
            <div className={style.inputs_box_first}>
              <input
                className={style.inputItem}
                id="userHeight"
                type="number"
                required
                min="100"
                max="250"
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
                    checked={bloodType === "1"}
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
                    checked={bloodType === "2"}
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
                    checked={bloodType === "3"}
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
                    checked={bloodType === "4"}
                    name="bloodType"
                    value="4"
                    onChange={onHandleChange}
                  />
                  4
                </label>
              </div>
            </div>
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
