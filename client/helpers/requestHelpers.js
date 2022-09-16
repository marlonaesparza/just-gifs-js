import axios from "axios";

const serverIndexURL = 'http://localhost:8000/';
const serverHomePath = 'home/';

const requestHelpers = {
  getTrendingGifs: (offset = 0) => {
    axios.get(serverIndexURL + serverHomePath, {
      params: {
        index: offset
      }
    })
  }
};

requestHelpers.getTrendingGifs(0);


export default requestHelpers;
