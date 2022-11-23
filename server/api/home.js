const router = require('express').Router();
const HomeBusiness = require('./business/home');


router.get('/', (req, res) => {
  HomeBusiness.getTrendingGifs(req, res);
});

router.get('/search', (req, res) => {
  HomeBusiness.getSearchGifs(req, res);
});

router.get('/focus', (req, res) => {
  const focusId = req.query.id;
  HomeBusiness.getFocusGif(focusId, res);
});

router.get('/feed', (req, res) => {
  HomeBusiness.getUsersFeedGifs(req, res);
});


module.exports = router;
