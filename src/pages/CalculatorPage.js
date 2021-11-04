import React from "react";
import DailyCaloriesForm from "../Components/dailyCaloriesForm/DailyCaloriesForm";
import DailyStatistics from "../Components/dailyStatistics/DailyStatistics";
import useDeviceSizes from "../hooks/useDeviceSizec";
import styles from "./CalculatorPage.module.css";

const CalculatorPage = () => {
  const { isDescDevice } = useDeviceSizes();
  return (
    <>
      <div className={styles.backGround}>
        {isDescDevice ? (
          <>
            <div className={styles.mainContainer}>
              <div className={styles.formContainer}>
                <DailyCaloriesForm />
              </div>

              <div className={styles.statsContainer}>
                <DailyStatistics />
              </div>
            </div>
          </>
        ) : (
          <>
            <DailyCaloriesForm />
            <div className={styles.mobileContainer}>
              <DailyStatistics />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CalculatorPage;
