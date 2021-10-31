// import { createSelector } from "@reduxjs/toolkit";

const dailyRateSelector = (state) => state.dailyRate?.response;
const dailyRateLoading = (state) => state.dailyRate?.isLoading;

export { dailyRateSelector, dailyRateLoading };
