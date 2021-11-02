import React, { useState } from "react";
import DiaryAddProductForm from "../Components/diaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "../Components/diaryProductsList/DiaryProductsList";
import DiaryDateСalendar from "../Components/diaryDateСalendar/DiaryDateСalendar";
// import RightSideBar from "../Components/rightSideBar/RightSideBar";
import DailyStatistics from "../Components/dailyStatistics/DailyStatistics";

const DiaryPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <DiaryDateСalendar date={date} setDate={setDate} />
      <DiaryAddProductForm date={date} />
      <DiaryProductsList date={date} />
      <DailyStatistics date={date} />
      {/* <RightSideBar /> */}
    </>
  );
};

export default DiaryPage;
