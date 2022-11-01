const router = require('express').Router();
const axios = require('axios');


router.get('/all', (req, res) => {
  const hpp_session = req.cookies ? req.cookies.hpp_session : undefined;
  console.log('Feed Params (all):', req.query);

  return axios.get('http://localhost:8003/base/all', {
    params: {
      userUUID: hpp_session.userUUID,
    }
  })
    .then(({ data }) => {
      console.log('Feed Router (all):', data);
      return res.status(200).send(data);
    })
    .catch(error => {
      console.log(error);
      return res.status(400).send({});
    });
});

router.post('/create', (req, res) => {
  return axios.post('http://localhost:8003/base/create', {
    userUUID: req.cookies ? req.cookies.hpp_session.userUUID : undefined,
    ...req.body
  })
    .then(({ data }) => {
      return res.status(201).send(data);
    })
    .catch(error => {
      console.log(error);
      return res.status(400).send({});
    });
});

router.delete('/delete', (req, res) => {
  return axios.delete('http://localhost:8003/base/delete', {
    userUUID: req.cookies ? req.cookies.hpp_session : undefined,
    ...req.body
  })
    .then(result => {
      console.log('Feed Router (delete):', result);
      return res.status(201).send(result);
    })
    .catch(error => {
      console.log(error);
      return res.status(400).send({});
    });
});


module.exports = router;
