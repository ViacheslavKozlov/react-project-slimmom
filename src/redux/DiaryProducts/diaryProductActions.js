import { createAction } from "@reduxjs/toolkit";

export const addProductRequest = createAction(
  "DiaryProducts/addProductRequest"
);
export const addProductSuccess = createAction(
  "DiaryProducts/addProductSuccess"
);

export const addProductError = createAction("DiaryProducts/addProductError");

export const deleteProductRequest = createAction(
  "DiaryProducts/deleteProductRequest"
);
export const deleteProductSuccess = createAction(
  "DiaryProducts/deleteProductSuccess"
);
export const deleteProductError = createAction(
  "DiaryProducts/deleteProductError"
);

export const getProductsRequest = createAction(
  "DiaryProducts/getProductRequest"
);
export const getProductsSuccess = createAction(
  "DiaryProducts/getProductSuccess"
);
export const getProductsError = createAction("DiaryProducts/getProductError");

export const afterDeleteProductInfoDayRequest = createAction(
  "DiaryProducts/afterDeleteProductInfoDayequest"
);
export const afterDeleteProductInfoDaySucces = createAction(
  "DiaryProducts/afterDeleteProductInfoDaySucces"
);
export const afterDeleteProductInfoDayError = createAction(
  "DiaryProducts/afterDeleteProductInfoDayError"
);

export const changeCurrentDateRequest = createAction(
  "DiaryProducts/changeCurrentDateRequest"
);
export const changeCurrentDateSucces = createAction(
  "DiaryProducts/changeCurrentDateSucces"
);
export const changeCurrentDateError = createAction(
  "DiaryProducts/changeCurrentDateError"
);

export const getDayInfoRequest = createAction(
  "DiaryProducts/getDayInfoRequest"
);
export const getDayInfoSuccess = createAction(
  "DiaryProducts/getDayInfoSuccess"
);
export const getDayInfoError = createAction("DiaryProducts/getDayInfoError");
