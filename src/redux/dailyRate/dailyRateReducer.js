import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getDailyRateError,
  getDailyRateRequest,
  getDailyRateSucces,
  getDailyRateByDateSucces,
  getDailyRateByDateError,
  getDailyRateByDateRequest,
} from "./dailyRateActions";
import { logoutAuthSuccess, registerAuthSuccess } from "../auth/authActions";
import {
  addProductSuccess,
  afterDeleteProductInfoDaySucces,
} from "../DiaryProducts/diaryProductActions";
import { getUserInfoSuccess } from "../user/userActions";

export const dailyCaloriesReducer = createReducer(
  {
    dailyRate: null,
    kcalConsumed: null,
    kcalLeft: null,
    percentsOfDailyRate: null,
    notAllowedProducts: [],
  },
  {
    [getDailyRateSucces]: (state, { payload }) => ({
      ...state,
      notAllowedProducts: payload.notAllowedProducts,
      dailyRate: payload.dailyRate,
    }),

    [getDailyRateByDateSucces]: (state, { payload }) =>
      payload.daySummary
        ? {
            ...state,
            dailyRate: payload.daySummary.dailyRate,
            kcalConsumed: payload.daySummary.kcalConsumed,
            kcalLeft: payload.daySummary.kcalLeft,
            percentsOfDailyRate: payload.daySummary.percentsOfDailyRate,
          }
        : {
            ...state,
            dailyRate: payload.dailyRate,
            kcalConsumed: payload.kcalConsumed,
            kcalLeft: payload.kcalLeft,
            percentsOfDailyRate: payload.percentsOfDailyRate,
          },

    [getUserInfoSuccess]: (state, { payload }) => ({
      ...state,

      notAllowedProducts: payload.userData.notAllowedProducts.slice(0, 5),
      dailyRate: payload.userData.dailyRate || null,
    }),
    [addProductSuccess]: (state, { payload }) => ({
      ...state,
      dailyRate: payload.daySummary?.dailyRate || payload.dailyRate,
      kcalConsumed: payload.daySummary?.kcalConsumed || payload.kcalConsumed,
      kcalLeft: payload.daySummary?.kcalLeft || payload.kcalLeft,
      percentsOfDailyRate:
        payload.daySummary?.percentsOfDailyRate || payload.percentsOfDailyRate,
    }),
    [afterDeleteProductInfoDaySucces]: (state, { payload }) => ({
      ...state,
      kcalConsumed: payload.newDaySummary?.kcalConsumed,
      kcalLeft: payload.newDaySummary?.kcalLeft,
      percentsOfDailyRate: payload.newDaySummary?.percentsOfDailyRate,
    }),

    [registerAuthSuccess]: () => ({
      dailyRate: null,
      kcalConsumed: null,
      kcalLeft: null,
      percentsOfDailyRate: null,
      notAllowedProducts: [],
    }),
    [logoutAuthSuccess]: () => ({
      dailyRate: null,
      kcalConsumed: null,
      kcalLeft: null,
      percentsOfDailyRate: null,
      notAllowedProducts: [],
    }),
  }
);

const dailyRateLoaderReducer = createReducer(false, {
  [getDailyRateRequest]: () => true,
  [getDailyRateByDateRequest]: () => true,
  [getDailyRateSucces]: () => false,
  [getDailyRateByDateSucces]: () => false,
  [getDailyRateError]: () => false,
  [getDailyRateByDateError]: () => false,
});

const dailyCaloriesErrorReducer = createReducer("", {
  [getDailyRateError]: (_, { payload }) => payload,

  [getDailyRateByDateError]: (_, { payload }) => payload,
  [getDailyRateRequest]: () => "",
  [getDailyRateSucces]: () => "",
  [getUserInfoSuccess]: () => "",

  [getDailyRateByDateSucces]: () => "",
  [getDailyRateByDateRequest]: () => "",
});

export const dailyRateReducer = combineReducers({
  response: dailyCaloriesReducer,
  isLoading: dailyRateLoaderReducer,
  error: dailyCaloriesErrorReducer,
});
