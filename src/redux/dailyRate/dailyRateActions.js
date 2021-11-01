import { createAction } from "@reduxjs/toolkit";

const getDailyRateRequest = createAction("dailyRate/getDailyRateRequest");
const getDailyRateSucces = createAction("dailyRate/getDailyRateSucces");
const getDailyRateError = createAction("dailyRate/getDailyRateError");

const setUserData = createAction("dailyRate/setUserData");

const getDailyRateByDateRequest = createAction("dailyRate/getDailyRatByDateeRequest");
const getDailyRateByDateSucces = createAction("dailyRate/getDailyRateByDateSucces");
const getDailyRateByDateError = createAction("dailyRate/getDailyRateByDateError");

const getUserInfoRequest = createAction("dailyRate/getUserInfoRequest");
const getUserInfoSucces = createAction("dailyRate/getUserInfoSucces");
const getUserInfoError = createAction("dailyRate/getUserInfoError");

const setLoader = createAction("dailyRate/setLoader");

export {
  getDailyRateRequest,
  getDailyRateSucces,
  getDailyRateError,
  setLoader,
  getDailyRateByDateRequest,
  getDailyRateByDateSucces,
  getDailyRateByDateError,
  getUserInfoSucces,
  getUserInfoRequest,
  getUserInfoError,
  setUserData
};
