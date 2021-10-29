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
} from "./dailyRateActions";
import { loginAuthSuccess, registerAuthSuccess } from "../auth/authActions";
// const initialState = {};

export const dailyCaloriesReducer = createReducer(
  {},
  {
    [getDailyRateSucces]: (state, { payload }) => ({
      ...state,
      notAllowedProducts: payload.notAllowedProducts,
      dailyRate: payload.dailyRate,
    }),
    [getDailyRateByDateSucces]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [loginAuthSuccess]: (_, { payload }) => ({
      username: payload.user.username,
      id: payload.user.id,
      todayDate: payload.todaySummary.date,
      notAllowedProducts: payload.user.userData.notAllowedProducts.slice(0, 5),
      userData: {
        weight: payload.user.userData.weight,
        height: payload.user.userData.height,
        age: payload.user.userData.height,
        bloodType: payload.user.userData.bloodType,
        desiredWeight: payload.user.userData.desiredWeight,
        dailyRate: payload.user.userData.dailyRate,
      },
    }),
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
  [getDailyRateSucces]: () => false,
  [getDailyRateError]: () => false,
});

const dailyCaloriesErrorReducer = createReducer("", {
  [getDailyRateError]: (_, { payload }) => payload,
  [getUserInfoError]: (_, { payload }) => payload,
  [getDailyRateByDateError]: (_, { payload }) => payload,
  [getDailyRateRequest]: () => "",
  [getDailyRateSucces]: () => "",
});

export const dailyRateReducer = combineReducers({
  response: dailyCaloriesReducer,
  isLoading: dailyRateLoaderReducer,
  error: dailyCaloriesErrorReducer,
});
