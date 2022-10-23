const router = require('express').Router();
const AuthBusiness = require('./business/auth');


router.get('/', (req, res) => {
  AuthBusiness.authSession(req, res);
});

router.post('/login', (req, res) => {
  AuthBusiness.loginUser(req, res);
});

router.post('/signup', (req, res) => {
  AuthBusiness.signupUser(req, res);
});


module.exports = router;
