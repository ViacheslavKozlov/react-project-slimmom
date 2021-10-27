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

export const getProductRequest = createAction(
  "DiaryProducts/getProductRequest"
);
export const getProductSuccess = createAction(
  "DiaryProducts/getProductSuccess"
);
export const getProductError = createAction("DiaryProducts/getProductError");
