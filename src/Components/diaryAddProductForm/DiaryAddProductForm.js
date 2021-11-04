import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getDailyRateOperation } from "../../redux/dailyRate/dailyRateOperations";
import { BASE_URL } from "../../service/Api";
import { Button, ButtonAdd } from "../button/Button";
import style from "./DiaryAddForm.module.css";
import moment from "moment";
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
        // console.log(response.data);
        setProducts(response.data.slice(0, 10));
      })
      .catch((error) => {
        setProducts([]);
        console.log(error);
      });
  };

  // const debounceProductSearch = debounce(getProductSearch, 1000);

  const onHandleChange = ({ target }) => {
    const { value, name } = target;
    console.log(value);
    name === "product" && setValue(value);
    name === "weight" && setWeight(value);

    if (name === "product") {
      getProductSearch(value);

      // getProductSearch(value);
      // value.length >= 1 &&
      //   axios
      //     .get(BASE_URL + `/product?search=${value}`)
      //     .then((response) => {
      //       // console.log(response.data);
      //       setProducts(response.data.slice(0, 10));
      //     })
      //     .catch((error) => {
      //       setProducts([]);
      //       // console.log(error);
      //     });
    }
  };

  // console.log(value);

  // const getProductIdByName = () =>
  //   products.find(
  //     (product) => product.title.ru.toLowerCase() === value.toLowerCase()
  //   )._id;
  // console.log(products);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // const id = getProductIdByName();
    if (products.length === 0) {
      alert("Продукт не найден");
      return;
    }
    const id = products[0]._id;
    // console.log(id);
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
    // value.length >= 1 &&
    //   axios
    //     .get(BASE_URL + `/product?search=${value}`)
    //     .then((response) => {
    //       console.log(response.data);
    //       setProducts(response.data.slice(0, 10));
    //     })
    //     .catch((error) => console.log(error));
  }, [value]);

  return (
    <>
      {/* <Wrapper> */}
      {diaryProduct.date === todayDate ? (
        <form onSubmit={onHandleSubmit}>
          {/* <div className={style.addProductForm}> */}
          {/* <div className={style.addProductInputForm}>
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
            <div className={style.btnAddFormMobile}>
              {isMobileDevice ? (
                <Button buttonName="Добавить" type="submit" />
              ) : (
                <ButtonAdd buttonName="Добавить" type="submit" />
              )}
            </div>
          </div> */}
          <div className={style.addProductForm}>
            <div className={style.addProductInputForm}>
              <label htmlFor="myBrowser" className={style.addProductInputLable}>
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
              <label htmlFor="myBrowser" className={style.addProductInputLable}>
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
                  // git // autoFocus
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
      {/* </Wrapper> */}
    </>
  );
};

export default DiaryAddProductForm;
