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
import errorReducer from "../errorReducer/errorReducer";
import isLoadingReduser from "../isLoadingReduser/isLoadingReduser";
import authRedusers from "../../redux/auth/authReducers";

const productReducer = createReducer([], {
  [addProductSuccess]: (state, action) => [...state, action.payload],
  // [deleteProductSuccess]: (state, action) =>
  //   state.filter((product) => product._id !== action.payload),
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
//   [addProductError]: (_, action) => action.payload,
//   [deleteProductError]: (_, action) => action.payload,
//   [getProductsError]: (_, action) => action.payload,

//   [addProductRequest]: () => "",
//   [deleteProductRequest]: () => "",
//   [getProductsRequest]: () => "",
// });

export const productDailyReducer = combineReducers({
  items: productReducer,
  loading: loadingReducer,
  authData: authRedusers,
  error: errorReducer,
  isLoading: isLoadingReduser,
});
