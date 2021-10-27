import React from "react";
import DailyCaloriesForm from "../Components/dailyCaloriesForm/DailyCaloriesForm";
import DailyStatistics from "../Components/dailyStatistics/DailyStatistics";

const CalculatorPage = () => {
  return (
    <>
      <h2>CalculatorPage</h2>
      <DailyCaloriesForm />
      <DailyStatistics />
    </>
  );
};

export default CalculatorPage;
