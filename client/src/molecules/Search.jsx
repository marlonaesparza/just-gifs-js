import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchValue } from '../state/features/searchSlice';
import { updateAllGifs, updateSearchedGifs } from '../state/features/gifsSlice';
import requestHelpers from '../../helpers/requestHelpers';
import SearchInput from './atoms/SearchInput';
import SearchBtn from './atoms/SearchBtn';


const Search = () => {
  const searchSliceValue = useSelector((state) => state.searchSlice.value);
  const dispatch = useDispatch();

  const handleSearchVal = (e) => {
    e.preventDefault();
    const val = e.target.value;
    dispatch(updateSearchValue(val));
  };
  
  const handleGetSearchGifs = (e) => {
    e.preventDefault();
    requestHelpers.getSearchedGifs(0, searchSliceValue, dispatch, updateAllGifs, updateSearchedGifs);
  };
  
  return (
    <React.Fragment>
      <SearchInput
        homeMainSearchInput={true}
        onChange={handleSearchVal}
        value={searchSliceValue}
      />
      <SearchBtn
        homeMainSearchBtn={true}
        onClick={handleGetSearchGifs}
      >
        Search
      </SearchBtn>
    </React.Fragment>
  );
};


export default Search;
