const router = require('express').Router();
const FocusBusiness = require('./business/focus');


router.get('/', (req, res) => {
  const id = req.query.id ? req.query.id : 0;
  FocusBusiness.getFocusGif(id, res);
});


module.exports = router;
