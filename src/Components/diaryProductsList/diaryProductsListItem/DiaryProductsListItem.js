import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductOperation } from "../../../redux/DiaryProducts/diaryProductOperations";
import style from "./DairyProductsListItem.module.css";
import moment from "moment";
import { dairyProductsSelector } from "../../../redux/DiaryProducts/diaryProductSelector";
import Wrapper from "../../wrapper/Wrapper";

// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../../redux/DiaryProducts/diaryProductOperations";

const DiaryProductsListItem = ({
  title,
  weight,
  kcal,
  id,
  onRemoveProductById,
}) => {
  const diaryProduct = useSelector(dairyProductsSelector);
  const todayDate = moment(new Date()).format("YYYY-MM-DD");
  const onDeleteClick = () => onRemoveProductById(id);

  return (
    <>
      <Wrapper>
        <li className={style.dairyItem}>
          <p className={style.dairyItemProduct}>{title}</p>
          <p className={style.dairyItemWeight}>{weight} г </p>
          <p className={style.dairyItemCcal}>{Math.round(kcal)} ккал</p>
          {diaryProduct.date === todayDate ? (
            <button
              className={style.btnDelete}
              type="button"
              // id={_id}
              onClick={onDeleteClick}
            >
              X
            </button>
          ) : (
            <> </>
          )}
        </li>
      </Wrapper>
    </>
  );
};

export default DiaryProductsListItem;
