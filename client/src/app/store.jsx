import { configureStore } from "@reduxjs/toolkit";

// slices
// theme slice
import themeReducer from "../features/theme-feature/themeSlice";

// store
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
