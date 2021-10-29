import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getDailyRateByDateOperation } from "../../redux/dailyRate/dailyRateOperations";
import { dailyRateSelector } from "../../redux/dailyRate/dailyRateSelectors";

import style from "./DailyStatistics.module.css";

const date = {
  date: "2021-10-28",
};

const DailyStatistics = () => {
  const location = useLocation();
  const dailyRate = useSelector(dailyRateSelector);
  const dispatch = useDispatch();
  console.log(dailyRate);

  useEffect(() => {
    // if (location.pathname === "/calculator") {
    //   return;
    // }
    dispatch(getDailyRateByDateOperation(date));
  }, [location.pathname, dispatch]);

  return (
    <div className={style.statistics_wrapper}>
      {/* <h3 className={style.statistics_title}>Сводка за {date}</h3> */}
      <div className={style.statistics_box}>
        <div className={style.statistic_box}>
          <p className={style.statistic_text}>Осталось</p>
          <p className={style.statistic_text}>
            {dailyRate.kcalLeft ? `${dailyRate.kcalLeft} ` : "000 "}
            ккал
          </p>
        </div>
        <div className={style.statistic_box}>
          <p className={style.statistic_text}>Употреблено</p>
          <p className={style.statistic_text}>
            {dailyRate.kcalConsumed ? `${dailyRate.kcalConsumed} ` : "000 "}
            ккал
          </p>
        </div>
        <div className={style.statistic_box}>
          <p className={style.statistic_text}>Дневная норма</p>
          <p className={style.statistic_text}>
            {dailyRate.dailyRate ? `${dailyRate.dailyRate} ` : "000 "}
            ккал
          </p>
        </div>
        <div className={style.statistic_box}>
          <p className={style.statistic_text}>% от нормы</p>
          <p className={style.statistic_text}>
            {dailyRate.percentsOfDailyRate
              ? Math.round(`${dailyRate.percentsOfDailyRate} `)
              : "0 "}
            %
          </p>
        </div>
      </div>
      <h3 className={style.statistics_title}>Нерекомендуемые продукты</h3>
      <div className={style.statistics_box}>
        {dailyRate.notAllowedProducts ? (
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
    </div>
  );
};

export default DailyStatistics;
