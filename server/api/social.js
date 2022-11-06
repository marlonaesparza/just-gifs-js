const router = require('express').Router();
const axios = require('axios');


router.post('/createConnection', (req, res) => {
  //
});

router.delete('/deleteConnection', (req, res) => {
  //
});

router.get('/allUserConnections', (req, res) => {
  //
});

router.get('/allPotentialConnections', (req, res) => {
  axios.get('http://localhost:8002/user/all', {
    params: req.query.offset
  })
    .then(({data}) => {
      console.log('RESULT allPotentialConnections:', data);
      return res.status(200).send(data);
    })
    .catch((e) => {
      console.log('ERROR allPotentialConnections:', e);
      return res.status(500).send();
    });
});

router.post('/createRequest', (req, res) => {
  const offset = req.query;
  const connection = req.body;
  console.log('Create Request API (27):', offset, connection);
  return res.status(201).send({});
});

router.delete('/deleteRequest', (req, res) => {
  //
});

router.get('/allRequests', (req, res) => {
  //
});


module.exports = router;
