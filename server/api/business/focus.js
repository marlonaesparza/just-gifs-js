const axios = require('axios');


class FocusBusiness {
  constructor() {
    this.generalUrl = 'https://api.giphy.com/v1/gifs/';
    this.apiKey = 'api_key=' + process.env.GIPHY_KEY;
    this.getFocusGif = this.getFocusGif.bind(this);
  }

  getFocusGif(req, res) {
    let { userUUID } = req.cookies.hpp_session;
    const id = req.query.id ? req.query.id : 0;
    const focusId = `gif_id=${id}`;
    const url = this.generalUrl + id + '?' + this.apiKey + '&' + focusId;
    
    return axios.get(url)
      .then((results) => {
        const focusGif = results.data;

        return axios.post('http://localhost:8003/base/getPostsStatusesForUser', {
          userUUID,
          posts: JSON.stringify([focusGif.data])
        });
      })
      .then((focusedGifWithStatusResponse) => {
        const focusedGifWithStatus = focusedGifWithStatusResponse.data[0];
        return res.status(200).send(focusedGifWithStatus);
      })
      .catch(e => {
        console.log(e);
        return res.status(500).send();
      });
  }
};


module.exports = new FocusBusiness;
