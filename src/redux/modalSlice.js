import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
  },

  reducers: {
    showModal: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { showModal } = modalSlice.actions;

export default modalSlice.reducer;
