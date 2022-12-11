import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchValue } from '../../state/features/searchSlice';
import { updateSearchedGifs } from '../../state/features/gifsSlice';
import { clearSearchValue, setIsActive } from '../../state/features/searchSlice';
import { setTrendingView } from '../../state/features/viewsSlice';
import { setSearchedConnections } from '../../state/features/socialSlice';
import { setSearchIndex } from '../../state/features/paginationSlice';
import reqHandlers from '../../helpers/reqHandlers';
import SearchInput from '../single/SearchInput';
import Btn from '../single/Btn';


const Search = () => {
  const dispatch = useDispatch();
  const searchSliceValue = useSelector((state) => state.searchSlice.value);
  const gifsSliceSearched = useSelector((state) => state.gifsSlice.searched);
  const searchedConnections = useSelector((state) => state.socialSlice.searchedConnections);
  const findFriendsView = useSelector((state) => state.viewsSlice.findFriendsView)
  const friendsView = useSelector((state) => state.viewsSlice.friendsView)
  
  const handleSearchVal = (e) => {
    e.preventDefault();
    const val = e.target.value;
    dispatch(updateSearchValue(val));
  };
  
  const handleSearchedGifs = (e) => {
    if (searchSliceValue.length === 0) {
      return;
    };
    e.preventDefault();
    const next = reqHandlers.getSearchedGifs;
    const nextArgs = {
      search: searchSliceValue,
      offset: 1,
      dispatch,
      updateSearchedGifs,
      setTrendingView,
      setSearchIndex,
    };
    reqHandlers.authUser(next, nextArgs);
    dispatch(setIsActive());
  };

  const handleSearchedFriends = (e) => {
    e.preventDefault();
    const nextArgs = {
      searched: searchSliceValue,
      dispatch,
      setSearchedConnections,
    };
    
    if (findFriendsView) {
      reqHandlers.searchForPotentialConnections(nextArgs);
    } else if (friendsView) {
      reqHandlers.searchForUserConnections(nextArgs);
    }
  };

  const pathname = location.pathname;
  const cbForSrchBtn = pathname === '/home' ? handleSearchedGifs :
    pathname === '/friends' ? handleSearchedFriends :
    null;
  
  const handleClearSearchedGifsOrFriends = (e) => {
    e.preventDefault();
    if (pathname === '/home') {
      dispatch(updateSearchedGifs([]));
    } else if (pathname === '/friends') {
      dispatch(setSearchedConnections([]))
    };
    dispatch(clearSearchValue());
    dispatch(setIsActive());
  };
  
  return (
    <React.Fragment>
      {
        gifsSliceSearched.length !== 0 || searchedConnections.length !== 0 ?

        <React.Fragment>
            <Btn
              searchBtn={true}
              onClick={handleClearSearchedGifsOrFriends}
            >
              Clear Search
            </Btn>
          </React.Fragment> :

          <React.Fragment>
            <SearchInput
              searchInput={true}
              onChange={handleSearchVal}
              value={searchSliceValue}
            />
            <Btn
              searchBtn={true}
              onClick={cbForSrchBtn}
            >
              Search
            </Btn> 
          </React.Fragment>
      }
    </React.Fragment>
  );
};


export default Search;
