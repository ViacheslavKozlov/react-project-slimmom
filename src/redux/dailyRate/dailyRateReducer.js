import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getDailyRateError,
  getDailyRateRequest,
  getDailyRateSucces,
} from "./dailyRateActions";
import { loginAuthSuccess, registerAuthSuccess } from "../auth/authActions";
const initialState = {};

const dailyCaloriesReducer = createReducer(
  {},
  {
    [getDailyRateSucces]: (_, action) => action.payload,
    // [getDailyRateRequest]: () => {},
    // [registerAuthSuccess]: () => {},
    // [loginAuthSuccess]: () => initialState,
  }
);

const dailyRateLoaderReducer = createReducer(false, {
  [getDailyRateRequest]: () => true,
  [getDailyRateSucces]: () => false,
  [getDailyRateError]: () => false,
});

const dailyCaloriesErrorReducer = createReducer("", {
  [getDailyRateError]: (_, action) => action.payload,
  [getDailyRateRequest]: () => "",
  [getDailyRateSucces]: () => "",
});

export const dailyRateReducer = combineReducers({
  response: dailyCaloriesReducer,
  isLoading: dailyRateLoaderReducer,
  error: dailyCaloriesErrorReducer,
});
