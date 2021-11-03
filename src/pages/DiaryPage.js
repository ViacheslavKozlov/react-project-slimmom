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
import { dailyRateLoading } from "../redux/dailyRate/dailyRateSelectors";
import { dairyProductsLoading } from "../redux/DiaryProducts/diaryProductSelector";

const DiaryPage = () => {
  const [date, setDate] = useState(new Date());
  const { isMobileDevice, isDescDevice } = useDeviceSizes();
  const isOpen = useSelector(isOpenAddFormModal);
  const isLoadingDaily = useSelector(dailyRateLoading);
  const isLoadingProducts = useSelector(dairyProductsLoading);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleFrom());
  };

  return isMobileDevice ? (
    <>
      {!isOpen ? (
        <>
          <DiaryDateСalendar
            date={date}
            setDate={setDate}
            isLoadingDaily={isLoadingDaily}
          />
          <DiaryProductsList
            date={date}
            isLoadingDaily={isLoadingDaily}
            isLoadingProducts={isLoadingProducts}
          />
          <ButtonAdd onClick={toggle} />
          <DailyStatistics
            date={date}
            isLoadingDaily={isLoadingDaily}
            isLoadingProducts={isLoadingProducts}
          />
        </>
      ) : (
        <>
          <DiaryAddProductForm
            date={date}
            isLoadingDaily={isLoadingDaily}
            isLoadingProducts={isLoadingProducts}
          />
        </>
      )}
    </>
  ) : (
    <>
      {isDescDevice ? (
        <div className={styles.mainContainer}>
          <div className={styles.formContainer}>
            <DiaryDateСalendar
              date={date}
              setDate={setDate}
              isLoadingDaily={isLoadingDaily}
              isLoadingProducts={isLoadingProducts}
            />
            <DiaryAddProductForm
              date={date}
              isLoadingDaily={isLoadingDaily}
              isLoadingProducts={isLoadingProducts}
            />
            <DiaryProductsList
              date={date}
              isLoadingDaily={isLoadingDaily}
              isLoadingProducts={isLoadingProducts}
            />
          </div>
          <div className={styles.statContainer}>
            <DailyStatistics
              date={date}
              isLoadingDaily={isLoadingDaily}
              isLoadingProducts={isLoadingProducts}
            />
          </div>
        </div>
      ) : (
        <>
          <DiaryDateСalendar
            date={date}
            setDate={setDate}
            isLoadingDaily={isLoadingDaily}
            isLoadingProducts={isLoadingProducts}
          />
          <DiaryAddProductForm
            date={date}
            isLoadingDaily={isLoadingDaily}
            isLoadingProducts={isLoadingProducts}
          />
          <DiaryProductsList
            date={date}
            isLoadingDaily={isLoadingDaily}
            isLoadingProducts={isLoadingProducts}
          />
          <DailyStatistics
            date={date}
            isLoadingDaily={isLoadingDaily}
            isLoadingProducts={isLoadingProducts}
          />
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
