import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getDailyRateByDateOperation } from "../../redux/dailyRate/dailyRateOperations";
import { dailyRateSelector } from "../../redux/dailyRate/dailyRateSelectors";
import moment from "moment";
import style from "./DailyStatistics.module.css";
import { dairyProductsSelector } from "../../redux/DiaryProducts/diaryProductSelector";

const DailyStatistics = ({ isLoadingDaily }) => {
  const location = useLocation();
  const dailyRate = useSelector(dailyRateSelector);
  const diaryProduct = useSelector(dairyProductsSelector);
  const dispatch = useDispatch();
  const todayDate = moment(new Date()).format("YYYY-MM-DD");

  useEffect(() => {
    if (location.pathname === "/calculator" && dailyRate.dailyRate) {
      dispatch(getDailyRateByDateOperation({ date: todayDate }));
    }
  }, [location.pathname, dispatch, todayDate, dailyRate.dailyRate]);

  return (
    <div className={style.statistics_wrapper}>
      <div className={style.statistics_container}>
        <>
          <>
            <div className={style.statistics_box}>
              <h3 className={style.statistics_title}>
                {diaryProduct.date ? (
                  <>
                    Сводка за {moment(diaryProduct.date).format("DD.MM.YYYY")}
                  </>
                ) : (
                  <>Нет статистики за этот день.</>
                )}
              </h3>

              <div className={style.statistic_box}>
                <p className={style.statistic_text}>Осталось</p>
                {isLoadingDaily ? (
                  <Loader
                    type="BallTriangle"
                    color={`var(--active-color)`}
                    height={15}
                    width={15}
                  />
                ) : (
                  <p className={style.statistic_text}>
                    {dailyRate.kcalLeft
                      ? `${Math.round(dailyRate.kcalLeft)} `
                      : "000 "}
                    ккал
                  </p>
                )}
              </div>
              <div className={style.statistic_box}>
                <p className={style.statistic_text}>Употреблено</p>
                {isLoadingDaily ? (
                  <Loader
                    type="BallTriangle"
                    color={`var(--active-color)`}
                    height={15}
                    width={15}
                  />
                ) : (
                  <p className={style.statistic_text}>
                    {dailyRate.kcalConsumed
                      ? `${Math.round(dailyRate.kcalConsumed)} `
                      : "000 "}
                    ккал
                  </p>
                )}
              </div>
              <div className={style.statistic_box}>
                <p className={style.statistic_text}>Дневная норма</p>
                {isLoadingDaily ? (
                  <Loader
                    type="BallTriangle"
                    color={`var(--active-color)`}
                    height={15}
                    width={15}
                  />
                ) : (
                  <p className={style.statistic_text}>
                    {dailyRate.dailyRate
                      ? `${Math.round(dailyRate.dailyRate)} `
                      : "000 "}
                    ккал
                  </p>
                )}
              </div>
              <div className={style.statistic_box}>
                <p className={style.statistic_text}>% от нормы</p>
                {isLoadingDaily ? (
                  <Loader
                    type="BallTriangle"
                    color={`var(--active-color)`}
                    height={15}
                    width={15}
                  />
                ) : (
                  <p className={style.statistic_text}>
                    {dailyRate.percentsOfDailyRate
                      ? `${Math.round(dailyRate.percentsOfDailyRate)} `
                      : "0 "}
                    %
                  </p>
                )}
              </div>
            </div>
            <div className={style.statistics_box}>
              <h3 className={style.statistics_title}>
                Нерекомендуемые продукты
              </h3>
              {dailyRate.notAllowedProducts?.length !== 0 ? (
                <ul className={style.statistic_list}>
                  {dailyRate.notAllowedProducts?.map((product) => (
                    <li className={style.statistic_text} key={product}>
                      {product}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={style.statistic_text}>
                  Здесь будет отображаться Ваш рацион
                </p>
              )}
            </div>
          </>
        </>
      </div>
    </div>
  );
};

export default DailyStatistics;
