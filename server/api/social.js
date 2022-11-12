const router = require('express').Router();
const SocialBusiness = require('./business/social');


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
  SocialBusiness.getAllPotentialConnections(req, res);
});

router.post('/createRequest', (req, res) => {
  SocialBusiness.createRequest(req, res);
});

router.delete('/deleteRequest', (req, res) => {
  //
});

router.get('/allRequests', (req, res) => {
  //
});


module.exports = router;
