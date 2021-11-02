import React, { useState } from "react";
import DiaryAddProductForm from "../Components/diaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "../Components/diaryProductsList/DiaryProductsList";
import DiaryDateСalendar from "../Components/diaryDateСalendar/DiaryDateСalendar";
import DailyStatistics from "../Components/dailyStatistics/DailyStatistics";
import useDeviceSizes from "../hooks/useDeviceSizec";
import { useSelector } from "react-redux";
import { isOpenAddFormModal } from "../redux/isOpen/IsOpenSelector";
import { ButtonAdd } from "../Components/button/Button";
import { useDispatch } from "react-redux";
import { toggleFrom } from "../redux/isOpen/IsOpenAction";
import style from "./DiaryPage.module.css";

const DiaryPage = () => {
  const [date, setDate] = useState(new Date());
  const { isMobileDevice, isDescDevice } = useDeviceSizes();
  const isOpen = useSelector(isOpenAddFormModal);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleFrom());
  };

  return isMobileDevice ? (
    <>
      {!isOpen ? (
        <>
          <div className={style.mobileProductList}>
            <div>
              <DiaryDateСalendar date={date} setDate={setDate} />
            </div>
            <div>
              <DiaryProductsList date={date} />
            </div>
          </div>
          <div className={style.btnAddFormMobile}>
            <ButtonAdd onClick={toggle} />
          </div>
          <div className={style.statContainer}>
            <DailyStatistics date={date} />
          </div>
        </>
      ) : (
        <>
          <DiaryAddProductForm date={date} />
        </>
      )}
    </>
  ) : (
    <>
      {isDescDevice ? (
        <div className={style.mainContainer}>
          <div className={style.formContainer}>
            <DiaryDateСalendar date={date} setDate={setDate} />
            <DiaryAddProductForm date={date} toggle={toggle} />
            <DiaryProductsList date={date} />
          </div>
          <div className={style.statContainer}>
            <DailyStatistics date={date} />
          </div>
        </div>
      ) : (
        <>
          <DiaryDateСalendar date={date} setDate={setDate} />
          <DiaryAddProductForm date={date} />
          <DiaryProductsList date={date} />
          <DailyStatistics date={date} />
        </>
      )}
    </>
  );
};

export default DiaryPage;

//   <>
//     {!isOpen ? (
//       <>
//         <DiaryDateСalendar date={date} setDate={setDate} />
//         <DiaryProductsList date={date} />
//         <ButtonAdd onClick={toggle} />
//         <DailyStatistics date={date} />
//       </>
//     ) : (
//       <>
//         <DiaryAddProductForm date={date} />
//       </>
//     )}
//   </>
// ) : (
//   <>
//     <DiaryDateСalendar date={date} setDate={setDate} />
//     <DiaryAddProductForm date={date} />
//     <DiaryProductsList date={date} />
//     <DailyStatistics date={date} />
//   </>
