const router = require('express').Router();
const UserProfileBusiness = require('./business/userProfile');


router.post('/register', (req, res) => {
  UserProfileBusiness.registerUser(req, res);
});

router.post('/login', (req, res) => {
  UserProfileBusiness.loginUser(req, res);
});


module.exports = router;
