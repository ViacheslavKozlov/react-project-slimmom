import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../service/Api";
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
  getDayInfoSuccess,
  getDayInfoError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  // getProductError,
} from "./diaryProductActions";
import { diaryEatenProductId, diaryProductId } from "./diaryProductSelector";

export const addProduct = (product) => (dispatch, getState) => {
  const token = getState().authData.accessToken;
  dispatch(addProductRequest());

  axios
    .post(`${BASE_URL}/day`, product, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((product) => dispatch(addProductSuccess(product.data)))
    .catch((error) => dispatch(addProductError(error)));
};

export const deleteProduct = (product) => (dispatch, getState) => {
  const token = getState().authData.accessToken;
  const productId = useSelector(diaryProductId());
  const eatenProductId = useSelector(diaryEatenProductId());

  dispatch(deleteProductRequest());
  axios
    .delete(`${BASE_URL}/day`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => dispatch(deleteProductSuccess(productId, eatenProductId)))
    .catch((error) => dispatch(deleteProductError(error.message)));
};

export const getDayInfo = (day) => async (dispatch, getState) => {
  const token = getState().authData.accessToken;
  dispatch(getDayInfoRequest());
  try {
    const { data } = await axios.post(`${BASE_URL}/day/info`, day, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(getDayInfoSuccess(data));
  } catch (error) {
    dispatch(getDayInfoError(error.message));
  }
};
