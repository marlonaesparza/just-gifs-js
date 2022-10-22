import axios from "axios";
import Cookies from "js-cookie";
import sliceHandlers from "./sliceHandlers";


const serverIndexURL = 'http://localhost:8000/';
const serverHomePath = 'api/home/';
const serverSearchPath = 'api/home/search';
const serverFocusPath = 'api/focus';
const serverAuthPath = 'api/auth'
const serverRegUserPath = 'api/userProfile/register';
const serverLoginUserPath = 'api/userProfile/login';


const reqHandlers = {
  getTrendingGifs: (nextArgs) => {
    const dispatch = nextArgs.dispatch;

    axios.get(serverIndexURL + serverHomePath, {
      params: {
        index: nextArgs.offset
      }
    })
      .then((result) => {
        dispatch(nextArgs.action2(result.data.data));
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
        nextArgs.dispatch(nextArgs.action2(result.data.data));
        nextArgs.dispatch(nextArgs.action3());
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

  authUser: (next, nextArgs) => {
    const dispatch = nextArgs.dispatch;
    axios.get(serverIndexURL + serverAuthPath)
      .then(() => {
        const uuid = JSON.parse(Cookies.get('hpp_session').slice(2)).userUUID;

        if (uuid === null) {
          throw uuid;
        };

        sliceHandlers.authUserSlice(dispatch, true);
        next(nextArgs);
      })
      .catch(() => {
        sliceHandlers.authUserSlice(dispatch, false);
      })
      .then(() => {
        console.log('Fallback (authUser)...');
      });
  },

  resgisterUser: (next, nextArgs, formVals) => {
    const { username, password, confirmedPassword } = formVals;

    axios.post(serverIndexURL + serverRegUserPath, {
      username,
      password,
      confirmedPassword
    })
      .then(({ data }) => {
        next(() => {}, nextArgs);
      })
      .catch(() => {
        console.log('Error (registerUser)...');
      })
      .then(() => {
        console.log('Fallback (registerUser)...');
      });
  },

  loginUser: (next, nextArgs, values) => {
    const { username, password } = values;

    axios.post(serverIndexURL + serverLoginUserPath, {
      username,
      password
    })
      .then(({ data }) => {
        next(() => {}, nextArgs);
      })
      .catch(() => {
        console.log('Error (registerUser)...');
      })
      .then(() => {
        console.log('Fallback (registerUser)...');
      });
  }
};


export default reqHandlers;
