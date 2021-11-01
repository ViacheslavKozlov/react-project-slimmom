import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { loginAuthSuccess, logoutAuthSuccess, registerAuthSuccess } from "../auth/authActions";
import { getDailyRateSucces, setUserData } from "../dailyRate/dailyRateActions";
import { addProductSuccess } from "../DiaryProducts/diaryProductActions";

const userInfo = createReducer(
  {
    email: "",
    username: "",
    id: ""
  },
  {
    [registerAuthSuccess]: (_, { payload }) => payload,
    [loginAuthSuccess]: (_, { payload }) => ({
      email: payload.user.email,
      username: payload.user.username,
      id: payload.user.id
    }),
    [logoutAuthSuccess]: () => ({
      email: "",
      username: "",
      id: ""
    })
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
    notAllowedProducts: []
  },
  {
    [loginAuthSuccess]: (state, { payload }) => ({ ...state, ...payload.user.userData }),
    [logoutAuthSuccess]: () => ({
      weight: 0,
      height: 0,
      age: 0,
      bloodType: 1,
      desiredWeight: 0,
      dailyRate: 0,
      notAllowedProducts: []
    }),
    [setUserData]: (state, { payload }) => ({ ...state, ...payload }),
    [getDailyRateSucces]: (state, { payload }) => ({
      ...state,
      dailyRate: payload.dailyRate,
      notAllowedProducts: payload.notAllowedProducts
    })
  }
);

const summaries = createReducer([], {
  [loginAuthSuccess]: (_, { payload }) => payload.summaries || [],
  [getDailyRateSucces]: (_, { payload }) => payload.summaries,
  [logoutAuthSuccess]: () => []
});

const todaySummary = createReducer(
  {
    date: "",
    kcalLeft: 0,
    kcalConsumed: 0,
    dailyRate: 0,
    percentsOfDailyRate: 0,
    userId: "",
    id: ""
  },
  {
    [loginAuthSuccess]: (state, { payload }) => ({ ...state, ...payload.todaySummary }),

    [logoutAuthSuccess]: () => ({
      date: "",
      kcalLeft: 0,
      kcalConsumed: 0,
      dailyRate: 0,
      percentsOfDailyRate: 0,
      userId: "",
      id: ""
    })
  }
);

export const userReducer = combineReducers({
  userInfo,
  userData,
  todaySummary,
  summaries
});

// day reducer
const day = createReducer(
  {
    id: "",
    eatenProducts: [],
    date: "",
    daySummary: ""
  },
  {
    [addProductSuccess]: (state, { payload }) => ({ ...state, ...payload.day })
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
    id: ""
  },
  {
    [addProductSuccess]: (state, { payload }) => ({ ...state, ...payload.daySummary })
  }
);

export const dayReducer = combineReducers({
  day,
  daySummary
});
