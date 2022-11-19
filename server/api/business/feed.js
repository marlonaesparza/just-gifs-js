const axios = require('axios');


class FeedBusiness {
  constructor() {
    this.getAllUserFavorites = this.getAllUserFavorites.bind(this);
    this.createAUserFavaorite = this.createAUserFavaorite.bind(this);
    this.deleteAUserFavorite = this.deleteAUserFavorite.bind(this);
  }

  getAllUserFavorites(req, res) {
    const hpp_session = req.cookies ? req.cookies.hpp_session : undefined;

    return axios.get('http://localhost:8003/base/all', {
      params: {
        userUUID: hpp_session.userUUID,
      }
    })
      .then(({ data }) => {
        return res.status(200).send(data);
      })
      .catch(error => {
        console.log(error);
        return res.status(400).send({});
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
        console.log(error);
        return res.status(400).send({});
      });
  }

  deleteAUserFavorite(req, res) {
    return axios.delete('http://localhost:8003/base/delete', {
      userUUID: req.cookies ? req.cookies.hpp_session : undefined,
      ...req.body
    })
      .then(result => {
        console.log('Feed Router (delete):', result);
        return res.status(201).send(result);
      })
      .catch(error => {
        console.log(error);
        return res.status(400).send({});
      });
  }

};


module.exports = new FeedBusiness;
