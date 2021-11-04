import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import style from "./DailyCaloriesForm.module.css";
import Modal from "../modal/Modal";
import { dailyRateSelector } from "../../redux/dailyRate/dailyRateSelectors";
import { getDailyRateOperation } from "../../redux/dailyRate/dailyRateOperations";
import { Button } from "../button/Button";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { userInfo } from "../../redux/user/userSelectors";

const initialState = {
  weight: "",
  height: "",
  age: "",
  desiredWeight: "",
  bloodType: 1,
};

const DailyCaloriesForm = () => {
  const [userData, setUserData] = useState(initialState);

  const [modal, setModalOpen] = useState(false);

  const dailyRate = useSelector(dailyRateSelector);
  const userId = useSelector(userInfo).id;

  const isAuth = useSelector(getIsAuth);

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAuth && userId) {
      dispatch(getDailyRateOperation(userData, userId));
    } else {
      dispatch(getDailyRateOperation(userData));
    }
    if (location.pathname === "/") {
      setUserData({ ...initialState });
    }

    if (location.pathname === "/calculator") {
      history.push("/diary");
      return;
    }
    window.scrollBy(0, 0);
    toggleModal();
  };
  const onHandleBlur = (e) => {
    const input = e.target;
    if (input.value !== "") {
      input.classList.add(style.not_empty);
    }
    if (input.value === "") {
      input.classList.remove(style.not_empty);
    }
  };
  const onHandleChange = (e) => {
    const { value, name } = e.target;

    if (value === "") {
      setUserData((prev) => ({ ...prev, [name]: value }));
      return;
    }
    setUserData((prev) => ({ ...prev, [name]: Number(value) }));
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
              <div className={style.input_box}>
                <input
                  className={style.input_item}
                  id="userHeight"
                  type="number"
                  required
                  min="100"
                  max="250"
                  pattern="^[ 0-9]+$"
                  onChange={onHandleChange}
                  onBlur={onHandleBlur}
                  name="height"
                  value={height}
                />
                <label>Рост *</label>
              </div>
              <div className={style.input_box}>
                <input
                  className={style.input_item}
                  id="userAge"
                  type="number"
                  required
                  min="18"
                  max="100"
                  onChange={onHandleChange}
                  onBlur={onHandleBlur}
                  name="age"
                  value={age}
                />
                <label>Возраст *</label>
              </div>
              <div className={style.input_box}>
                <input
                  className={style.input_item}
                  id="userWeight"
                  type="number"
                  required
                  min="20"
                  max="500"
                  onChange={onHandleChange}
                  onBlur={onHandleBlur}
                  name="weight"
                  value={weight}
                />
                <label>Текущий вес *</label>
              </div>
            </div>
            <div className={style.inputs_box_second}>
              <div className={style.input_box}>
                <input
                  className={style.input_item}
                  id="userDesiredWeight"
                  type="number"
                  required
                  min="20"
                  max="500"
                  onChange={onHandleChange}
                  onBlur={onHandleBlur}
                  name="desiredWeight"
                  value={desiredWeight}
                />
                <label>Желаемый вес *</label>
              </div>
              <p>Группа крови *</p>
              <div className={style.input_radio_wrapper}>
                <div className={style.form_radio}>
                  <input
                    className={style.form_radio_input}
                    id="radio-1"
                    type="radio"
                    checked={bloodType === 1}
                    name="bloodType"
                    value="1"
                    onChange={onHandleChange}
                  />
                  <label htmlFor="radio-1" className={style.form_radio_label}>
                    1
                  </label>
                </div>
                <div className={style.form_radio}>
                  <input
                    className={style.form_radio_input}
                    id="radio-2"
                    type="radio"
                    checked={bloodType === 2}
                    name="bloodType"
                    value="2"
                    onChange={onHandleChange}
                  />
                  <label htmlFor="radio-2" className={style.form_radio_label}>
                    2
                  </label>
                </div>
                <div className={style.form_radio}>
                  <input
                    className={style.form_radio_input}
                    id="radio-3"
                    type="radio"
                    checked={bloodType === 3}
                    name="bloodType"
                    value="3"
                    onChange={onHandleChange}
                  />
                  <label htmlFor="radio-3" className={style.form_radio_label}>
                    3
                  </label>
                </div>
                <div className={style.form_radio}>
                  <input
                    className={style.form_radio_input}
                    id="radio-4"
                    type="radio"
                    checked={bloodType === 4}
                    name="bloodType"
                    value="4"
                    onChange={onHandleChange}
                  />
                  <label htmlFor="radio-4" className={style.form_radio_label}>
                    4
                  </label>
                </div>
              </div>
            </div>
            <Button buttonName="Похудеть" type={"submit"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default DailyCaloriesForm;
