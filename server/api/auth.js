const router = require('express').Router();
const AuthBusiness = require('./business/auth');


router.get('/', (req, res) => {
  AuthBusiness.authSession(req, res);
});

router.delete('/logout', (req, res) => {
  AuthBusiness.logoutUser(req, res);
});


module.exports = router;
