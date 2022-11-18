const router = require('express').Router();
const HomeBusiness = require('./business/home');


router.get('/', (req, res) => {
  const index = req.query.index ? req.query.index : 0;
  HomeBusiness.getTrendingGifs(index, res);
});

router.get('/search', (req, res) => {
  const index = req.query.index ? req.query.index : 0;
  const search = req.query.search ? req.query.search : '';
  if (search === '') {
    return res.status(200).send({ data: []});
  }
  HomeBusiness.getSearchGifs(index, search, res);
});

router.get('/focus', (req, res) => {
  const focusId = req.query.id;
  HomeBusiness.getFocusGif(focusId, res);
});

router.get('/feed', (req, res) => {
  HomeBusiness.getUsersFeedGifs(req, res);
});


module.exports = router;
