const homeRouter = require('express').Router();
const HomeBusinesss = require('./../business/home');


homeRouter.get('/', (req, res) => {
  const index = req.query.index ? req.query.index : 0;
  HomeBusinesss.getTrendingGifs(index, res);
});

homeRouter.get('/feed', (req, res) => {
  // Fetches from database a user's and their friends' favorites.
  // Starts from i, and goes until i + 11 (MAX/MIN: 12).
  // Returns an array of objects in order from newest to oldest.
});

homeRouter.get('/search', (req, res) => {
  const index = req.query.index ? req.query.index : 0;
  const search = req.query.search ? req.query.search : '';

  if (search === '') {
    return res.status(200).send({ data: []});
  }

  HomeBusinesss.getSearchGifs(index, search, res)
});


module.exports = homeRouter;
