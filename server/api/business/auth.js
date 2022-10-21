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
  
};


module.exports = new AuthBusiness;
