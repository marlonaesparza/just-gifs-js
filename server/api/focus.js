const router = require('express').Router();
const FocusBusiness = require('./business/focus');


router.get('/', (req, res) => {
  FocusBusiness.getFocusGif(req, res);
});


module.exports = router;
