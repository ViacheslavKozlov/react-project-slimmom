import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { getDailyRateOperation } from "../../redux/dailyRate/dailyRateOperations";
import { BASE_URL } from "../../service/Api";
import { Button } from "../button/Button";
import style from "./DiaryAddForm.module.css";
import moment from "moment";
import { addProduct } from "../../redux/DiaryProducts/diaryProductOperations";

const DiaryAddProductForm = ({ date }) => {
  const [value, setValue] = useState("");
  const [weight, setWeight] = useState("");
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTc5NGE5N2E2Zjk3NjY4ZjdmYzU5MTQiLCJzaWQiOiI2MTdlNmQzM2E2Zjk3NjY4ZjdmYzVhMjkiLCJpYXQiOjE2MzU2NzU0NDMsImV4cCI6MTYzNTY3OTA0M30.nCrIAFfdo-azzNoMw_NmusE-iWJNrJQ5PQ1RSfUEgN8";

  const onHandleChange = ({ target }) => {
    const { value, name } = target;
    name === "product" && setValue(value);
    name === "weight" && setWeight(value);
  };
  // console.log(value);
  const currentDate = moment(date).format("YYYY-MM-DD");

  const getProductIdByName = () =>
    products.find(
      (product) => product.title.ru.toLowerCase() === value.toLowerCase()
    )._id;
  // console.log(products);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const id = getProductIdByName();
    console.log(id);
    const userEatenProduct = {
      date: currentDate,
      productId: id,
      weight: Number(weight),
    };
    dispatch(addProduct(userEatenProduct));
    console.log(addProduct(userEatenProduct));
    setValue("");
    setWeight("");
  };

  useEffect(() => {
    // dispatch(getDailyRateOperation());
    // axios.post(
    //   `${BASE_URL}/daily-rate/61794a97a6f97668f7fc5914`,
    //   {
    //     weight: 100,
    //     height: 170,
    //     age: 30,
    //     desiredWeight: 60,
    //     bloodType: 1,
    //   },
    //   {
    //     headers: { Authorization: `Bearer ${token}` },
    //   }
    // );
    value.length > 3 &&
      axios
        .get(BASE_URL + `/product?search=${value}`)
        .then((response) => setProducts(response.data));
  }, [value]);

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <div className={style.addProductInputForm}>
          <label htmlFor="myBrowser">
            <input
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
              // onInput="validity.valid||(value='');"
              autoFocus
              placeholder="Граммы"
            />
          </label>
        </div>
        <Button buttonName="Добавить" type="submit" />
      </form>
    </>
  );
};

export default DiaryAddProductForm;
