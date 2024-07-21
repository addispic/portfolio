import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  isDarkMood: true,
  theme: {
    darKThem: "bg-dark-dark text-light-dark",
    lightTheme: "",
  }
};

// theme slice
const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    // theme switcher
    themeSwitcher: (state) => {
        state.isDarkMood = !state.isDarkMood;
    },
  },
});

// selectors
// isDarkMood selector
export const selectIsDarkMood = state => state.theme.isDarkMood
// dark

// controllers
export const {
    themeSwitcher,
} = themeSlice.actions

// default exports
export default themeSlice.reducer;
