import { createSlice } from "@reduxjs/toolkit";


export const gifsSlice = createSlice({
  name: 'gifsSlice',
  initialState: {
    all: [],
    searched: [],
  },
  reducers: {
    updateTrendingGifs: (state, { payload }) => {
      state.all =  payload;
    },
    updateSearchedGifs: (state, { payload }) => {
      state.searched = payload;
    },
  },
});

export const { updateTrendingGifs, updateSearchedGifs } = gifsSlice.actions;

export default gifsSlice.reducer;
