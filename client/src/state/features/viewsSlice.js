import { createSlice } from "@reduxjs/toolkit";


export const viewsSlice = createSlice({
  name: 'viewsSlice',
  initialState: {
    trendingView: true,
    feedView: false,
    strangersView: false,
    friendsView: false,
    menuView: false,
  },
  reducers: {
    setTrendingView: (state) => {
      state.trendingView = true;
      state.feedView = false;
      state.strangersView = false;
      state.friendsView = false;
    },
    setFeedView: (state) => {
      state.trendingView = false;
      state.feedView = true;
      state.strangersView = false;
      state.friendsView = false;
    },
    setStrangersView: (state) => {
      state.trendingView = false;
      state.feedView = false;
      state.strangersView = true;
      state.friendsView = false;
    },
    setFriendsView: (state) => {
      state.trendingView = false;
      state.feedView = false;
      state.strangersView = false;
      state.friendsView = true;
    },
    setMenuView: (state) => {
      if (state.menuView) {
        state.menuView = false;
      } else {
        state.menuView = true;
      };
    }
  },
});


export const {
  setTrendingView,
  setFeedView,
  setStrangersView,
  setFriendsView,
  setMenuView,
  
} = viewsSlice.actions;

export default viewsSlice.reducer;
