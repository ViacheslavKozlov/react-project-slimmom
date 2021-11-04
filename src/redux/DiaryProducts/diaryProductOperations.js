import axios from "axios";
import { BASE_URL } from "../../service/Api";
import { authRefresh } from "../auth/authOperations";
import {
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductSuccess,
  deleteProductError,
  changeCurrentDateSucces,
  afterDeleteProductInfoDaySucces,
  deleteProductRequest,
} from "./diaryProductActions";
export const addProduct = (product) => (dispatch, getState) => {
  const token = getState().authData.accessToken;
  dispatch(addProductRequest());

  axios
    .post(BASE_URL + `/day`, product, {
      headers: { Authorization: `Bearer ${token}` },
    })
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
  const newData = { data };
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

export const changeDateOperation = (date) => async (dispatch) => {
  dispatch(changeCurrentDateSucces(date));
};
