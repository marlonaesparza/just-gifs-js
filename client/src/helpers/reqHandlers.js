import axios from "axios";
import Cookies from "js-cookie";
import sliceHandlers from "./sliceHandlers";


const serverIndexURL = 'http://localhost:8000/';
const serverHomePath = 'api/home/';
const serverFeedPath = 'api/home/feed';
const serverSearchPath = 'api/home/search';
const serverFocusPath = 'api/focus';
const serverAuthPath = 'api/auth'
const serverLogoutUserPath = 'api/auth/logout';
const serverRegUserPath = 'api/userProfile/register';
const serverLoginUserPath = 'api/userProfile/login';
const serverPostFavoritePath = 'api/feed/create';
const serverDeleteFavoritePath = 'api/feed/delete';
const serverGetAllFavoritesPath = 'api/feed/all';
const serverCreateConnectionPath = 'api/social/createConnection';
const serverDeleteConnectionPath = 'api/social/deleteConnection';
const serverGetAllPotentialConnectionsPath = 'api/social/allPotentialConnections';
const serverGetAllUserConnectionsPath = 'api/social/allUserConnections';
const serverCreateRequestPath = 'api/social/createRequest';
const serverDeleteRequestPath = 'api/social/deleteRequest';
const serverGetAllRequestsPath = 'api/social/allRequests';


