import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "eng",
  },

  reducers: {
    switchLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { switchLang } = languageSlice.actions;

export default languageSlice.reducer;
