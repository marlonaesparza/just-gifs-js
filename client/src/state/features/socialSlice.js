import { createSlice } from "@reduxjs/toolkit";


export const socialSlice = createSlice({
  name: 'socialSlice',

  initialState: {
    potentialConnections: [],
    userConnections: [],
  },

  reducers: {
    clearSocialSlice: (state) => {
      state.potentialConnections = [];
      state.userConnections = [];
    },
    updatePotentialConnections: (state, { payload }) => {
      state.potentialConnections = payload.filter((connection) => {
        return connection.status !== 'delete'
      });
      state.userConnections = payload.filter((connection) => {
        return connection.status === 'delete'
      })
    },

    updateStatusAfterRequest: (state, { payload }) => {
      if ( payload.cc ) {
        state.potentialConnections = state.potentialConnections.filter((connection) => {
          return connection.uuid !== payload.data.uuid
        });
        console.log('Update Status After Request (data):', payload.data);
        state.userConnections.push(payload.data);
        
      } else if ( payload.dc ) {
        state.userConnections = state.userConnections.filter((connection) => {
          return connection.uuid !== payload.data.uuid
        });
        console.log('Update Status After Request (data):', payload.data);
        state.potentialConnections.push(payload.data);
        
      } else {
        state.potentialConnections = state.potentialConnections.map((connection) => {
          if (connection.uuid === payload.uuid) {
            return payload;
          };
          return connection;
        });
      }
    },

    updateUserConnections: (state, { payload }) => {
      state.userConnections = payload;
    }
  }
});


export const {
  clearSocialSlice,
  updatePotentialConnections,
  updateUserConnections,
  updateStatusAfterRequest
} = socialSlice.actions;

export default socialSlice.reducer;
