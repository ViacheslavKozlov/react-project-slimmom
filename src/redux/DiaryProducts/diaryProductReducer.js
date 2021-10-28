import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
} from "./diaryProductActions";

const productReducer = createReducer([], {
  [addProductSuccess]: (state, action) => [...state, action.payload],
  // [deleteProductSuccess]: (state, action) =>
  //   state.filter(() => contact.id !== action.payload),
  [getProductsSuccess]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [getProductsRequest]: () => true,
  [getProductsSuccess]: () => false,
  [getProductsError]: () => false,

  [addProductRequest]: () => true,
  [addProductSuccess]: () => false,
  [addProductError]: () => false,

  [deleteProductRequest]: () => true,
  [deleteProductSuccess]: () => false,
  [deleteProductError]: () => false,
});

// const errorReducer = createReducer("", {
//   [addContactError]: (_, action) => action.payload,
//   [deleteContactError]: (_, action) => action.payload,
//   [getContactsError]: (_, action) => action.payload,

//   [addContactRequest]: () => "",
//   [deleteContactRequest]: () => "",
//   [getContactsRequest]: () => "",
//   [signOutSuccess]: () => "",
// });

export const productDailyReducer = combineReducers({
  products: productReducer,
  loading: loadingReducer,
  //   error: errorReducer,
});
