import { createSlice } from "@reduxjs/toolkit";


export const gifsSlice = createSlice({
  name: 'gifsSlice',
  initialState: {
    all: [],
    searched: [],
    focus: {}
  },
  reducers: {
    updateTrendingGifs: (state, { payload }) => {
      state.all =  payload;
    },
    updateSearchedGifs: (state, { payload }) => {
      state.searched = payload;
    },
    updateFocusGif: (state, {payload}) => {
      state.focus = payload;
    }
  },
});


export const { updateTrendingGifs, updateSearchedGifs, updateFocusGif } = gifsSlice.actions;

export default gifsSlice.reducer;
