import axios from "axios";

const serverIndexURL = 'http://localhost:8000/';
const serverHomePath = 'home/';
const serverSearchPath = 'home/search';

const requestHelpers = {
  getTrendingGifs: (offset = 0, dispatch, action) => {
    axios.get(serverIndexURL + serverHomePath, {
      params: {
        index: offset
      }
    })
      .then((result) => {
        dispatch(action(result.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getSearchedGifs: (offset = 0, search, dispatch, action) => {
    axios.get(serverIndexURL + serverSearchPath, {
      params: {
        index: offset,
        search: search
      }
    })
      .then((result) => {
        dispatch(action(result.data.data));
      })
      .catch((error) => {
        console.log(error);
      })
  }
};


export default requestHelpers;
