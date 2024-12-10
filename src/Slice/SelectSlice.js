/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
  name: "select",
  initialState: {
    itemSelected: "Please select from dropdown.",
  },
  reducers: {
    updateSelect: (state, action) => {
      state.itemSelected = action.payload;
    },
  },
});

export const { updateSelect } = selectSlice.actions;
export default selectSlice.reducer;
