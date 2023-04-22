const formHandlers = {
  validate: (values) => {
    const { username, password } = values;
    const usernameValid = username.length >= 6 ? true : false;
    const passwordValid = password.length >= 8 ? true : false;

    // if using sign up page
    if (values.confirmedPassword) {
      const confirmedPassword = values.confirmedPassword;
      const confirmedPasswordValid = confirmedPassword === password;

      return usernameValid === true && passwordValid === true && confirmedPasswordValid === true ?
        true :
        false
      ;

    } else {
      // else using login page
      return usernameValid === true && passwordValid === true ?
        true :
        false
      ;
    };
  },

  // input: string (represents username)
  // output: boolean (states if username valid)
  validateUsername: (username) => {
    return username.length >= 6 ? true : false
  },

  // input: string (represents username)
  // output: boolean (states if username valid)
  validatePassword: (password) => {
    return password.length >= 8 ? true : false
  },

  // input: string (represents username)
  // output: boolean (states if username valid)
  validateConfirmedPassword: (password, confirmedPassword) => {
    const vP = (password) => {
      return password.length >= 8 ? true : false
    }; 

    if (vP(password) || password !== confirmedPassword) {
      return false;
    } else {
      return true;
    }
  },

};


export default formHandlers;
