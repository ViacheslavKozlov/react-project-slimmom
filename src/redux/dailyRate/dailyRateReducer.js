import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { getDailyRateError, getDailyRateRequest, getDailyRateSucces } from "./dailyRateActions";

const dailyCaloriesReducer = createReducer(
  {},
  {
    [getDailyRateSucces]: (_, action) => action.payload
  }
);

const dailyCaloriesErrorReducer = createReducer("", {
  [getDailyRateError]: (_, action) => action.payload
});

const dailyRateLoaderReducer = createReducer(false, {
  [getDailyRateRequest]: () => true,
  [getDailyRateSucces]: () => false,
  [getDailyRateError]: () => false
});

export const dailyRateReducer = combineReducers({
  reponse: dailyCaloriesReducer,
  isLoading: dailyRateLoaderReducer,
  error: dailyCaloriesErrorReducer
});
