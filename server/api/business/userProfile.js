const axios = require('axios');


class UserProfileBusiness {
  constructor() {
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(req, res) {
    let { username, password, confirmedPassword } = req.body;
    let { hash } = req.cookies.hpp_session;
    let user;
    let userUUID;

    if (password !== confirmedPassword) {
      console.log('Passwords dont match...')
      return res.status(400);
    };

    return axios.post('http://localhost:8002/user/register', {
      username,
      password
    })
      .then(({ data }) => {
        console.log(data);
        user = data;
        userUUID = data.uuid;
        
        return axios.patch('http://localhost:8001/session/updateSession', {
          userUUID,
          hash
        });
      })
      .then(({ data }) => {
        let { updated } = data;

        if (!updated) {
          throw updated;
        };

        let cookie = req.cookies;
        cookie.userUUID = userUUID;

        console.log('Register Updated Cookies:',);
        res.cookie('hpp_session', cookie);
        return res.status(201).send({ user });
      })
      .catch((e) => {
        console.log(e);
        return res.status(500);
      });
  };

};


module.exports = new UserProfileBusiness;
