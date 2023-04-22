import { createSlice } from "@reduxjs/toolkit";
import formHandlers from "../../helpers/formHandlers";


export const formSlice = createSlice({
  name: 'formSlice',
  initialState: {
    login: {
      username: '',
      password: '',
    },
    signup: {
      username: '',
      password: '',
      confirmedPassword: '',
    },
    errorMessage: '',

  },
  reducers: {
    setLoginInput: (state, { payload }) => {
      state.login = payload;
    },
    setSignupInput: (state, { payload }) => {
      state.signup = payload;
    },
    setErrorMessage: (state, { payload }) => {
      console.log(payload);
      state.errorMessage = payload;
    },
  }
});


export const {
  setLoginInput,
  setSignupInput,
  setErrorMessage,

} = formSlice.actions;

export default formSlice.reducer;
