import axios from "axios";
import { BASE_URL } from "../../service/Api";
import {
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  getProductsRequest,
  getProductsSuccess,
  getProductError,
} from "./diaryProductActions";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTc5NGE5N2E2Zjk3NjY4ZjdmYzU5MTQiLCJzaWQiOiI2MTdiYjc5YWE2Zjk3NjY4ZjdmYzU5OTQiLCJpYXQiOjE2MzU0OTc4ODMsImV4cCI6MTYzNTUwMTQ4M30.5J6RlBWEnzWiUX7K2tIpPFoMP4rXc6VSFmokbvf2-WM";

export const addProduct = (product) => (dispatch, getState) => {
  // const localId = getState().authorization.tokens.localId;
  // const idToken = getState().authorization.tokens.idToken;
  dispatch(addProductRequest());

  axios.post(BASE_URL + `/day`, product, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // .then((product) => dispatch(addProductSuccess(product)))
  // .catch((error) => dispatch(addProductError(error)));
};

// export const deleteProduct = (contactId) => async (dispatch, getState) => {
//   const localId = getState().authorization.tokens.localId;
// const idToken = getState().authorization.tokens.idToken;
//   dispatch(deleteProductRequest());

//   axios
//     .delete(
//       BASE_URL + `/${localId}/contacts/${contactId}.json?auth=${idToken}`,
//       {
//         headers: { Authorization: `Bearer ${idToken}` },
//       }
//     )
//     .then(() => dispatch(deleteProductSuccess(contactId)))
//     .catch((error) => dispatch(deleteProductError(error)));
// };
export const getProducts = () => (dispatch) => {
  dispatch(getProductsRequest());

  axios
    .get(BASE_URL + `/user`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => dispatch(getProductsSuccess(response.data.days)));
  // .catch((error) => dispatch(getProductError(error)));
};
