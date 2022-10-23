const formHandlers = {
  validate: (values) => {
    const { username, password } = values;
    const usernameValid = username.length >= 6 ? true : false;
    const passwordValid = password.length >= 8 ? true : false;

    if (values.confirmedPassword) {
      const confirmedPassword = values.confirmedPassword;
      const confirmedPasswordValid = confirmedPassword === password;

      return usernameValid === true && passwordValid === true && confirmedPasswordValid === true ?
        true :
        false
      ;

    } else {
      return usernameValid === true && passwordValid === true ?
        true :
        false
      ;
    };
  },
  
};


export default formHandlers;
