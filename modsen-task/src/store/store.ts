import { configureStore } from '@reduxjs/toolkit';
import solutionsReducer from './solutions/solutionsSlice';
export const store = configureStore({
  reducer: {
    solutions: solutionsReducer,
  },
});
