class formHandler {
  constructor() {

  }

  validate(values) {
    const { username, password } = values;
    const usernameValid = this.validateUsername(username);
    const passwordValid = this.validatePassword(password);
    
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
  }

  // utility for checking strings
  specialCharTest(string) {
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const passesSpecialCharsTest = !specialChars.test(string);
    return passesSpecialCharsTest;
  }

  // input: string (represents username)
  // output: boolean (states if username valid)
  validateUsername(username) {
    const passesSpecialCharsTest = this.specialCharTest(username);
    return username.length >= 6 && passesSpecialCharsTest ? true : false;
  }

  // input: string (represents username)
  // output: boolean (states if username valid)
  validatePassword(password) {
    const passesSpecialCharsTest = this.specialCharTest(password);
    return password.length >= 8 && passesSpecialCharsTest ? true : false;
  }

  // input: string (represents username)
  // output: boolean (states if username valid)
  validateConfirmedPassword(password, confirmedPassword) {
    if (this.validatePassword(password) === confirmedPassword) {
      return true;
    } else {
      return false;
    }
  }
};

const formHandlers = {
  validate: (values) => {
    const { username, password } = values;
    const usernameValid = username.length >= 6 ? true : false;
    const passwordValid = password.length >= 8 ? true : false;
    // const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    // return specialChars.test(input);
    
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

module.exports = {
  formHandler,
  formHandlers
};
