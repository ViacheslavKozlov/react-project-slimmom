import React from "react";
import DiaryAddProductForm from "../Components/diaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "../Components/diaryProductsList/DiaryProductsList";
import DiaryDateСalendar from "../Components/diaryDateСalendar/DiaryDateСalendar";

const DairyPage = () => {
  return (
    <>
      <DiaryDateСalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </>
  );
};

export default DairyPage;
