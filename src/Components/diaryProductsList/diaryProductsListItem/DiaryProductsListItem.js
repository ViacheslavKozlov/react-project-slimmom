import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductOperation } from "../../../redux/DiaryProducts/diaryProductOperations";
import style from "./DairyProductsListItem.module.css";

// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../../redux/DiaryProducts/diaryProductOperations";

const DiaryProductsListItem = ({
  title,
  weight,
  kcal,
  id,
  onRemoveProductById,
}) => {
  const onDeleteClick = () => onRemoveProductById(id);

  return (
    <>
      <li className={style.dairyItem}>
        <p className={style.dairyItemProduct}>{title}</p>
        <p className={style.dairyItemWeight}>{weight} г </p>
        <p className={style.dairyItemCcal}>{Math.round(kcal)} ккал</p>
        <button
          className={style.btnDelete}
          type="button"
          // id={_id}
          onClick={onDeleteClick}
        >
          X
        </button>
      </li>
    </>
  );
};

export default DiaryProductsListItem;
