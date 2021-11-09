import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../service/Api";
import { Button, ButtonAdd } from "../button/Button";
import style from "./DiaryAddForm.module.css";
import moment from "moment";
import { addProduct } from "../../redux/DiaryProducts/diaryProductOperations";
import { dairyProductsSelector } from "../../redux/DiaryProducts/diaryProductSelector";
import useDeviceSizes from "../../hooks/useDeviceSizec";
import Loader from "react-loader-spinner";

const DiaryAddProductForm = ({ isLoadingProducts, toggle }) => {
  const [value, setValue] = useState("");
  const [weight, setWeight] = useState("");
  const [products, setProducts] = useState([]);
  const { isMobileDevice } = useDeviceSizes();
  const dispatch = useDispatch();

  const diaryProduct = useSelector(dairyProductsSelector);
  const todayDate = moment(new Date()).format("YYYY-MM-DD");

  const getProductSearch = (value) => {
    axios
      .get(BASE_URL + `/product?search=${value}`)
      .then((response) => {
        setProducts(response.data.slice(0, 10));
      })
      .catch((error) => {
        setProducts([]);
        alert(error);
      });
  };

  const onHandleChange = ({ target }) => {
    const { value, name } = target;
    // console.log(value);
    name === "product" && setValue(value);
    name === "weight" && setWeight(value);

    if (name === "product") {
      !products.some((product) => product.title.ru === value) &&
        getProductSearch(value);
    }
  };

  const getProductIdByName = () => {
    // console.log(products);
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
  const onMobileSubmit = (e) => {
    onHandleSubmit(e);
    toggle();
  };

  return (
    <>
      {diaryProduct.date === todayDate ? (
        <form onSubmit={onHandleSubmit}>
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
                      type={"submit"}
                      onClick={onMobileSubmit}
                    />
                  ) : (
                    <ButtonAdd type="submit" />
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
