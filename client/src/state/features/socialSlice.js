import { createSlice } from "@reduxjs/toolkit";


export const socialSlice = createSlice({
  name: 'socialSlice',

  initialState: {
    potentialConnections: [],
    userConnections: [],
    searchedConnections: [],

  },

  reducers: {
    clearSocialSlice: (state) => {
      state.potentialConnections = [];
      state.userConnections = [];
    },
    setConnectionsAndPotentialConnections: (state, { payload }) => {
      state.potentialConnections = payload.filter((connection) => {
        return connection.status !== 'delete'
      });
      state.userConnections = payload.filter((connection) => {
        return connection.status === 'delete'
      })
    },

    updateStatusAfterRequest: (state, { payload }) => {
      // Check payload to see if:
      // - We update potential connections, or user connections.
      // - cc == created connection; dc == deleted connection.

      if ( payload.cc ) {
        // On created connection, filter it out of potential connections.
        state.potentialConnections = state.potentialConnections.filter((connection) => {
          return connection.uuid !== payload.data.uuid
        });
        state.userConnections.push(payload.data);
        
      } else if ( payload.dc ) {
        // On deleted connection, filter it out of user connections.
        state.userConnections = state.userConnections.filter((connection) => {
          return connection.uuid !== payload.data.uuid
        });
        state.potentialConnections.push(payload.data);
         
      } else {
        state.potentialConnections = state.potentialConnections.map((connection) => {
          // On make request, replace the potential connection with the new one;
          // The new connection has an updated status of "pending".
          if (connection.uuid === payload.uuid) {
            return payload;
          };
          return connection;
        });
      }
    },

    setSearchedConnections: (state, payload) => {
      state.searchedConnections = payload;
    },
    
  }
});


export const {
  clearSocialSlice,
  setConnectionsAndPotentialConnections,
  updateStatusAfterRequest,
  setSearchedConnections,
  
} = socialSlice.actions;

export default socialSlice.reducer;
