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

// export const addProduct = (contact) => (dispatch, getState) => {
//   const localId = getState().authorization.tokens.localId;
// const idToken = getState().authorization.tokens.idToken;
//   dispatch(addProductRequest());

//   axios
//     .post(BASE_URL + `/${localId}/contacts.json?auth=${idToken}`, contact)
//     .then(({ id }) => dispatch(addProductSuccess(contact)))
//     .catch((error) => dispatch(addProductError(error)));
// };

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
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTc5NGE5N2E2Zjk3NjY4ZjdmYzU5MTQiLCJzaWQiOiI2MTdhNTQ2NWE2Zjk3NjY4ZjdmYzU5NDkiLCJpYXQiOjE2MzU0MDY5NDksImV4cCI6MTYzNTQxMDU0OX0.sdE4BnNBnwlQQ5MqTCNTQSLM_fA7KHN0FjHQdaoEzWI";
export const getProducts = () => (dispatch) => {
  dispatch(getProductsRequest());

  axios
    .get(BASE_URL + `/user`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    // .then((response) => console.log(data));
    .then((response) => dispatch(getProductsSuccess(response.data.days)));

  // .catch((error) => dispatch(getProductError(error)));
};
