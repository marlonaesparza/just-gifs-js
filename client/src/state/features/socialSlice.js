import { createSlice } from "@reduxjs/toolkit";


export const socialSlice = createSlice({
  name: 'socialSlice',
  initialState: {
    potentialConnections: [],
    userConnections: [],
  },
  reducers: {
    updatePotentialConnections: (state, { payload }) => {
      console.log('Update Potential Connections (paylood):', payload);
      state.potentialConnections = payload;
    },
    updateStatusAfterRequest: (state, { payload }) => {
      state.potentialConnections = state.potentialConnections.map((connection) => {
        if (connection.uuid === payload.uuid) {
          console.log('Update Status After Request:', payload);
          return payload;
        };
        return connection;
      });
    },
    updateUserConnections: (state, { payload }) => {
      state.userConnections = payload;
    }
  }
});


export const { updatePotentialConnections, updateUserConnections, updateStatusAfterRequest } = socialSlice.actions;

export default socialSlice.reducer;
