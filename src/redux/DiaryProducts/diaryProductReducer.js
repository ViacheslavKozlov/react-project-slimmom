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
// import errorReducer from "../errorReducer/errorReducer";
// import isLoadingReduser from "../isLoadingReduser/isLoadingReduser";

// import authRedusers from "../../redux/auth/authReducers";
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
            // date: null,
            // dateId: null,
            // eatenProducts: [],
          },

    [deleteProductSuccess]: (state, { payload }) => {
      // console.log(asd);
      return {
        ...state,
        eatenProducts: state.eatenProducts.filter(
          (product) => product.id !== payload
        ),
        // [deleteProductSuccess]: (state, action) =>
        //   state.filter((product) => product._id !== action.payload),
        // [getProductsSuccess]: (_, action) => action.payload,})
      };
    },
    [changeCurrentDateSucces]: (state, { payload }) => ({
      ...state,
      date: payload,
    }),
    [logoutAuthSuccess]: () => ({
      // date: moment(new Date()).format("YYYY-MM-DD"),
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
  // authData: persistedAuthReducer,
  error: errorReducer,
  // isLoading: isLoadingReduser,
});
