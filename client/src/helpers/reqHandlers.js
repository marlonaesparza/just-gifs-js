import axios from "axios";

const serverIndexURL = 'http://localhost:8000/';
const serverHomePath = 'api/home/';
const serverSearchPath = 'api/home/search';
const serverFocusPath = 'api/home/focus';

const requestHelpers = {
  getTrendingGifs: (offset = 0, dispatch, action1, action2) => {
    axios.get(serverIndexURL + serverHomePath, {
      params: {
        index: offset
      }
    })
      .then((result) => {
        dispatch(action1(result.data.data));
        dispatch(action2(result.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getSearchedGifs: (offset = 0, search, dispatch, action1, action2) => {
    axios.get(serverIndexURL + serverSearchPath, {
      params: {
        index: offset,
        search: search
      }
    })
      .then((result) => {
        dispatch(action1(result.data.data));
        dispatch(action2(result.data.data));
      })
      .catch((error) => {
        console.log(error);
      })
  },
  getFocusedGifs: (id, dispatch, action) => {
    console.log('FG INCOMING REQUEST:', id);
    axios.get(serverIndexURL + serverFocusPath, {
      params: {
        id
      }
    })
      .then((result) => {
        console.log('FG HELPER RESULT:', result);
        dispatch(action(result.data.data));
      })
  }
};


export default requestHelpers;