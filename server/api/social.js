const router = require('express').Router();
const SocialBusiness = require('./business/social');


router.get('/allPotentialConnections', (req, res) => {
  return SocialBusiness.getAllPotentialConnections(req, res);
});


router.get('/searchForPotentialConnections', (req, res) => {
  return SocialBusiness.searchForPotentialConnections(req, res);
});

router.get('/searchForUserConnections', (req, res) => {
  return SocialBusiness.searchForUserConnections(req, res);
});

router.post('/createConnection', (req, res) => {
  return SocialBusiness.createConnection(req, res);
});

router.delete('/deleteConnection', (req, res) => {
  return SocialBusiness.deleteConnection(req, res);
});


router.post('/createRequest', (req, res) => {
  return SocialBusiness.createRequest(req, res);
});

router.delete('/deleteRequest', (req, res) => {
  return SocialBusiness.deleteRequest(req, res);
});


module.exports = router;
