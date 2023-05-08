import { createSlice } from "@reduxjs/toolkit";
import formHandlers from "../../helpers/formHandlers";


export const formSlice = createSlice({
  name: 'formSlice',
  initialState: {
    username: '',
    password: '',
    confirmedPassword: '',
    errorMessage: '',
  },
  reducers: {
    setUsername: (state, { payload }) => {
      state.username = payload;
    },
    setPassword: (state, { payload }) => {
      state.password = payload;
    },
    setConfirmedPassword: (state, { payload }) => {
      state.confirmedPassword = payload;
    },
    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    clearFormSlice: (state, { payload }) => {
      state.username = '';
      state.password = '';
      state.confirmedPassword = '';
      state.errorMessage = '';
    },
  }
});


export const {
  setUsername,
  setPassword,
  setConfirmedPassword,
  setErrorMessage,
  clearFormSlice,
  
} = formSlice.actions;

export default formSlice.reducer;
