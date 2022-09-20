import { createSlice } from "@reduxjs/toolkit";


export const gifsSlice = createSlice({
  name: 'gifsSlice',
  initialState: {
    all: [],
  },
  reducers: {
    updateTrendingGifs: (state, { payload }) => {
      state.all =  payload;
    },
  },
});

export const { updateTrendingGifs } = gifsSlice.actions;

export default gifsSlice.reducer;
