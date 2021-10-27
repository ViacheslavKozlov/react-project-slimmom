import { createAction } from "@reduxjs/toolkit";

const getDailyRateRequest = createAction("dailyRate/getDailyRateRequest");
const getDailyRateSucces = createAction("dailyRate/getDailyRateSucces");
const getDailyRateError = createAction("dailyRate/getDailyRateError");

const setLoader = createAction("contacts/setLoader");

export {
  getDailyRateRequest,
  getDailyRateSucces,
  getDailyRateError,
  setLoader,
};
