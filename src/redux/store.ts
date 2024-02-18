// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeSlice';

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    // Add other reducers here if any
  },
});
