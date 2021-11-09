import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName:"HomePage"*/)
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Дневник",
    path: "/diary",
    exact: true,
    component: lazy(() =>
      import("../pages/DiaryPage" /*webpackChunkName:"DiaryPage"*/)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Калькулятор",
    path: "/calculator",
    exact: true,
    component: lazy(() =>
      import("../pages/CalculatorPage" /*webpackChunkName:"CalculatorPage"*/)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Вход",
    path: "/login",
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:"AuthPage"*/)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Регистрация",
    path: "/register",
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:"AuthPage"*/)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Home",
    path: "*",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName:"HomePage"*/)
    ),
    isPrivate: false,
    isRestricted: false,
  },
];
