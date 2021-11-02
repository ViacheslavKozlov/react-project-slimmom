import React from "react";
import DailyCaloriesForm from "../Components/dailyCaloriesForm/DailyCaloriesForm";
import DailyStatistics from "../Components/dailyStatistics/DailyStatistics";

const CalculatorPage = () => {
  return (
    <>
      <DailyCaloriesForm />
      <DailyStatistics />
    </>
  );
};

export default CalculatorPage;
