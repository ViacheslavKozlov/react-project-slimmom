import React, { useState } from "react";
import DiaryAddProductForm from "../Components/diaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "../Components/diaryProductsList/DiaryProductsList";
import DiaryDateСalendar from "../Components/diaryDateСalendar/DiaryDateСalendar";
import RightSideBar from "../Components/rightSideBar/RightSideBar";

const DairyPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <DiaryDateСalendar date={date} setDate={setDate} />
      <DiaryAddProductForm date={date} />
      <DiaryProductsList date={date} />
      <RightSideBar />
    </>
  );
};

export default DairyPage;
