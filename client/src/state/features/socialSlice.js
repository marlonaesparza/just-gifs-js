import { createSlice } from "@reduxjs/toolkit";


export const socialSlice = createSlice({
  name: 'socialSlice',
  initialState: {
    potentialConnections: [],
    userConnections: [],
  },
  reducers: {
    updatePotentialConnections: (state, { payload }) => {
      state.value = payload;
    },
    updateUserConnections: (state, { payload }) => {
      state.value = payload;
    }
  }
});


export const { updatePotentialConnections, updateUserConnections } = socialSlice.actions;

export default socialSlice.reducer;
