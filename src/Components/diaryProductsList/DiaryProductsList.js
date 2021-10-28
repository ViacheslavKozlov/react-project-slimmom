import React from "react";
import DiaryProductsListItem from "./diaryProductsListItem/DiaryProductsListItem";
import { useSelector } from "react-redux";
import { getEatenProducts } from "../../redux/DiaryProducts/diaryProductSelector";

const DiaryProductsList = () => {
  const eatenProducts = useSelector(getEatenProducts);
  return (
    <>
      <ul className="list">
        {eatenProducts &&
          eatenProducts.map((eatenProduct) => (
            <DiaryProductsListItem
              key={eatenProduct.id}
              eatenProduct={eatenProduct}
            />
          ))}
      </ul>
    </>
  );
};

export default DiaryProductsList;
