const axios = require('axios');


class FeedBusiness {
  constructor() {
    this.getAllUserFavorites = this.getAllUserFavorites.bind(this);
    this.createAUserFavaorite = this.createAUserFavaorite.bind(this);
    this.deleteAUserFavorite = this.deleteAUserFavorite.bind(this);
    this.getUsernamesForFavorites = 'http://localhost:8002/user/getUsernamesForFavorites';

  }

  getAllUserFavorites(req, res) {
    const hpp_session = req.cookies ? req.cookies.hpp_session : undefined;

    return axios.get('http://localhost:8003/base/all', {
      params: {
        userUUID: hpp_session.userUUID,
      }
    })
      .then(({ data }) => {
        const favorites = data.map((favorite) => {
          return {...favorite, liked: true}
        });

        return axios.get(this.getUsernamesForFavorites, {
          params: {
            posts: favorites
          }
        });
      })
      .then(favoritesWithUsernames => {
        return res.status(200).send(favoritesWithUsernames.data);
      })
      .catch(error => {
        console.log(error);
        return res.status(400).send([]);
      });
  }

  createAUserFavaorite(req, res) {
    return axios.post('http://localhost:8003/base/create', {
      userUUID: req.cookies ? req.cookies.hpp_session.userUUID : undefined,
      ...req.body
    })
      .then(({ data }) => {
        return res.status(201).send(data);
      })
      .catch(error => {
        console.log('error');
        return res.status(400).send({});
      });
  }

  deleteAUserFavorite(req, res) {
    if (!req.cookies.hpp_session) {
      return res.status(400).send({...req.body});
    };

    return axios.delete('http://localhost:8003/base/delete', {
      data: {
        userUUID: req.cookies.hpp_session.userUUID,
        ...req.body
      }
    })
      .then(({ data }) => {
        return res.status(200).send(data);
      })
      .catch(error => {
        console.log('error');
        return res.status(400).send({});
      });
  };
};


module.exports = new FeedBusiness;
