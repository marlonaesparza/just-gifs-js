import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchValue } from '../../state/features/searchSlice';
import { updateAllGifs, updateSearchedGifs } from '../../state/features/gifsSlice';
import requestHelpers from '../../helpers/reqHandlers';
import SearchInput from '../single/SearchInput';
import Btn from '../single/Btn';


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
        searchInput={true}
        onChange={handleSearchVal}
        value={searchSliceValue}
      />
      <Btn
        searchBtn={true}
        onClick={handleGetSearchGifs}
      >
        Search
      </Btn>
    </React.Fragment>
  );
};


export default Search;
