import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import moment from "moment";
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
  changeCurrentDateSucces,
} from "./diaryProductActions";
import {
  getUserInfoError,
  getUserInfoRequest,
  getUserInfoSuccess,
} from "../user/userActions";

import { getDailyRateByDateSucces } from "../dailyRate/dailyRateActions";
import { logoutAuthSuccess } from "../auth/authActions";

const productReducer = createReducer(
  { date: moment(new Date()).format("YYYY-MM-DD"), eatenProducts: [] },
  {
    [addProductSuccess]: (state, { payload }) => ({
      ...state,
      eatenProducts: [...state.eatenProducts, payload.eatenProduct],
    }),
    [getDailyRateByDateSucces]: (state, { payload }) =>
      payload.date
        ? {
            date: payload.date,
            dateId: payload.id,
            eatenProducts: payload.eatenProducts,
          }
        : {
            ...state,
            eatenProducts: [],
          },

    [deleteProductSuccess]: (state, { payload }) => {
      return {
        ...state,
        eatenProducts: state.eatenProducts.filter(
          (product) => product.id !== payload
        ),
      };
    },
    [changeCurrentDateSucces]: (state, { payload }) => ({
      ...state,
      date: payload,
    }),
    [logoutAuthSuccess]: () => ({
      date: null,
      eatenProducts: [],
    }),
  }
);

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

  [getUserInfoRequest]: () => true,
  [getUserInfoSuccess]: () => false,
  [getUserInfoError]: () => false,
});

const errorReducer = createReducer("", {
  [addProductError]: (_, action) => action.payload,
  [deleteProductError]: (_, action) => action.payload,
  [getProductsError]: (_, action) => action.payload,

  [addProductRequest]: () => "",
  [deleteProductRequest]: () => "",
  [getProductsRequest]: () => "",
});

export const productDailyReducer = combineReducers({
  response: productReducer,
  isLoading: loadingReducer,

  error: errorReducer,
});
