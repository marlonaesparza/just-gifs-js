import { createSlice } from "@reduxjs/toolkit";


export const viewsSlice = createSlice({
  name: 'viewsSlice',
  initialState: {
    menuView: false,
    trendingView: true,
    feedView: false,
    findFriendsView: true,
    friendsView: false
  },
  reducers: {
    setMenuView: (state) => {
      state.menuView ?
        state.menuView = false :
        state.menuView = true
    },
    setTrendingView: (state) => {
      state.trendingView = true;
      state.feedView = false;
    },
    setFeedView: (state) => {
      state.trendingView = false;
      state.feedView = true;
    },
    setFindFriendsView: (state) => {
      state.friendsView = false;
      state.findFriendsView = true;
    },
    setFriendsView: (state) => {
      state.findFriendsView = false;
      state.friendsView = true;
    },
  },
});


export const {
  setMenuView,
  setTrendingView,
  setFeedView,
  setFindFriendsView,
  setFriendsView
} = viewsSlice.actions;

export default viewsSlice.reducer;
