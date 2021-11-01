import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getDailyRateError,
  getDailyRateRequest,
  getDailyRateSucces,
  getDailyRateByDateSucces,
  getUserInfoSucces,
  getUserInfoError,
  getDailyRateByDateError,
  getDailyRateByDateRequest,
} from "./dailyRateActions";
import {
  getUserSuccess,
  loginAuthSuccess,
  registerAuthSuccess,
} from "../auth/authActions";
import {
  addProductSuccess,
  afterDeleteProductInfoDaySucces,
} from "../DiaryProducts/diaryProductActions";
// const initialState = {};

export const dailyCaloriesReducer = createReducer(
  {},
  {
    //refresh
    [getUserSuccess]: (_, { payload }) => ({
      username: payload.username,
      id: payload.id,
      notAllowedProducts: payload.userData.notAllowedProducts.slice(0, 5),
      dailyRate: payload.userData.dailyRate,
      userData: {
        weight: payload.userData.weight,
        height: payload.userData.height,
        age: payload.userData.height,
        bloodType: payload.userData.bloodType,
        desiredWeight: payload.userData.desiredWeight,
        // dailyRate: payload.user.userData.dailyRate,
      },
    }),
    //onSubmit
    [getDailyRateSucces]: (state, { payload }) => ({
      ...state,
      notAllowedProducts: payload.notAllowedProducts,
      dailyRate: payload.dailyRate,
    }),

    [getDailyRateByDateSucces]: (state, { payload }) => {
      return {
        ...state,
        // date: payload.daySummary?.date,
        kcalConsumed: payload.daySummary?.kcalConsumed || payload.kcalConsumed,
        kcalLeft: payload.daySummary?.kcalLeft || payload.kcalLeft,
        percentsOfDailyRate:
          payload.daySummary?.percentsOfDailyRate ||
          payload.percentsOfDailyRate,
      };
    },
    //login
    [loginAuthSuccess]: (_, { payload }) => ({
      username: payload.user.username,
      id: payload.user.id,
      todayDate: payload.todaySummary.date,
      notAllowedProducts: payload.user.userData.notAllowedProducts.slice(0, 5),
      dailyRate: payload.user.userData.dailyRate,
      userData: {
        weight: payload.user.userData.weight,
        height: payload.user.userData.height,
        age: payload.user.userData.height,
        bloodType: payload.user.userData.bloodType,
        desiredWeight: payload.user.userData.desiredWeight,
        // dailyRate: payload.user.userData.dailyRate,
      },
    }),
    [addProductSuccess]: (state, { payload }) => ({
      ...state,
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
    // [changeCurrentDateSucces]: (state, { payload }) => ({
    //   ...state,
    //   date: payload,
    // }),
    // [getDailyRateRequest]: () => {},
    [getUserInfoSucces]: (state, { payload }) => ({
      ...state,
      userData: payload.userData,
    }),
    [registerAuthSuccess]: () => ({}),
    // [loginAuthSuccess]: () => ({}),
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
  [getUserInfoError]: (_, { payload }) => payload,
  [getDailyRateByDateError]: (_, { payload }) => payload,
  [getDailyRateRequest]: () => "",
  [getDailyRateSucces]: () => "",
  [getDailyRateByDateSucces]: () => "",
  [getDailyRateByDateRequest]: () => "",
});

export const dailyRateReducer = combineReducers({
  response: dailyCaloriesReducer,
  isLoading: dailyRateLoaderReducer,
  error: dailyCaloriesErrorReducer,
});
