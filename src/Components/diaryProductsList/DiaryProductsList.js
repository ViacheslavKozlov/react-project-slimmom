import React from "react";
import DiaryProductsListItem from "./diaryProductsListItem/DiaryProductsListItem";
import { useSelector } from "react-redux";
import { getEatenProducts } from "../../redux/DiaryProducts/diaryProductSelector";
import moment from "moment";

const DiaryProductsList = ({ date }) => {
  const currentDate = moment(date).format("YYYY-MM-DD");
  const eatenProductsByDay = useSelector(
    (state) => getEatenProducts(state, currentDate)[0]
  );
  console.log(`eatenProducts`, eatenProductsByDay?.eatenProducts);
  return (
    <>
      <ul className="list">
        {eatenProductsByDay?.eatenProducts?.length &&
          eatenProductsByDay.eatenProducts.map((eatenProductByDay) => (
            <>
              {console.log(eatenProductByDay)}
              <DiaryProductsListItem
                key={eatenProductByDay.id}
                eatenProduct={eatenProductByDay}
              />
            </>
          ))}
      </ul>
    </>
  );
};

export default DiaryProductsList;
