const axios = require('axios');


class AuthBusiness {
  constructor() {
    this.authSession = this.authSession.bind(this);
  }

  authSession(req, res) {
    const hpp_session = req.cookies ? req.cookies.hpp_session : undefined;

    return axios.get('http://localhost:8001/auth', {
      params: {
        session: hpp_session
      }
    })
    .then(({ data }) => {
      let { session } = data;
  
      if (!session.userUUID) {
        res.cookie('hpp_session', session);
        return res.status(201).end();
      };

      return res.status(200).end();
    })
    .catch(error => {
      console.log(error);
      return res.status(400).end();
    })
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

        if (!uuid) {
          throw uuid;
        };
        
        return axios.patch('http://localhost:8001/session/updateSession', {
          uuid,
          hash
        });
      })
      .then(({ data }) => {
        let { updated } = data;

        if (!updated) {
          throw updated;
        };

        req.cookies.hpp_session.userUUID = userUUID;
        return res.status(201);
      })
      .catch(() => {
        return res.status(404);
      });
  };

  signupUser(req, res) {
    let { username, password } = req.body;
    let { hash } = req.cookies.hpp_session;
    let userUUID;

    return axios.post('http://localhost:8002/user/register', {
      username,
      password
    })
      .then(({ data }) => {
        let { uuid } = data;
        userUUID = uuid;
        
        return axios.patch('http://localhost:8001/session/updateSession', {
          uuid,
          hash
        });
      })
      .then(({ data }) => {
        let { updated } = data;

        if (!updated) {
          throw updated;
        };

        req.cookies.hpp_session.userUUID = userUUID;
        return res.status(201);
      })
      .catch(() => {
        return res.status(404);
      });
  };
};


module.exports = new AuthBusiness;
