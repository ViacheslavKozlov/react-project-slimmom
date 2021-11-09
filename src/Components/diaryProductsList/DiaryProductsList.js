import React from "react";
import DiaryProductsListItem from "./diaryProductsListItem/DiaryProductsListItem";
import { useDispatch, useSelector } from "react-redux";
import { dairyProductsSelector } from "../../redux/DiaryProducts/diaryProductSelector";
// import moment from "moment";
import style from "../diaryProductsList/DiaryProductList.module.css";
import { deleteProductOperation } from "../../redux/DiaryProducts/diaryProductOperations";
import Loader from "react-loader-spinner";

const DiaryProductsList = ({ date, isLoadingDaily, isLoadingProducts }) => {
  // const currentDate = moment(date).format("YYYY-MM-DD");
  // const eatenProductsByDay = useSelector(
  //   (state) => getEatenProducts(state, currentDate)[0]
  // );
  const productsInfo = useSelector(dairyProductsSelector);
  const dispatch = useDispatch();

  const onRemoveProductById = (id) => {
    dispatch(
      deleteProductOperation({
        dayId: productsInfo.dateId,
        eatenProductId: id,
      })
    );
  };
  return (
    <>
      {false || isLoadingDaily ? (
        <div className={style.loader_container}>
          <Loader
            type="BallTriangle"
            color={`var(--active-color)`}
            height={90}
            width={90}
          />
        </div>
      ) : (
        <ul className={style.list}>
          <div className={style.scrollList}>
            {productsInfo.eatenProducts?.length !== 0 ? (
              <>
                {productsInfo.eatenProducts?.map((product) => (
                  <DiaryProductsListItem
                    isLoadingProducts={isLoadingProducts}
                    key={product.id}
                    kcal={product.kcal}
                    title={product.title}
                    weight={product.weight}
                    id={product.id}
                    onRemoveProductById={onRemoveProductById}
                  />
                ))}
              </>
            ) : (
              <>
                {!productsInfo.date ? (
                  <p>В этот день Вы не вели календарь</p>
                ) : (
                  <p>Вы ничего не добавляли</p>
                )}
              </>
            )}
          </div>
        </ul>
      )}
    </>
  );
};

export default DiaryProductsList;
