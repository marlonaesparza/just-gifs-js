import axios from "axios";

const serverIndexURL = 'http://localhost:8000/';
const serverHomePath = 'home/';

const requestHelpers = {
  getTrendingGifs: (offset = 0, dispatch, action) => {
    axios.get(serverIndexURL + serverHomePath, {
      params: {
        index: offset
      }
    })
      .then((result) => {
        console.log(result.data.data);
        dispatch(action(result.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
};


export default requestHelpers;
