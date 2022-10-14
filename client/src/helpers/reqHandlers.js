import axios from "axios";

const serverIndexURL = 'http://localhost:8000/';
const serverHomePath = 'api/home/';
const serverSearchPath = 'api/home/search';
const serverFocusPath = 'api/focus';
const serverAuthPath = 'api/auth'

const requestHelpers = {
  getTrendingGifs: (nextArgs) => {
    axios.get(serverIndexURL + serverHomePath, {
      params: {
        index: nextArgs.offset
      }
    })
      .then((result) => {
        nextArgs.dispatch(nextArgs.actions.action1(result.data.data));
        nextArgs.dispatch(nextArgs.actions.action2(result.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getSearchedGifs: (nextArgs) => {
    axios.get(serverIndexURL + serverSearchPath, {
      params: {
        index: nextArgs.offset,
        search: nextArgs.search
      }
    })
      .then((result) => {
        nextArgs.dispatch(nextArgs.actions.action1(result.data.data));
        nextArgs.dispatch(nextArgs.actions.action2(result.data.data));
      })
      .catch((error) => {
        console.log(error);
      })
  },

  getFocusedGif: (nextArgs) => {
    axios.get(serverIndexURL + serverFocusPath, {
      params: {
        id: nextArgs.gifId
      }
    })
      .then((result) => {
        nextArgs.dispatch(nextArgs.actions.action1(result.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },

  authUser: (next, nextArgs, dispatch, actions) => {
    axios.get(serverIndexURL + serverAuthPath)
      .then(() => {
        console.log('AuthUser Response:', document.cookie);
        console.log('Calling next...');
        return next(nextArgs);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        console.log('Error fallback (authUser)...');
      });
  }
};


export default requestHelpers;
