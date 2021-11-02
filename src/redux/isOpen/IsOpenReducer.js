import { createReducer } from "@reduxjs/toolkit";
import { toggleFrom } from "./IsOpenAction";

const toggleFormReducer = createReducer(false, {
  [toggleFrom]: (state) => !state,
});

export default toggleFormReducer;
