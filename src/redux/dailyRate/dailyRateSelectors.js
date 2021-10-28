// import { createSelector } from "@reduxjs/toolkit";

const dailyRateSelector = (state) => state.rootReducer.dailyRate.response;
// const dailyUserIdSelector = (state) => state.rootReducer.dailyRate.response;

export { dailyRateSelector };
