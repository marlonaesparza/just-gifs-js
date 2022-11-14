const axios = require('axios');


class SocialBusiness {
  constructor() {
    this.getAllPotentialConnections = this.getAllPotentialConnections.bind(this);
    this.createConnection = this.createConnection.bind(this);
    this.createRequest = this.createRequest.bind(this);
    this.deleteConnection = this.deleteConnection.bind(this);
    this.deleteRequest = this.deleteRequest.bind(this);
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
        const { aUUID } = data;
        return res.status(201).send({
          uuid: aUUID,
          username: connection.username,
          status: 'pending'
        });
      })
      .catch((e) => {
        console.log('ERROR createRequest (business):', e);
        return res.status(500).send(connection);
      });
  }
  // ----------------------------------------------------------

  // ----------------------------------------------------------
  /*
    DELETE REQUEST

    SUMMARY
      - Posts a friend request going in one direction.
      - Goes from the user sending the request, to the person receiveing the requestion.
      - Updates status field in connection to 'add'.
    
    PARAMS
      - Request Body carries the Connection's details; uuid
      - Request Cookies carries requesters details; userUUID
  */
    deleteRequest(req, res) {
      const { connection } = req.body;
      const { uuid } = connection;
      let { userUUID } = req.cookies.hpp_session;
      
      axios.delete('http://localhost:8004/requests/delete', {
        data: {
          aUUID: uuid,
          rUUID: userUUID
        }
      })
        .then(({data}) => {
          console.log('Delete Request (Result):', data);
          const { aUUID } = data;

          return res.status(200).send({
            uuid: aUUID,
            username: connection.username,
            status: 'add'
          });
        })
        .catch((e) => {
          console.log(e);
          return res.status(500).send(connection);
        });
    }
    // ----------------------------------------------------------

    // ----------------------------------------------------------
  /*
    CREATE CONNECTION

    SUMMARY
      - Creates a two way friendship.
      - Updates status field in connection to 'delete'.
    
    PARAMS
      - Request Body carries the Connection's details; uuid
      - Request Cookies carries requesters details; userUUID
  */
  createConnection(req, res) {
    console.log('Create Connection (body):', req.body);
    const { uuid } = req.body;
    let { userUUID } = req.cookies.hpp_session;
    
    return axios.post('http://localhost:8004/connections/create', {
      aUUID: userUUID,
      rUUID: uuid
    })
      .then(({ data }) => {
        const { rUUID } = data;
        return res.status(201).send({
          uuid: rUUID,
          username: req.body.username,
          status: 'delete'
        });
      })
      .catch((e) => {
        console.log('Create Connection (error):', e);
        return res.status(500).send({});
      });
  }
  // ----------------------------------------------------------
  
  // ----------------------------------------------------------
  /*
    DELETE CONNECTION

    SUMMARY
      - Deletes the two way friendship.
      - Updates status field in connection to 'add'.
    
    PARAMS
      - Request Body carries the Connection's details; uuid
      - Request Cookies carries requesters details; userUUID
  */
    deleteConnection(req, res) {
      console.log('Delete Connection (body):', req.body);
      const { uuid } = req.body;
      let { userUUID } = req.cookies.hpp_session;
      
      return axios.delete('http://localhost:8004/connections/delete', {
        data: {
          aUUID: userUUID,
          rUUID: uuid
        }
      })
        .then(({data}) => {
          console.log('Delete Connection (Result):', data);
          const { rUUID } = data;

          return res.status(200).send({
            uuid: rUUID,
            username: req.body.username,
            status: 'add'
          });
        })
        .catch((e) => {
          console.log(e);
          return res.status(500).send(connection);
        });
    }
    // ----------------------------------------------------------
};


module.exports = new SocialBusiness;
