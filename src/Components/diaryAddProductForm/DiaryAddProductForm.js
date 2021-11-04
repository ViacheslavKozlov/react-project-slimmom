import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getDailyRateOperation } from "../../redux/dailyRate/dailyRateOperations";
import { BASE_URL } from "../../service/Api";
import { Button, ButtonAdd } from "../button/Button";
import style from "./DiaryAddForm.module.css";
import moment, { localeData } from "moment";
import { addProduct } from "../../redux/DiaryProducts/diaryProductOperations";
import { dairyProductsSelector } from "../../redux/DiaryProducts/diaryProductSelector";
import useDeviceSizes from "../../hooks/useDeviceSizec";
import Loader from "react-loader-spinner";

const DiaryAddProductForm = ({ date, isLoadingProducts, toggle }) => {
  const [value, setValue] = useState("");
  const [weight, setWeight] = useState("");
  const [products, setProducts] = useState([]);
  const { isMobileDevice } = useDeviceSizes();
  const dispatch = useDispatch();

  const diaryProduct = useSelector(dairyProductsSelector);
  // const currentDate = moment(date).format("YYYY-MM-DD");
  const todayDate = moment(new Date()).format("YYYY-MM-DD");

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTc5NGE5N2E2Zjk3NjY4ZjdmYzU5MTQiLCJzaWQiOiI2MTdlNmQzM2E2Zjk3NjY4ZjdmYzVhMjkiLCJpYXQiOjE2MzU2NzU0NDMsImV4cCI6MTYzNTY3OTA0M30.nCrIAFfdo-azzNoMw_NmusE-iWJNrJQ5PQ1RSfUEgN8";
  const getProductSearch = (value) => {
    console.log(value);
    axios
      .get(BASE_URL + `/product?search=${value}`)
      .then((response) => {
        setProducts(response.data.slice(0, 10));
      })
      .catch((error) => {
        setProducts([]);
        console.log(error);
      });
  };

  const onHandleChange = ({ target }) => {
    const { value, name } = target;
    console.log(value);
    name === "product" && setValue(value);
    name === "weight" && setWeight(value);

    if (name === "product") {
      !products.some((product) => product.title.ru === value) &&
        getProductSearch(value);
    }
  };

  const getProductIdByName = () => {
    console.log(products);
    const curProd = products.find(
      (product) => product.title.ru.toLowerCase() === value.toLowerCase()
    );
    if (!curProd) {
      return;
    }
    return curProd._id;
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (products.length === 0) {
      alert("Продукт не найден");
      return;
    }
    const id = getProductIdByName();
    console.log(id);
    const userEatenProduct = {
      date: diaryProduct.date,
      productId: id,
      weight: Number(weight) || 100,
    };
    dispatch(addProduct(userEatenProduct));
    setValue("");
    setWeight("");
    setProducts([]);
  };

  return (
    <>
      {diaryProduct.date === todayDate ? (
        <form onSubmit={onHandleSubmit}>
          <div className={style.addProductForm}>
            <div className={style.addProductInputForm}>
              <label htmlFor="myBrowser">
                <input
                  required
                  value={value}
                  className={style.formFieldProduct}
                  onChange={onHandleChange}
                  list="productList"
                  id="myBrowser"
                  name="product"
                  type="text"
                  placeholder="Введите название продукта"
                />
              </label>
              <datalist id="productList">
                {products.map((product) => (
                  <option
                    key={product._id}
                    id={product._id}
                    value={product.title?.ru || "Not found"}
                  />
                ))}
              </datalist>
              <label htmlFor="myBrowser">
                <input
                  required
                  className={style.formFieldWeight}
                  onChange={onHandleChange}
                  list=""
                  id=""
                  name="weight"
                  type="number"
                  step="1"
                  value={weight}
                  git // autoFocus
                  placeholder="Граммы"
                />
              </label>
            </div>
            <div className={style.button_wrapper}>
              {isLoadingProducts ? (
                <Loader
                  className={style.loader}
                  type="BallTriangle"
                  color={`var(--active-color)`}
                  height={30}
                  width={30}
                />
              ) : (
                <div className={style.btnAddFormMobile}>
                  {isMobileDevice ? (
                    <Button
                      buttonName="Добавить"
                      type="submit"
                      onClick={toggle}
                    />
                  ) : (
                    <ButtonAdd buttonName="Добавить" type="submit" />
                  )}
                </div>
              )}
            </div>
          </div>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default DiaryAddProductForm;
