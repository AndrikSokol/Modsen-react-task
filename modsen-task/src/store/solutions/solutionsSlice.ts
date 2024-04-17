import { createSlice } from '@reduxjs/toolkit';

import { CARD_INFO } from '@/constants/solutionsCard.info';

const initialState = CARD_INFO;

export const solutionsSlice = createSlice({
  name: 'solutions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = solutionsSlice.actions;

export default solutionsSlice.reducer;
