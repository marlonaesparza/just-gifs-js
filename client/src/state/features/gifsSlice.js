import { createSlice } from "@reduxjs/toolkit";
import { mapState, filterState } from "./utils";


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
    updateFocusGif: (state, { payload }) => {
      state.focus = payload;
    },
    updateFavoriteGifs: (state, { payload }) => {
      state.favorites = payload;
    },
    updateAllGifsAfterLikeOrDelete: (state, { payload }) => {
      state.trending = mapState(state.trending, payload);
      state.searched = mapState(state.searched, payload);
      state.feed = mapState(state.feed, payload);
      state.favorites = filterState(state.favorites, payload);
      state.focus = payload;
    },
  },
});


export const {
  clearGifsSlice,
  updateAllGifs,
  updateTrendingGifs,
  updateSearchedGifs,
  updateFeedGifs,
  updateFocusGif,
  updateFavoriteGifs,
  updateAllGifsAfterLikeOrDelete,

} = gifsSlice.actions;

export default gifsSlice.reducer;
