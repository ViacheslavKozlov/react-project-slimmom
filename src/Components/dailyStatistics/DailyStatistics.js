import React from "react";

import style from "./DailyStatistics.module.css";

const DailyStatistics = () => {
  return (
    <div className={style.statistics_wrapper}>
      <h3 className={style.statistics_title}>Сводка за </h3>
      <div className={style.statistics_box}>
        <div className={style.statistic_box}>
          <p className={style.statistic_text}>Осталось</p>
          <p className={style.statistic_text}>000 ккал</p>
        </div>
        <div className={style.statistic_box}>
          <p className={style.statistic_text}>Употреблено</p>
          <p className={style.statistic_text}>000 ккал</p>
        </div>
        <div className={style.statistic_box}>
          <p className={style.statistic_text}>Дневная норма</p>
          <p className={style.statistic_text}>000 ккал</p>
        </div>
        <div className={style.statistic_box}>
          <p className={style.statistic_text}>% от нормы</p>
          <p className={style.statistic_text}>000 ккал</p>
        </div>
      </div>
      <h3 className={style.statistics_title}>Нерекомендуемые продукты</h3>
      <div className={style.statistics_box}>
        <ul className={style.statistic_list}>
          <div className={style.statistic_box}>
            <li className={style.statistic_text}>1</li>
          </div>
          <div className={style.statistic_box}>
            <li className={style.statistic_text}>2</li>
          </div>
          <div className={style.statistic_box}>
            <li className={style.statistic_text}>3</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DailyStatistics;
