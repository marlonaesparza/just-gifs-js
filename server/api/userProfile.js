const router = require('express').Router();
const UserProfileBusiness = require('./business/userProfile');


router.post('/register', (req, res) => {
  UserProfileBusiness.registerUser(req, res);
});


module.exports = router;
