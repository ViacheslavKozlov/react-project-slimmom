import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getDailyRateOperation } from "../../redux/dailyRate/dailyRateOperations";
import { BASE_URL } from "../../service/Api";
import { Button } from "../button/Button";
import style from "./DiaryAddForm.module.css";
import moment from "moment";
import { addProduct } from "../../redux/DiaryProducts/diaryProductOperations";
import { dairyProductsSelector } from "../../redux/DiaryProducts/diaryProductSelector";

const DiaryAddProductForm = ({ date }) => {
  const [value, setValue] = useState("");
  const [weight, setWeight] = useState("");
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const diaryProduct = useSelector(dairyProductsSelector);
  // const currentDate = moment(date).format("YYYY-MM-DD");
  const todayDate = moment(new Date()).format("YYYY-MM-DD");

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTc5NGE5N2E2Zjk3NjY4ZjdmYzU5MTQiLCJzaWQiOiI2MTdlNmQzM2E2Zjk3NjY4ZjdmYzVhMjkiLCJpYXQiOjE2MzU2NzU0NDMsImV4cCI6MTYzNTY3OTA0M30.nCrIAFfdo-azzNoMw_NmusE-iWJNrJQ5PQ1RSfUEgN8";

  const onHandleChange = ({ target }) => {
    const { value, name } = target;
    name === "product" && setValue(value);
    name === "weight" && setWeight(value);
  };
  // console.log(value);

  const getProductIdByName = () =>
    products.find(
      (product) => product.title.ru.toLowerCase() === value.toLowerCase()
    )._id;
  // console.log(products);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const id = getProductIdByName();
    // console.log(id);
    const userEatenProduct = {
      date: diaryProduct.date,
      productId: id,
      weight: Number(weight) || 100,
    };
    dispatch(addProduct(userEatenProduct));
    setValue("");
    setWeight("");
  };

  useEffect(() => {
    value.length > 3 &&
      axios
        .get(BASE_URL + `/product?search=${value}`)
        .then((response) => setProducts(response.data));
  }, [value]);

  return (
    <>
      {diaryProduct.date === todayDate ? (
        <form onSubmit={onHandleSubmit}>
          <div className={style.addProductInputForm}>
            <label htmlFor="myBrowser">
              <input
                value={value}
                className={style.formFieldProduct}
                onChange={onHandleChange}
                list="productList"
                id="myBrowser"
                name="product"
                type="text"
                autoFocus
                placeholder="Введите название продукта"
              />
            </label>
            <datalist id="productList">
              {products.map((product) => (
                <option
                  key={product._id}
                  id={product._id}
                  value={product.title.ru}
                />
              ))}
            </datalist>
            <label htmlFor="myBrowser">
              <input
                className={style.formFieldWeigth}
                onChange={onHandleChange}
                list=""
                id=""
                name="weight"
                type="number"
                min="100"
                step="1"
                value={weight}
                autoFocus
                placeholder="Граммы"
              />
            </label>
          </div>
          <Button buttonName="Добавить" type="submit" />
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default DiaryAddProductForm;
