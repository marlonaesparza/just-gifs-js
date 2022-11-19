import { createSlice } from "@reduxjs/toolkit";


export const gifsSlice = createSlice({
  name: 'gifsSlice',
  initialState: {
    all: [],
    trending: [],
    searched: [],
    feed: [],
    favorites: [],
    focus: {},
  },
  reducers: {
    clearGifsSlice: (state) => {
      state.all = [];
      state.trending = [];
      state.searched = [];
      state.feed = [];
      state.favorites = [];
      state.focus = {};
    },
    updateAllGifs: (state, { payload }) => {
      payload.forEach((gif) => {
        state.all.push(gif);
      });
    },
    updateTrendingGifs: (state, { payload }) => {
      state.trending =  payload;
    },
    updateSearchedGifs: (state, { payload }) => {
      state.searched = payload;
    },
    updateFeedGifs: (state, { payload }) => {
      state.feed = payload;
    },
    updateFocusGif: (state, {payload}) => {
      state.focus = payload;
    },
    updateFavoriteGifs: (state, {payload}) => {
      state.favorites = payload;
    }
  },
});


export const {
  clearGifsSlice,
  updateAllGifs,
  updateTrendingGifs,
  updateSearchedGifs,
  updateFeedGifs,
  updateFocusGif,
  updateFavoriteGifs
} = gifsSlice.actions;

export default gifsSlice.reducer;
