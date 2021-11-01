import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getDailyRateByDateOperation } from "../../redux/dailyRate/dailyRateOperations";
import {
  dailyRateLoading,
  dailyRateSelector,
} from "../../redux/dailyRate/dailyRateSelectors";
import moment from "moment";

import style from "./DailyStatistics.module.css";
import { dairyProductsSelector } from "../../redux/DiaryProducts/diaryProductSelector";

// const date = {
//   date: "2021-10-31",
// };

const DailyStatistics = () => {
  const location = useLocation();
  const dailyRate = useSelector(dailyRateSelector);
  const diaryProduct = useSelector(dairyProductsSelector);
  const isLoading = useSelector(dailyRateLoading);
  const dispatch = useDispatch();
  // const currentDate = moment(date).format("YYYY-MM-DD");
  // console.log(date);
  const todayDate = moment(new Date()).format("YYYY-MM-DD");

  useEffect(() => {
    if (diaryProduct.date > todayDate) {
      return;
    }
    if (diaryProduct.date < todayDate) {
      // alert("В этот день Вы не вели дневник");
      dispatch(getDailyRateByDateOperation({ date: diaryProduct.date }));
      return;
    }
    if (dailyRate.dailyRate) {
      // dispatch(getDailyRateByDateOperation(date));
      dispatch(getDailyRateByDateOperation({ date: todayDate }));
    }
  }, [
    // location.pathname,
    dispatch,
    dailyRate.dailyRate,
    diaryProduct.date,
    todayDate,
  ]);

  return (
    <div className={style.statistics_wrapper}>
      <>
        {isLoading ? (
          <Loader type="Oval" color="#fc842d" height={90} width={90} />
        ) : (
          <>
            <h3 className={style.statistics_title}>
              Сводка за {moment(diaryProduct.date).format("DD.MM.YYYY")}
            </h3>
            <div className={style.statistics_box}>
              <div className={style.statistic_box}>
                <p className={style.statistic_text}>Осталось</p>
                <p className={style.statistic_text}>
                  {dailyRate.kcalLeft
                    ? `${Math.round(dailyRate.kcalLeft)} `
                    : "000 "}
                  ккал
                </p>
              </div>
              <div className={style.statistic_box}>
                <p className={style.statistic_text}>Употреблено</p>
                <p className={style.statistic_text}>
                  {dailyRate.kcalConsumed
                    ? `${Math.round(dailyRate.kcalConsumed)} `
                    : "000 "}
                  ккал
                </p>
              </div>
              <div className={style.statistic_box}>
                <p className={style.statistic_text}>Дневная норма</p>
                <p className={style.statistic_text}>
                  {dailyRate.dailyRate
                    ? `${Math.round(dailyRate.dailyRate)} `
                    : "000 "}
                  ккал
                </p>
              </div>
              <div className={style.statistic_box}>
                <p className={style.statistic_text}>% от нормы</p>
                <p className={style.statistic_text}>
                  {dailyRate.percentsOfDailyRate
                    ? `${Math.round(dailyRate.percentsOfDailyRate)} `
                    : "0 "}
                  %
                </p>
              </div>
            </div>
            <h3 className={style.statistics_title}>Нерекомендуемые продукты</h3>
            <div className={style.statistics_box}>
              {dailyRate.notAllowedProducts?.length !== 0 ? (
                <ul className={style.statistic_list}>
                  {dailyRate.notAllowedProducts?.map((product) => (
                    <li className={style.statistic_text} key={product}>
                      {product}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Здесь будет отображаться Ваш рацион</p>
              )}
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default DailyStatistics;
