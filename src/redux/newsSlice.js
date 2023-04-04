import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    type: "list",
  },

  reducers: {
    switchType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { switchType } = newsSlice.actions;
export default newsSlice.reducer;
