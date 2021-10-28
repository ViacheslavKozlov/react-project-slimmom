import React from "react";
import DiaryAddProductForm from "../Components/diaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "../Components/diaryProductsList/DiaryProductsList";
import DiaryDateСalendar from "../Components/diaryDateСalendar/DiaryDateСalendar";
import RightSideBar from "../Components/rightSideBar/RightSideBar";

const DairyPage = () => {
  return (
    <>
      <DiaryDateСalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
      <RightSideBar />
    </>
  );
};

export default DairyPage;
