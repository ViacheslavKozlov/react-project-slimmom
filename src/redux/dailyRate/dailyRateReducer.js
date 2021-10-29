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
      userData: payload.user.userData,
    }),
    // [getDailyRateRequest]: () => {},
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
