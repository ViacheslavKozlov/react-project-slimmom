import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../service/Api";
import { authRefresh } from "../auth/authOperations";
// import { afterDeleteProductInfoDaySucces } from "../dailyRate/dailyRateActions";
import {
  addProductRequest,
  addProductSuccess,
  addProductError,
  getDayInfoRequest,
  // deleteProductRequest,
  // deleteProductSuccess,
  // deleteProductError,
  getProductsRequest,
  getProductsSuccess,
  deleteProductSuccess,
  deleteProductError,
  changeCurrentDateSucces,
  afterDeleteProductInfoDaySucces,
  getDayInfoSuccess,
  getDayInfoError,
  deleteProductRequest,

  // getProductError,
} from "./diaryProductActions";
import { diaryEatenProductId, diaryProductId } from "./diaryProductSelector";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTc5NGE5N2E2Zjk3NjY4ZjdmYzU5MTQiLCJzaWQiOiI2MTdlNmQzM2E2Zjk3NjY4ZjdmYzVhMjkiLCJpYXQiOjE2MzU2NzU0NDMsImV4cCI6MTYzNTY3OTA0M30.nCrIAFfdo-azzNoMw_NmusE-iWJNrJQ5PQ1RSfUEgN8";

export const addProduct = (product) => (dispatch, getState) => {
  // const localId = getState().authorization.tokens.localId;
  // const idToken = getState().authorization.tokens.idToken;
  dispatch(addProductRequest());

  axios
    .post(BASE_URL + `/day`, product)
    .then((response) => dispatch(addProductSuccess(response.data)))
    .catch(async (error) => {
      if (error.response.status === 401) {
        await dispatch(authRefresh());
        getState().authData.accessToken && dispatch(addProduct(product));
      }
      dispatch(addProductError(error.message));
    });
};

export const deleteProductOperation = (data) => async (dispatch, getState) => {
  dispatch(deleteProductRequest());
  // console.log(data.eatenProductId);

  const newData = { data };
  // console.log(newData.data.eatenProductId);
  axios
    .delete(BASE_URL + `/day`, newData)
    .then((response) =>
      dispatch(afterDeleteProductInfoDaySucces(response.data))
    )
    .then(() => dispatch(deleteProductSuccess(newData.data.eatenProductId)))
    .catch(async (error) => {
      if (error.response.status === 401) {
        await dispatch(authRefresh());
        getState().authData.accessToken && dispatch(addProduct(data));
      }
      dispatch(deleteProductError(error.message));
    });
};

// export const getProducts = () => (dispatch) => {
//   dispatch(getProductsRequest());
// };

// export const getDayInfo = (day) => async (dispatch, getState) => {
//   const token = getState().authData.accessToken;
//   dispatch(getDayInfoRequest());
//   try {
//     const { data } = await axios.post(`${BASE_URL}/day/info`, day, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     dispatch(getDayInfoSuccess(data));
//   } catch (error) {
//     dispatch(getDayInfoError(error.message));
//   }
// };

export const changeDateOperation = (date) => async (dispatch) => {
  // dispatch(getDailyRateRequest());
  dispatch(changeCurrentDateSucces(date));
};
