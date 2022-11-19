const axios = require('axios');


class FocusBusiness {
  constructor() {
    this.generalUrl = 'https://api.giphy.com/v1/gifs/';
    this.apiKey = 'api_key=' + process.env.GIPHY_KEY;
    this.getFocusGif = this.getFocusGif.bind(this);
  }

  getFocusGif(id, res) {
    const focusId = `gif_id=${id}`;
    const url = this.generalUrl + id + '?' + this.apiKey + '&' + focusId;
    
    return axios.get(url)
      .then((results) => {
        const focusGif = results.data;
        return res.status(200).send(focusGif);
      })
      .catch(e => {
        console.log(e);
        return res.status(500).send();
      });
  }
};


module.exports = new FocusBusiness;
