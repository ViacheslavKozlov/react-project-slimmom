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
import styles from "./DiaryPage.module.css";
import Wrapper from "../Components/wrapper/Wrapper";

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
          <Wrapper>
            <div className={styles.mobileDiaryDateСalendar}>
              <DiaryDateСalendar date={date} setDate={setDate} />
            </div>
            <div className={styles.mobileProductList}>
              <DiaryProductsList date={date} />
            </div>

            <div className={styles.btnAddFormMobile}>
              <ButtonAdd onClick={toggle} />
            </div>
            <div className={styles.statContainer}>
              <DailyStatistics date={date} />
            </div>
          </Wrapper>
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
        <Wrapper>
          <div className={styles.mainContainer}>
            <div className={styles.formContainer}>
              <DiaryDateСalendar date={date} setDate={setDate} />
              <DiaryAddProductForm date={date} toggle={toggle} />
              <DiaryProductsList date={date} />
            </div>
            <div className={styles.statContainer}>
              <DailyStatistics date={date} />
            </div>
          </div>
        </Wrapper>
      ) : (
        <>
          <Wrapper>
            <DiaryDateСalendar date={date} setDate={setDate} />
            <DiaryAddProductForm date={date} />
            <DiaryProductsList date={date} />
            <DailyStatistics date={date} />
          </Wrapper>
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
