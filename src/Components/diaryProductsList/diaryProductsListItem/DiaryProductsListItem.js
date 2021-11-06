import React from "react";
import { useSelector } from "react-redux";
// import { deleteProductOperation } from "../../../redux/DiaryProducts/diaryProductOperations";
import style from "./DairyProductsListItem.module.css";
import moment from "moment";
import { dairyProductsSelector } from "../../../redux/DiaryProducts/diaryProductSelector";
import Loader from "react-loader-spinner";

// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../../redux/DiaryProducts/diaryProductOperations";

const DiaryProductsListItem = ({
  title,
  weight,
  kcal,
  id,
  onRemoveProductById,
  isLoadingProducts,
}) => {
  const diaryProduct = useSelector(dairyProductsSelector);
  const todayDate = moment(new Date()).format("YYYY-MM-DD");
  const onDeleteClick = () => onRemoveProductById(id);

  return (
    <>
      <li className={style.dairyItem}>
        <p className={style.dairyItemProduct}>{title}</p>
        <p className={style.dairyItemWeight}>{weight} г </p>
        <div className={style.withButtonContainer}>
          <p className={style.dairyItemCcal}>{Math.round(kcal)} ккал</p>
          {diaryProduct.date === todayDate ? (
            <>
              {isLoadingProducts ? (
                <Loader
                  type="BallTriangle"
                  color={`var(--active-color)`}
                  height={15}
                  width={15}
                />
              ) : (
                <button
                  className={style.btnDelete}
                  type="button"
                  onClick={onDeleteClick}
                >
                  X
                </button>
              )}
            </>
          ) : (
            <> </>
          )}
        </div>
      </li>
    </>
  );
};

export default DiaryProductsListItem;
