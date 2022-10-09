const axios = require('axios');


class HomeBusiness {
  constructor() {
    this.generalUrl = 'https://api.giphy.com/v1/gifs/';
    this.trendingUrl = 'https://api.giphy.com/v1/gifs/trending?';
    this.searchUrl = 'https://api.giphy.com/v1/gifs/search?';
    this.apiKey = 'api_key=' + process.env.GIPHY_KEY;
    this.limit = 'limit=12';
    this.getTrendingGifs = this.getTrendingGifs.bind(this);
    this.getSearchGifs = this.getSearchGifs.bind(this);
  }

  getTrendingGifs(i, res) {
    const index = i ? i : 0;
    const offset = 'offset=' + index;
    const url = this.trendingUrl + this.apiKey + '&' + this.limit + '&' + offset;

    return axios.get(url)
      .then((results) => {
        const trendingGifs = results.data;
        return res.status(200).send(trendingGifs);
      })
      .catch((error) => {
        return res.status(500).send(error);
      });
  }

  getSearchGifs(i, search, res) {
    const index = i ? i : 0;
    const offset = 'offset=' + index;
    const query = 'q=' + search;
    const url = this.searchUrl + this.apiKey + '&' + query + '&' + this.limit + '&' + offset;

    return axios.get(url)
      .then((results) => {
        const searchGifs = results.data;
        return res.status(200).send(searchGifs);
      })
      .catch((error) => {
        return res.status(500).send(error);
      });
  }

  getUsersFeedGifs(i, res) {
    // Fetches from database a user's and their friends' favorites.
    // Starts from i, and goes until i + 11 (MAX/MIN: 12).
    // Returns an array of objects in order from newest to oldest.
  }
};


module.exports = new HomeBusiness;
