// import { createSelector } from "@reduxjs/toolkit";

const dailyRateSelector = (state) => state.rootReducer.dailyRate?.response;

export { dailyRateSelector };
