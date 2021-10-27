import { createAction } from "@reduxjs/toolkit";

const getDailyRateRequest = createAction("dailyRate/getDailyRateRequest");
const getDailyRateSucces = createAction("dailyRate/getDailyRateSucces");
const getDailyRateError = createAction("dailyRate/getDailyRateError");

const setLoader = createAction("dailyRate/setLoader");

export { getDailyRateRequest, getDailyRateSucces, getDailyRateError, setLoader };
