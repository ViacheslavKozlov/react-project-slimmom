import React from "react";
import style from "./DairyProductsListItem.module.css";

// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../../redux/DiaryProducts/diaryProductOperations";

const DiaryProductsListItem = ({ eatenProduct }) => {
  // const deleteContactItem = () => dispatch(deleteContact(eatenProduct.id));

  return (
    <>
      <li className={style.dairyItem}>
        <p className={style.dairyItemProduct}>{eatenProduct.title}</p>
        <p className={style.dairyItemWeight}>{eatenProduct.weight} г </p>
        <p className={style.dairyItemCcal}>{eatenProduct.kcal} ккал</p>
        <button
          className={style.btnDelete}
          type="button"
          id={eatenProduct._id}
          // onClick={deleteContactItem}
        >
          X
        </button>
      </li>
    </>
  );
};

export default DiaryProductsListItem;
