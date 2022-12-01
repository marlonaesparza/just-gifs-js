import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchValue } from '../../state/features/searchSlice';
import { updateAllGifs, updateSearchedGifs } from '../../state/features/gifsSlice';
import { clearSearchValue } from '../../state/features/searchSlice';
import { setTrendingView } from '../../state/features/viewsSlice';
import { setSearchedConnections } from '../../state/features/socialSlice';
import requestHelpers from '../../helpers/reqHandlers';
import SearchInput from '../single/SearchInput';
import Btn from '../single/Btn';


const Search = () => {
  const dispatch = useDispatch();
  const searchSliceValue = useSelector((state) => state.searchSlice.value);
  const gifsSliceSearched = useSelector((state) => state.gifsSlice.searched);
  const searchedConnections = useSelector((state) => state.socialSlice.searchedConnections);
  
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
    const nextArgs = {
      offset: 0,
      search: searchSliceValue,
      dispatch,
      action1: updateAllGifs,
      action2: updateSearchedGifs,
      action3: clearSearchValue,
      action4: setTrendingView
    };

    requestHelpers.getSearchedGifs(nextArgs);
  };

  const handleSearchedFriends = (e) => {
    e.preventDefault();
    const nextArgs = {
      offset: 0,
      search: searchSliceValue,
      dispatch,
      setSearchedConnections,
      clearSearchValue,
    };

    requestHelpers.getSearchedFriends(nextArgs);
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
