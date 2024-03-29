// src/features/darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export const selectIsDarkMode = (state: { darkMode: { isDarkMode: boolean; }; }) => state.darkMode.isDarkMode;

export default darkModeSlice.reducer;
