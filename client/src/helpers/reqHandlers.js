import axios from "axios";
import Cookies from "js-cookie";
import { setFeedIndex } from "../state/features/paginationSlice";
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
const serverCreateRequestPath = 'api/social/createRequest';
const serverDeleteRequestPath = 'api/social/deleteRequest';
const serverGetAllRequestsPath = 'api/social/allRequests';
const searchForPotentialConnectionsPath = 'api/social/searchForPotentialConnections';
const searchForUserConnectionsPath = 'api/social/searchForUserConnections';


const reqHandlers = {
  /* 
    GET TRENDING GIFS
    Purpose: Gets trending gifs for home page.
    offset,
      dispatch,
      updateTrendingGifs,
      setTrendingIndex,
      setTrendingView,
  */
  getTrendingGifs: ({offset, dispatch, updateTrendingGifs, updateSearchedGifs, setTrendingIndex, setTrendingView}) => {
    return axios.get(serverIndexURL + serverHomePath, {
      params: {
        offset: offset
      }
    })
      .then(result => {
        if (updateTrendingGifs) {
          dispatch(updateTrendingGifs(result.data));
        };
        if (updateSearchedGifs) {
          dispatch(updateSearchedGifs([]));
        };
        if (setTrendingIndex) {
          dispatch(setTrendingIndex(offset));
        }
        if (setTrendingView) {
          dispatch(setTrendingView());
        };
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------

  /* 
    GET FEED GIFS
    Purpose: Gets feed for a user.
  */
  getFeedGifs: (nextArgs) => {
    const dispatch = nextArgs.dispatch;

    return axios.get(serverIndexURL + serverFeedPath, {
      params: {
        offset: nextArgs.offset
      }
    })
      .then(result => {
        if (nextArgs.updateFeedGifs) {
          dispatch(nextArgs.updateFeedGifs(result.data));
        };
        if (nextArgs.updateSearchedGifs) {
          dispatch(nextArgs.updateSearchedGifs([]));
        };
        if (nextArgs.setFeedView) {
          dispatch(nextArgs.setFeedView());
        };
        if (nextArgs.setFeedIndex) {
          dispatch(nextArgs.setFeedIndex(nextArgs.offset));
        }
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------

  /*  
    GET SEARCHED GIFS
    Purpose: Gets all searched gifs.
  */

  getSearchedGifs: ({ search, offset, dispatch, updateSearchedGifs, setSearchIndex, setTrendingView }) => {
    return axios.get(serverIndexURL + serverSearchPath, {
      params: {
        search,
        offset
      }
    })
      .then(result => {
        dispatch(updateSearchedGifs(result.data));
        dispatch(setSearchIndex(offset));
        dispatch(setTrendingView());
      })
      .catch(e => {
        console.log(e);
      })
  },

  //-----------------------------------------------------
  
  /* 
    GET FOCUSED GIF
    Purpose: Gets focused gif for focus page.
  */

  getFocusedGif: (nextArgs) => {
    return axios.get(serverIndexURL + serverFocusPath, {
      params: {
        id: nextArgs.gifId
      }
    })
      .then(result => {
        nextArgs.dispatch(nextArgs.actions.action1(result.data));
      })
      .catch(e => {
        console.log(e);
      });
  },

  //-----------------------------------------------------

  /* 
    POST FAVORITE GIF
    Purpose: Creates a favorite for a user, then updates the UI.
  */
  postFavoriteGif: (favoritedGif, { dispatch, updateAllGifsAfterLikeOrDelete }) => {
    return axios.post(serverIndexURL + serverPostFavoritePath, {
      ...favoritedGif
    })
      .then(({ data }) => {
        console.log('Post Favorite Gif (result):', data);
        dispatch(updateAllGifsAfterLikeOrDelete(data));
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------

  /* 
    DELETE FAVORITE GIF
    Purpose: Deletes a favorite for a user, then updates the UI.
  */

  deleteFavoriteGif: (favoritedGif, { dispatch, updateAllGifsAfterLikeOrDelete }) => {
    return axios.delete(serverIndexURL + serverDeleteFavoritePath, {
      data: {
        ...favoritedGif
      }
    })
      .then(({ data }) => {
        console.log('Delete Favorite Gif (result):', data);
        dispatch(updateAllGifsAfterLikeOrDelete(data));
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------
  //-----------------------------------------------------

  /* 
    GET FAVORITE GIFS
    Purpose: Gets and updates all user's favorite gifs.
  */
  getFavoriteGifs: ({ offset, dispatch, updateFavoriteGifs }) => {
    return axios.get(serverIndexURL + serverGetAllFavoritesPath, {
      params: {
        index: offset
      }
    })
      .then(({ data }) => {
        dispatch(updateFavoriteGifs(data));
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------

  /* 
    AUTH USER
    Purpose: Gets auth status of a user.
  */
  authUser: (next, nextArgs) => {
    const dispatch = nextArgs.dispatch;

    return axios.get(serverIndexURL + serverAuthPath)
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
      });
  },
  //-----------------------------------------------------

  /* 
    REGISTER USER
    Purpose: Register user upon signup.
  */
  resgisterUser: (next, nextArgs, formVals) => {
    const { username, password, confirmedPassword } = formVals;

    return axios.post(serverIndexURL + serverRegUserPath, {
      username,
      password,
      confirmedPassword
    })
      .then(() => {
        next(() => {}, nextArgs);
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------

  /* 
    LOGIN USER
    Purpose: Login user upon login.
  */
  loginUser: (next, nextArgs, values) => {
    const { username, password } = values;

    return axios.post(serverIndexURL + serverLoginUserPath, {
      username,
      password
    })
      .then(() => {
        next(() => {}, nextArgs);
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------

  /* 
    LOGOUT USER
    Purpose: Destroys a user session and clears the state of the application.
  */
  logoutUser: (nextArgs) => {
    const {
      dispatch,
    } = nextArgs;

    return axios.delete(serverIndexURL + serverLogoutUserPath)
      .then(() => {
        sliceHandlers.clearAppState(dispatch);
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------

  /* 
    CREATE CONNECTION
    Purpose: Create's a connection between two users.
  */
  createConnection: (connection, { dispatch, action1 }) => {
    return axios.post(serverIndexURL + serverCreateConnectionPath, {
      ...connection
    })
      .then(({ data }) => {
        dispatch(action1({data, cc: true}));
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------

  /* 
    DELETE CONNECTION
    Purpose: Deletes a connection between two users.
  */
  deleteConnection: (connection, { dispatch, action1 }) => {
    return axios.delete(serverIndexURL + serverDeleteConnectionPath, {
      data: {
        ...connection
      }
    })
      .then(({ data }) => {
        dispatch(action1({data, dc: true}));
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------

  /*
    GET ALL POTENTIAL CONNECTIONS
    Purpose: Gets all users in network for potential connections and connections.
  */
  getAllPotentialConnections: ({ offset, dispatch, action1 }) => {
    return axios.get(serverIndexURL + serverGetAllPotentialConnectionsPath, {
      params: {
        offset
      }
    })
      .then(({ data }) => {
        dispatch(action1(data));
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------
  /*
    Search For Potential Connections
    Purpose: 
  */
    searchForPotentialConnections: ({ searched, dispatch, setSearchedConnections}) => {
      return axios.get(serverIndexURL + searchForPotentialConnectionsPath, {
        params: {
          searched
        }
      })
        .then(({ data }) => {
          dispatch(setSearchedConnections(data));
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchForUserConnections: ({ searched, dispatch, setSearchedConnections }) => {
      return axios.get(serverIndexURL + searchForUserConnectionsPath, {
        params: {
          searched
        }
      })
        .then(({ data }) => {
          dispatch(setSearchedConnections(data));
        })
        .catch(e => {
          console.log(e);
        });
    },
  //-----------------------------------------------------

  /* 
    CREATE REQUEST
    Purpose: Create a request for a potential connection.
  */
  createRequest: (connection, { dispatch, action1 }) => {
    return axios.post(serverIndexURL + serverCreateRequestPath, {
      connection
    })
      .then(({ data }) => {
        dispatch(action1(data));
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------

  /* 
    DELETE REQUEST
    Purpose: Deletes a request and updates the connection status.
  */
  deleteRequest: (connection, { dispatch, action1 }) => {
    return axios.delete(serverIndexURL + serverDeleteRequestPath, {
      data: {
        connection
      }
    })
      .then(({ data }) => {
        dispatch(action1(data));
      })
      .catch(e => {
        console.log(e);
      });
  },
  //-----------------------------------------------------

  /* 
    GET ALL REQUESTS
    NOTE: Not implemented.
    SEE: getAllPotentialConnections.
  */
  getAllRequests: () => {
    return axios.get(serverIndexURL + serverGetAllRequestsPath)
      .then(({ data }) => {
        
      })
      .catch(e => {
        console.log(e);
      });
  },

};


export default reqHandlers;
