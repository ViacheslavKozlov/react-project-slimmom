import React from "react";
import { useSelector } from "react-redux";
import { dailyRateSelector } from "../../redux/dailyRate/dailyRateSelectors";

import style from "./DailyStatistics.module.css";

const DailyStatistics = () => {
  const dailyRate = useSelector(dailyRateSelector);
  return (
    <div className={style.statistics_wrapper}>
      <h3 className={style.statistics_title}>
        Сводка за {dailyRate.summaries ? dailyRate.summaries["0"].date : "hz"}
      </h3>
      <div className={style.statistics_box}>
        <div className={style.statistic_box}>
          <p className={style.statistic_text}>Осталось</p>
          <p className={style.statistic_text}>
            {dailyRate.summaries
              ? `${dailyRate.summaries["0"].kcalConsumed} `
              : "000 "}{" "}
            ккал
          </p>
        </div>
        <div className={style.statistic_box}>
          <p className={style.statistic_text}>Употреблено</p>
          <p className={style.statistic_text}>
            {dailyRate.summaries
              ? `${dailyRate.summaries["0"].kcalLeft} `
              : "000 "}{" "}
            ккал
          </p>
        </div>
        <div className={style.statistic_box}>
          <p className={style.statistic_text}>Дневная норма</p>
          <p className={style.statistic_text}>
            {dailyRate.summaries
              ? `${dailyRate.summaries["0"].dailyRate} `
              : "000 "}{" "}
            ккал
          </p>
        </div>
        <div className={style.statistic_box}>
          <p className={style.statistic_text}>% от нормы</p>
          <p className={style.statistic_text}>
            {dailyRate.summaries
              ? Math.round(`${dailyRate.summaries["0"].percentsOfDailyRate} `)
              : "000 "}
            %
          </p>
        </div>
      </div>
      <h3 className={style.statistics_title}>Нерекомендуемые продукты</h3>
      <div className={style.statistics_box}>
        {dailyRate.notAllowedProducts.length !== 0 ? (
          <ul className={style.statistic_list}>
            {dailyRate.notAllowedProducts.map((product) => (
              <li className={style.statistic_text} key={product}>
                {product}
              </li>
            ))}
          </ul>
        ) : (
          <p>Можно всё!</p>
        )}
        {/* <ul className={style.statistic_list}>
          <div className={style.statistic_box}>
            <li className={style.statistic_text}>1</li>
          </div>
          <div className={style.statistic_box}>
            <li className={style.statistic_text}>2</li>
          </div>
          <div className={style.statistic_box}>
            <li className={style.statistic_text}>3</li>
          </div>
        </ul> */}
      </div>
    </div>
  );
};

export default DailyStatistics;
