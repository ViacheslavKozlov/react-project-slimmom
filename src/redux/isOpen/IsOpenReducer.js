import { createReducer } from "@reduxjs/toolkit";
import { toggleFrom } from "./IsOpenAction";

const toggleFormReducer = createReducer(false, {
  [toggleFrom]: (state, { payload }) => payload,
});

export default toggleFormReducer;
