import React, { useState } from "react";
import DiaryAddProductForm from "../Components/diaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "../Components/diaryProductsList/DiaryProductsList";
import DiaryDateСalendar from "../Components/diaryDateСalendar/DiaryDateСalendar";
// import RightSideBar from "../Components/rightSideBar/RightSideBar";
import DailyStatistics from "../Components/dailyStatistics/DailyStatistics";
// import moment from "moment";

const DiaryPage = () => {
  const [date, setDate] = useState(new Date());
  // const todayDate = moment(new Date()).format("YYYY-MM-DD");
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
