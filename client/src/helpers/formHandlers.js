const formHandlers = {
  validate: (values) => {
    const { username, password } = values;
    const usernameValid = username.length >= 6 ? true : false;
    const passwordValid = password.length >= 8 ? true : false;

    if (values.confirmedPassword) {
      const confirmPasswordValid1 = values.confirmedPassword ?
        values.confirmedPassword.length === password.length :
        false
      ;

      const confirmPasswordValid2 = !confirmPasswordValid1 ?
        false :
        (() => {
          for (let i = 0; i < password.length; i++) {
            if (password[i] !== values.confirmedPassword[i]) {
              return false;
            }
          } 
          return true;
        })()
      ;


      return usernameValid === true && passwordValid === true && confirmPasswordValid2 === true ?
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
