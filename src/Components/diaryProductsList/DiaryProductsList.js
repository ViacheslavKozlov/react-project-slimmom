import React from "react";
import DiaryProductsListItem from "./diaryProductsListItem/DiaryProductsListItem";
import { useSelector } from "react-redux";
import { getEatenProducts } from "../../redux/DiaryProducts/diaryProductSelector";
import moment from "moment";
import style from "../diaryProductsList/DiaryProductList.module.css";

const DiaryProductsList = ({ date }) => {
  const currentDate = moment(date).format("YYYY-MM-DD");
  const eatenProductsByDay = useSelector(
    (state) => getEatenProducts(state, currentDate)[0]
  );

  return (
    <>
      <ul className="list">
        <div className={style.scrollList}>
          {eatenProductsByDay?.eatenProducts?.length &&
            eatenProductsByDay.eatenProducts.map((eatenProductByDay) => (
              <DiaryProductsListItem
                key={eatenProductByDay.id}
                eatenProduct={eatenProductByDay}
              />
            ))}
        </div>
      </ul>
    </>
  );
};

export default DiaryProductsList;
