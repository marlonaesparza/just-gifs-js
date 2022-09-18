import { createSlice } from "@reduxjs/toolkit";


export const trendingGifsSlice = createSlice({
  name: 'trendingGifs',
  initialState: {
    all: [],
  },
  reducers: {
    updateTrendingGifs: (state, { payload }) => {
      state.all =  payload;
    },
  },
});

export const { updateTrendingGifs } = trendingGifsSlice.actions;

export default trendingGifsSlice.reducer;
