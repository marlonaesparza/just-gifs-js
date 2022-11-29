const axios = require('axios');
const feed = require('./feed');


class HomeBusiness {
  constructor() {
    this.generalUrl = 'https://api.giphy.com/v1/gifs/';
    this.trendingUrl = 'https://api.giphy.com/v1/gifs/trending?';
    this.searchUrl = 'https://api.giphy.com/v1/gifs/search?';
    this.getAllConnectionsUrl = 'http://localhost:8004/connections/getAllConnections';
    this.getMostRecentFeedUrl = 'http://localhost:8003/base/getMostRecentByOffset';
    this.getPostsStatusesForUser = 'http://localhost:8003/base/getPostsStatusesForUser';
    this.getUsernamesForFavorites = 'http://localhost:8002/user/getUsernamesForFavorites';
    this.apiKey = 'api_key=' + process.env.GIPHY_KEY;
    this.limit = 'limit=12';
    this.getTrendingGifs = this.getTrendingGifs.bind(this);
    this.getSearchGifs = this.getSearchGifs.bind(this);
  }

  //--------------------------------------------------------------------------
  //--------------------------------------------------------------------------
  /* 
    GET TRENDING GIFS
    Purpose: Sends trending gifs with user "liked" status to client.
  */
  async getTrendingGifs(req, res) {
    let { userUUID } = req.cookies.hpp_session;
    const index = req.query.index ? req.query.index : 0;
    const offset = 'offset=' + index;
    const url = this.trendingUrl + this.apiKey + '&' + this.limit + '&' + offset;

    try {
      const trendingGifsResponse = await axios.get(url);
      const trendingGifs = trendingGifsResponse.data.data;

      const trendingGifsWithStatusesResponse = await axios.post(this.getPostsStatusesForUser, {
        userUUID,
        posts: JSON.stringify(trendingGifs)
      });

      const trendingGifsWithStatuses = trendingGifsWithStatusesResponse.data;

      return res.status(200).send(trendingGifsWithStatuses);

    } catch (e) {

      console.log(e)
      return res.status(400).send();
    };
  };
  //--------------------------------------------------------------------------
  //--------------------------------------------------------------------------

  /* 
    GET SEARCHED GIFS
    Purpose: Sends searched gifs, with user "liked" status, to client.
  */
  async getSearchGifs(req, res) {
    let { userUUID } = req.cookies.hpp_session;
    const index = req.query.index ? req.query.index : 0;
    const search = req.query.search ? req.query.search : '';
    const offset = 'offset=' + index;
    const query = 'q=' + search;
    const url = this.searchUrl + this.apiKey + '&' + query + '&' + this.limit + '&' + offset;

    if (search === '') {
      return res.status(200).send({ data: []});
    };
    
    try {
      const searchGifsResponse = await axios.get(url);
      const searchGifs = searchGifsResponse.data.data;
  
      const searchGifsWithStatusesResponse = await axios.post(this.getPostsStatusesForUser, {
        userUUID,
        posts: JSON.stringify(searchGifs)
      });
  
      const searchGifsWithStatuses = searchGifsWithStatusesResponse.data;

      return res.status(200).send(searchGifsWithStatuses);

    } catch (e) {
      
      console.log(e);
      return res.status(400).send();
    };
  };
  //--------------------------------------------------------------------------
  //--------------------------------------------------------------------------

  async getUsersFeedGifs(req, res) {
    const { userUUID } = req.cookies.hpp_session;
    const { offset } = req.query;

    try {

      const connections = await axios.get(this.getAllConnectionsUrl, {
        params: {
          uuid: userUUID
        }
      });

      const feedWithStatuses = await axios.get(this.getMostRecentFeedUrl, {
        params: {
          userUUID,
          offset,
          uuids: connections.data
        }
      });

      if (feedWithStatuses.data.length === 0) {
        return res.status(200).send([]);
      };

      const feedWithUsernames = await axios.get(this.getUsernamesForFavorites, {
        params: {
          posts: feedWithStatuses.data
        }
      });

      return res.status(200).send(feedWithUsernames.data);

    } catch (e) {
      
      console.log(e);
      return res.status(400).send();

    };
  };
};


module.exports = new HomeBusiness;
