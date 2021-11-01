import axios from "axios";
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
  getDayInfoError
  // getProductError,
} from "./diaryProductActions";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTc5NGE5N2E2Zjk3NjY4ZjdmYzU5MTQiLCJzaWQiOiI2MTdlNmQzM2E2Zjk3NjY4ZjdmYzVhMjkiLCJpYXQiOjE2MzU2NzU0NDMsImV4cCI6MTYzNTY3OTA0M30.nCrIAFfdo-azzNoMw_NmusE-iWJNrJQ5PQ1RSfUEgN8";

export const addProduct = product => (dispatch, getState) => {
  console.log(product);
  // const localId = getState().authorization.tokens.localId;
  // const idToken = getState().authorization.tokens.idToken;
  dispatch(addProductRequest());

  axios
    .post(BASE_URL + `/day`, product)
    .then(product => dispatch(addProductSuccess(product.data)))
    .catch(error => dispatch(addProductError(error)));
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

export const getDayInfo = day => async (dispatch, getState) => {
  const token = getState().authData.accessToken;
  dispatch(getDayInfoRequest());
  try {
    const { data } = await axios.post(`${BASE_URL}/day/info`, day, { headers: { Authorization: `Bearer ${token}` } });
    dispatch(getDayInfoSuccess(data));
  } catch (error) {
    dispatch(getDayInfoError(error.message));
  }
};
