const favoritesRouter = require('express').Router();
const FavoritesBusiness = require('./../business/favorites');


favoritesRouter.get('/user', (req, res) =>{
  // query: {
  //   index: i
  // }
  
  // Fetches from database a user's favorites only.
    // Returns list of all user's favorites.
  // Loops from index + 11.
    // Push list[index]/[index++] into new array.
  // Returns array of objects in order newest to oldest.

  // Note: This create pagination on the client side
  // and loads least amount of data on front-end.
});

favoritesRouter.post('/add', (req, res) => {
  // body: {
  //   uuid: i,
  //   gifId: j,
  //   ...
  // }
  
  // Post to database a single gif that a user favorited.
  // Returns an object of the gif which was just favorited.
});


module.exports = favoritesRouter;
