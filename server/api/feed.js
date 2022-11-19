const router = require('express').Router();
const FeedBusiness = require('./business/feed');


router.get('/all', (req, res) => {
  FeedBusiness.getAllUserFavorites(req, res);
});

router.post('/create', (req, res) => {
  FeedBusiness.createAUserFavaorite(req, res);
});

router.delete('/delete', (req, res) => {
  FeedBusiness.deleteAUserFavorite(req, res);
});


module.exports = router;
