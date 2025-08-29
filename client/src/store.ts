import { configureStore } from "@reduxjs/toolkit";

// reducers
import trackers from "./features/trackers/trackers.slice";

// store
export const store = configureStore({
  reducer: {
    trackers,
  },
});

// root state
export type RootState = ReturnType<typeof store.getState>;
// app dispatch
export type AppDispatch = typeof store.dispatch;