const reqHandlers = {
  /* 
    GET TRENDING GIFS

    Purpose: Gets all users for potential connections- displays all on the network.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
  getTrendingGifs: (nextArgs) => {
    const dispatch = nextArgs.dispatch;

    axios.get(serverIndexURL + serverHomePath, {
      params: {
        index: nextArgs.offset
      }
    })
      .then((result) => {
        if (nextArgs.updateTrendingGifs) {
          dispatch(nextArgs.updateTrendingGifs(result.data.data));
        };
        if (nextArgs.updateSearchedGifs) {
          dispatch(nextArgs.updateSearchedGifs([]));
        };
        if (nextArgs.setTrendingView) {
          dispatch(nextArgs.setTrendingView());
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /* 
    GET FEED GIFS
    Purpose: Gets feed for a user.
  */
  getFeedGifs: (nextArgs) => {
    const dispatch = nextArgs.dispatch;

    axios.get(serverIndexURL + serverFeedPath, {
      params: {
        offset: nextArgs.offset
      }
    })
      .then((result) => {
        if (nextArgs.updateFeedGifs) {
          dispatch(nextArgs.updateFeedGifs(result.data));
        };
        if (nextArgs.updateSearchedGifs) {
          dispatch(nextArgs.updateSearchedGifs([]));
        };
        if (nextArgs.setFeedView) {
          dispatch(nextArgs.setFeedView());
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /*  
    GET SEARCHED GIFS

    Purpose: Gets all users for potential connections- displays all on the network.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
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


  /* 
    GET FOCUSED GIF

    Purpose: Gets all users for potential connections- displays all on the network.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
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


  /* 
    POST FAVORITE GIF

    Purpose: Gets all users for potential connections- displays all on the network.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
  postFavoriteGif: (favoritedGif) => {
    axios.post(serverIndexURL + serverPostFavoritePath, {
      ...favoritedGif
    })
      .then(({ data }) => {
        console.log('Post Favorite Gif (result):', data);
        return;
      })
      .catch(error => {
        console.log(error);
        return;
      });
  },


  /* 
    GET FAVORITE GIFS

    Purpose: Gets all users for potential connections- displays all on the network.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
  getFavoriteGifs: (nextArgs) => {
    axios.get(serverIndexURL + serverGetAllFavoritesPath, {
      params: {
        index: nextArgs.offset
      }
    })
      .then(({ data }) => {
        nextArgs.dispatch(nextArgs.action1(data));
        return;
      })
      .catch(error => {
        console.log(error);
        return;
      });
  },


  /* 
    AUTH USER

    Purpose: Gets all users for potential connections- displays all on the network.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
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


  /* 
    REGISTER USER

    Purpose: Gets all users for potential connections- displays all on the network.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
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


  /* 
    LOGIN USER

    Purpose: Gets all users for potential connections- displays all on the network.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
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
  },


  /* 
    LOGOUT USER

    Purpose: Destroys a user session and clears the state of the application.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
  logoutUser: (nextArgs) => {
    const {
      dispatch,
    } = nextArgs;

    axios.delete(serverIndexURL + serverLogoutUserPath)
      .then(() => {
        sliceHandlers.clearAppState(dispatch);
      })
      .catch(() => {
        console.log('Error (logout user)...');
      })
      .then(() => {
        console.log('Fallback (logout user)...');
      });
  },


  /* 
    CREATE CONNECTION

    Purpose: Gets all users for potential connections- displays all on the network.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
  createConnection: (connection, { dispatch, action1 }) => {
    return axios.post(serverIndexURL + serverCreateConnectionPath, {
      ...connection
    })
      .then(({ data }) => {
        console.log('Create connection (result):', data);
        dispatch(action1({data, cc: true}));
      })
      .catch((e) => {
        console.log('Error (create connection):', e);
      })
      .then(() => {
        console.log('Fallback (create connection)...');
      });
  },

  /* 
    DELETE CONNECTION

    Purpose: Gets all users for potential connections- displays all on the network.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
  deleteConnection: (connection, { dispatch, action1 }) => {
    return axios.delete(serverIndexURL + serverDeleteConnectionPath, {
      data: {
        ...connection
      }
    })
      .then(({ data }) => {
        console.log('Delete connection (result):', data);
        dispatch(action1({data, dc: true}));
      })
      .catch(() => {
        console.log('Error (delete connection)...');
      })
      .then(() => {
        console.log('Fallback (delete connection)...');
      });
  },

  /*
    GET ALL POTENTIAL CONNECTIONS

    Purpose: Gets all users for potential connections- displays all on the network.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
  getAllPotentialConnections: ({ offset, dispatch, action1 }) => {
    axios.get(serverIndexURL + serverGetAllPotentialConnectionsPath, {
      params: {
        offset
      }
    })
      .then(({ data }) => {
        dispatch(action1(data));
      })
      .catch(() => {
        console.log('Error (get all connection)...');
      });
  },


  /* 
    CREATE REQUEST

    Purpose: Create a request for a potential connection.
    Inputs: {...}
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
  createRequest: (connection, { dispatch, action1 }) => {
    axios.post(serverIndexURL + serverCreateRequestPath, {
      connection
    })
      .then(({ data }) => {
        console.log('Create Request (data):', data);
        dispatch(action1(data));
      })
      .catch(() => {
        console.log('Error (create request)...');
      })
      .then(() => {
        console.log('Fallback (create request)...');
      });
  },

  /* 
    DELETE REQUEST

    Purpose: Deletes a request and updates the connection status.
    Inputs: Connection to delete, and a dispatch + action to update UI state.
  */
  deleteRequest: (connection, { dispatch, action1 }) => {
    axios.delete(serverIndexURL + serverDeleteRequestPath, {
      data: {
        connection
      }
    })
      .then(({ data }) => {
        console.log('Delete Request (data):', data);
        dispatch(action1(data));
      })
      .catch(() => {
        console.log('Error (delete request)...');
      })
      .then(() => {
        console.log('Fallback (delete request)...');
      });
  },

  /* 
    GET ALL REQUESTS

    Purpose: Gets all users for potential connections- displays all on the network.
    Inputs: N/A
    Outputs: [{}, {}, {}, ...]
    Exceptions: N/A
  */
  getAllRequests: () => {
    axios.get(serverIndexURL + serverGetAllRequestsPath)
      .then(({ data }) => {
        
      })
      .catch(() => {
        console.log('Error (get all request)...');
      })
      .then(() => {
        console.log('Fallback (get all request)...');
      });
  },

};


export default reqHandlers;
