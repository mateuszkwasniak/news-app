import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import languageReducer from "./languageSlice";
import modalReducer from "./modalSlice";

export default configureStore({
  reducer: {
    news: newsReducer,
    language: languageReducer,
    modal: modalReducer,
  },
});
