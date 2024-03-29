const axios = require('axios');


class UserProfileBusiness {
  constructor() {
    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  registerUser(req, res) {
    let { username, password, confirmedPassword } = req.body;
    let { hash } = req.cookies.hpp_session;
    let user;
    let userUUID;

    if (password !== confirmedPassword) {
      return res.status(400).send();
    };

    return axios.post('http://localhost:8002/user/register', {
      username,
      password
    })
      .then(({ data }) => {
        console.log('Data Log:', data);
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

        let cookie = req.cookies.hpp_session;
        cookie.userUUID = userUUID;
        cookie.username = username;
        res.cookie('hpp_session', cookie);
        return res.status(201).send({ user });
      })
      .catch(e => {
        console.log('Error Message Log:', e);
        return res.status(500).send(e);
      });
  };

  loginUser(req, res) {
    let { username, password } = req.body;
    let { hash } = req.cookies.hpp_session;
    let userUUID;

    return axios.post('http://localhost:8002/user/auth', {
      username,
      password
    })
      .then(({ data }) => {
        let { uuid } = data;
        userUUID = uuid;

        if (!userUUID) {
          throw userUUID;
        };
        
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
        cookie.username = username;
        res.cookie('hpp_session', cookie);
        return res.status(201).send({ });
      })
      .catch(() => {
        return res.status(404).send({ });
      });
  };
  
};


module.exports = new UserProfileBusiness;
