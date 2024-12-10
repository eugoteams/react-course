/** @format */

import { configureStore } from "@reduxjs/toolkit";
import selectReducer from "../Slice/SelectSlice";

export default configureStore({
  reducer: {
    select: selectReducer,
  },
});
