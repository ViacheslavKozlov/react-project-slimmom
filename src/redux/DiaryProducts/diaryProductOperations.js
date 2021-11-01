import axios from "axios";
import { BASE_URL } from "../../service/Api";
// import { afterDeleteProductInfoDaySucces } from "../dailyRate/dailyRateActions";
import {
  addProductRequest,
  addProductSuccess,
  addProductError,
  // deleteProductRequest,
  // deleteProductSuccess,
  // deleteProductError,
  getProductsRequest,
  getProductsSuccess,
  deleteProductSuccess,
  deleteProductError,
  changeCurrentDateSucces,
  afterDeleteProductInfoDaySucces,
  // getProductError,
} from "./diaryProductActions";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTc5NGE5N2E2Zjk3NjY4ZjdmYzU5MTQiLCJzaWQiOiI2MTdlNmQzM2E2Zjk3NjY4ZjdmYzVhMjkiLCJpYXQiOjE2MzU2NzU0NDMsImV4cCI6MTYzNTY3OTA0M30.nCrIAFfdo-azzNoMw_NmusE-iWJNrJQ5PQ1RSfUEgN8";

export const addProduct = (product) => (dispatch, getState) => {
  // const localId = getState().authorization.tokens.localId;
  // const idToken = getState().authorization.tokens.idToken;
  dispatch(addProductRequest());

  axios
    .post(BASE_URL + `/day`, product)
    .then((response) => dispatch(addProductSuccess(response.data)))
    .catch((error) => dispatch(addProductError(error.message)));
};

export const deleteProductOperation = (data) => async (dispatch) => {
  // dispatch(deleteProductRequest());
  // console.log(data.eatenProductId);

  const newData = { data };
  // console.log(newData.data.eatenProductId);
  axios
    .delete(BASE_URL + `/day`, newData)
    .then((response) =>
      dispatch(afterDeleteProductInfoDaySucces(response.data))
    )
    .then(() => dispatch(deleteProductSuccess(newData.data.eatenProductId)))
    .catch((error) => dispatch(deleteProductError(error.message)));
};

export const getProducts = () => (dispatch) => {
  dispatch(getProductsRequest());

  axios
    .get(BASE_URL + `/user`)
    .then((response) => dispatch(getProductsSuccess(response.data.days)));
  // .catch((error) => dispatch(getProductError(error)));
};

export const changeDateOperation = (date) => async (dispatch) => {
  // dispatch(getDailyRateRequest());
  dispatch(changeCurrentDateSucces(date));
};
