import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  loginAuthSuccess,
  logoutAuthSuccess,
  registerAuthSuccess,
} from "../auth/authActions";
import { getDailyRateSucces, setUserData } from "../dailyRate/dailyRateActions";
import {
  addProductSuccess,
  getDayInfoSuccess,
} from "../DiaryProducts/diaryProductActions";
import { getUserInfoSuccess } from "./userActions";

const userInfo = createReducer(
  {
    email: "",
    username: "",
    id: "",
  },
  {
    [registerAuthSuccess]: (_, { payload }) => payload,
    [loginAuthSuccess]: (_, { payload }) => ({
      email: payload.user.email,
      username: payload.user.username,
      id: payload.user.id,
    }),
    [logoutAuthSuccess]: () => ({
      email: "",
      username: "",
      id: "",
    }),
    [getUserInfoSuccess]: (_, { payload }) => ({
      email: payload.email,
      username: payload.username,
      id: payload.id,
    }),
  }
);
const userData = createReducer(
  {
    weight: 0,
    height: 0,
    age: 0,
    bloodType: 1,
    desiredWeight: 0,
    dailyRate: 0,
    notAllowedProducts: [],
  },
  {
    [loginAuthSuccess]: (state, { payload }) => ({
      ...state,
      ...payload.user.userData,
    }),
    [logoutAuthSuccess]: () => ({
      weight: 0,
      height: 0,
      age: 0,
      bloodType: 1,
      desiredWeight: 0,
      dailyRate: 0,
      notAllowedProducts: [],
    }),
    [setUserData]: (state, { payload }) => ({ ...state, ...payload }),
    [getDailyRateSucces]: (state, { payload }) => ({
      ...state,
      dailyRate: payload.dailyRate,
      notAllowedProducts: payload.notAllowedProducts,
    }),
    [getUserInfoSuccess]: (state, { payload }) => ({
      ...state,
      ...payload.userData,
    }),
  }
);

const summaries = createReducer([], {
  [loginAuthSuccess]: (_, { payload }) => payload.summaries || [],
  [getDailyRateSucces]: (_, { payload }) => payload.summaries,
  [logoutAuthSuccess]: () => [],
});

const todaySummary = createReducer(
  {
    date: "",
    kcalLeft: 0,
    kcalConsumed: 0,
    dailyRate: 0,
    percentsOfDailyRate: 0,
    userId: "",
    id: "",
  },
  {
    [loginAuthSuccess]: (state, { payload }) => ({
      ...state,
      ...payload.todaySummary,
    }),

    [logoutAuthSuccess]: () => ({
      date: "",
      kcalLeft: 0,
      kcalConsumed: 0,
      dailyRate: 0,
      percentsOfDailyRate: 0,
      userId: "",
      id: "",
    }),
  }
);

export const userReducer = combineReducers({
  userInfo,
  userData,
  todaySummary,
  summaries,
});

const day = createReducer(
  {
    id: "",
    eatenProducts: [],
    date: "",
    daySummary: "",
  },

  {
    [addProductSuccess]: (state, { payload }) =>
      payload.day
        ? { ...state, ...payload.day }
        : { ...state, ...payload.newDay },
    [getDayInfoSuccess]: (_, { payload }) => ({
      id: payload.id || "",
      eatenProducts: payload.eatenProducts || [],
      date: payload.date || "",
      daySummary: payload.daySummary || "",
    }),
  }
);

const daySummary = createReducer(
  {
    date: "",
    kcalLeft: 0,
    kcalConsumed: 0,
    dailyRate: 0,
    percentsOfDailyRate: 0,
    userId: "",
    id: "",
  },
  {
    [addProductSuccess]: (state, { payload }) =>
      payload.daySummary
        ? { ...state, ...payload.daySummary }
        : { ...state, ...payload.newDaySummary },
    [getDayInfoSuccess]: (state, { payload }) => ({
      ...state,
      ...payload.daySummary,
    }),
  }
);

const days = createReducer([], {
  [getUserInfoSuccess]: (_, { payload }) => payload.days,
});

export const dayReducer = combineReducers({
  day,
  daySummary,
  days,
});
