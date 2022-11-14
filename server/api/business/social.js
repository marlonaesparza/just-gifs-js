const axios = require('axios');


class SocialBusiness {
  constructor() {
    this.getAllPotentialConnections = this.getAllPotentialConnections.bind(this);
  }

  getAllPotentialConnections(req, res) {
    let { userUUID } = req.cookies.hpp_session;
    
    return axios.get('http://localhost:8002/user/all', {
      params: req.query.offset
    })
      .then(({data}) => {
        const pConnections = data.filter((connection) => {
          if (connection.uuid !== userUUID) {
            return true;
          }
        });

        return axios.get('http://localhost:8004/connections/connectionStatus', {
          params: {
            userUUID,
            pConnections
          }
        })
      })
      .then(({ data }) => {
        console.log('pConnections w/ Statuses:', data);
        return res.status(200).send(data);
      })
      .catch((e) => {
        console.log('ERROR allPotentialConnections:', e);
        return res.status(500).send();
      });
  }


  // ----------------------------------------------------------
  /*
    CREATE REQUEST

    SUMMARY
      - Posts a friend request going in one direction.
      - Goes from the user sending the request, to the person receiveing the requestion.
      - Updates status field in connection to 'pending'.
    
    PARAMS
      - Request Body carries the Connection's details; uuid
      - Request Cookies carries requesters details; userUUID
  */
  createRequest(req, res) {
    const { connection } = req.body;
    const { uuid } = connection;
    let { userUUID } = req.cookies.hpp_session;
    
    axios.post('http://localhost:8004/requests/create', {
      aUUID: uuid,
      rUUID: userUUID
    })
      .then(({data}) => {
        console.log('Create Request Result (business):', data);
        const { aUUID } = data;
        return res.status(201).send({
          uuid: aUUID,
          username: connection.username,
          status: 'pending'
        });
      })
      .catch((e) => {
        console.log('ERROR createRequest (business):', e);
        return res.status(500).send({});
      });
  }
  // ----------------------------------------------------------
};


module.exports = new SocialBusiness;
