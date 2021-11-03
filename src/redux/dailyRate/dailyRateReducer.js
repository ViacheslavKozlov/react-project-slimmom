import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getDailyRateError,
  getDailyRateRequest,
  getDailyRateSucces,
  getDailyRateByDateSucces,
  // getUserInfoRequest,
  // getUserInfoSucces,
  // getUserInfoError,
  getDailyRateByDateError,
  getDailyRateByDateRequest
} from "./dailyRateActions";
import { logoutAuthSuccess, registerAuthSuccess } from "../auth/authActions";
import { addProductSuccess, afterDeleteProductInfoDaySucces } from "../DiaryProducts/diaryProductActions";
import {
  // getUserInfoError,
  // getUserInfoRequest,
  getUserInfoSuccess
} from "../user/userActions";
// const initialState = {};

export const dailyCaloriesReducer = createReducer(
  {
    dailyRate: null,
    kcalConsumed: null,
    kcalLeft: null,
    percentsOfDailyRate: null,
    notAllowedProducts: []
  },
  {
    //refresh
    // [getUserSuccess]: (_, { payload }) => ({
    //   username: payload.username,
    //   id: payload.id,
    //   notAllowedProducts: payload.userData.notAllowedProducts.slice(0, 5),
    //   dailyRate: payload.userData.dailyRate,
    //   userData: {
    //     weight: payload.userData.weight,
    //     height: payload.userData.height,
    //     age: payload.userData.height,
    //     bloodType: payload.userData.bloodType,
    //     desiredWeight: payload.userData.desiredWeight,
    //     // dailyRate: payload.user.userData.dailyRate,
    //   },
    // }),
    // [getUserInfoSuccess]: (state, { payload }) => ({
    //   ...state,
    //   notAllowedProducts: payload.userData.notAllowedProducts,
    //   dailyRate: payload.userData.dailyRate || null,
    // }),
    //onSubmit
    [getDailyRateSucces]: (state, { payload }) => ({
      ...state,
      notAllowedProducts: payload.notAllowedProducts,
      dailyRate: payload.dailyRate
    }),

    [getDailyRateByDateSucces]: (state, { payload }) =>
      payload.daySummary
        ? {
            ...state,
            dailyRate: payload.daySummary.dailyRate,
            kcalConsumed: payload.daySummary.kcalConsumed,
            kcalLeft: payload.daySummary.kcalLeft,
            percentsOfDailyRate: payload.daySummary.percentsOfDailyRate
          }
        : {
            ...state,
            dailyRate: payload.dailyRate,
            kcalConsumed: payload.kcalConsumed,
            kcalLeft: payload.kcalLeft,
            percentsOfDailyRate: payload.percentsOfDailyRate
          },

    //login
    [getUserInfoSuccess]: (state, { payload }) => ({
      ...state,
      // username: payload.user.username,
      // id: payload.user.id,
      // todayDate: payload.todaySummary.date,
      notAllowedProducts: payload.userData.notAllowedProducts.slice(0, 5),
      dailyRate: payload.userData.dailyRate || null
      // userData: {
      //   weight: payload.user.userData.weight,
      //   height: payload.user.userData.height,
      //   age: payload.user.userData.height,
      //   bloodType: payload.user.userData.bloodType,
      //   desiredWeight: payload.user.userData.desiredWeight,
      //   // dailyRate: payload.user.userData.dailyRate,
      // },
    }),
    [addProductSuccess]: (state, { payload }) => ({
      ...state,
      dailyRate: payload.daySummary?.dailyRate || payload.dailyRate,
      kcalConsumed: payload.daySummary?.kcalConsumed || payload.kcalConsumed,
      kcalLeft: payload.daySummary?.kcalLeft || payload.kcalLeft,
      percentsOfDailyRate: payload.daySummary?.percentsOfDailyRate || payload.percentsOfDailyRate
    }),
    [afterDeleteProductInfoDaySucces]: (state, { payload }) => ({
      ...state,
      kcalConsumed: payload.newDaySummary?.kcalConsumed,
      kcalLeft: payload.newDaySummary?.kcalLeft,
      percentsOfDailyRate: payload.newDaySummary?.percentsOfDailyRate
    }),
    // [changeCurrentDateSucces]: (state, { payload }) => ({
    //   ...state,
    //   date: payload,
    // }),

    [registerAuthSuccess]: () => ({
      dailyRate: null,
      kcalConsumed: null,
      kcalLeft: null,
      percentsOfDailyRate: null,
      notAllowedProducts: []
    }),
    [logoutAuthSuccess]: () => ({
      dailyRate: null,
      kcalConsumed: null,
      kcalLeft: null,
      percentsOfDailyRate: null,
      notAllowedProducts: []
    })
    // [loginAuthSuccess]: () => ({}),
  }
);

const dailyRateLoaderReducer = createReducer(false, {
  [getDailyRateRequest]: () => true,
  [getDailyRateByDateRequest]: () => true,
  [getDailyRateSucces]: () => false,
  [getDailyRateByDateSucces]: () => false,
  [getDailyRateError]: () => false,
  [getDailyRateByDateError]: () => false
  // [getUserInfoRequest]: () => true,
  // [getUserInfoSuccess]: () => false,
  // [getUserInfoError]: () => false,
});

const dailyCaloriesErrorReducer = createReducer("", {
  [getDailyRateError]: (_, { payload }) => payload,
  // [getUserInfoError]: (_, { payload }) => payload,
  [getDailyRateByDateError]: (_, { payload }) => payload,
  [getDailyRateRequest]: () => "",
  [getDailyRateSucces]: () => "",
  [getUserInfoSuccess]: () => "",
  // [getUserInfoRequest]: () => "",
  [getDailyRateByDateSucces]: () => "",
  [getDailyRateByDateRequest]: () => ""
});

export const dailyRateReducer = combineReducers({
  response: dailyCaloriesReducer,
  isLoading: dailyRateLoaderReducer,
  error: dailyCaloriesErrorReducer
});
