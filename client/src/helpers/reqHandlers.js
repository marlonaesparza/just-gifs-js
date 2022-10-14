import axios from "axios";

const serverIndexURL = 'http://localhost:8000/';
const serverHomePath = 'api/home/';
const serverSearchPath = 'api/home/search';
const serverFocusPath = 'api/focus';
const serverAuthPath = 'api/auth'

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

  getFocusedGif: (id, dispatch, action) => {
    axios.get(serverIndexURL + serverFocusPath, {
      params: {
        id
      }
    })
      .then((result) => {
        dispatch(action(result.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },

  authUser: (dispatch, action) => {
    axios.get(serverIndexURL + serverAuthPath)
      .then(() => {
        console.log('AuthUser Response:', document.cookie);
        return;
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        console.log('Finished request...');
      });
  }
};


export default requestHelpers;
