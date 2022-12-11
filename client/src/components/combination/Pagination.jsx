import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { offsetForward, offsetBackward, setTrendingIndex, setSearchIndex, setFeedIndex } from '../../state/features/paginationSlice';
import { updateTrendingGifs, updateSearchedGifs, updateFeedGifs } from '../../state/features/gifsSlice';
import { setTrendingView } from '../../state/features/viewsSlice';
import Div from '../single/Div';
import Ul from '../single/Ul';
import Li from '../single/Li';
import Btn from '../single/Btn';
import reqHandlers from '../../helpers/reqHandlers';


const Pagination = () => {
  const dispatch = useDispatch();
  const offset = useSelector(state => state.paginationSlice.offset);
  const isFeedView = useSelector(state => state.viewsSlice.feedView);
  const trendingIndex = useSelector(state => state.paginationSlice.trendingIndex);
  const searchIndex = useSelector(state => state.paginationSlice.searchIndex);
  const feedIndex = useSelector(state => state.paginationSlice.feedIndex);
  const searchValue = useSelector(state => state.searchSlice.value);
  const searchIsActive = useSelector(state => state.searchSlice.isActive);
  const searchValueAvailable = searchValue.length !== 0;
  
  const handleOffsetForward = () => {
    dispatch(offsetForward());
  };

  const handleOffsetBackward = () => {
    dispatch(offsetBackward());
  };
  
  const getContentByPagination = (e) => {
    const offset = Number(e.target.innerHTML);

    const next =
        isFeedView ? reqHandlers.getFeedGifs :
        searchValueAvailable ? reqHandlers.getSearchedGifs :
        reqHandlers.getTrendingGifs;

    const nextArgs =
      isFeedView ? {
        offset,
        dispatch,
        updateFeedGifs,
        updateSearchedGifs,
        setFeedIndex,
      } :
      !searchValueAvailable ? {
        offset,
        dispatch,
        updateTrendingGifs,
        updateSearchedGifs,
        setTrendingIndex,
        setTrendingView,
      } : {
        search: searchValue,
        offset,
        dispatch,
        updateSearchedGifs,
        setSearchIndex,
        setTrendingView,
      };

    reqHandlers.authUser(next, nextArgs);
  };

  const listOfPaginationBtns = [];

  for (let i = offset; i < offset + 6; i++) {
    let currentPaginationIndex = 
      isFeedView ? feedIndex :
      searchIsActive ? searchIndex : trendingIndex;

    if (i === currentPaginationIndex) {
      let PaginationBtn = (
        <Li key={i} paginationLi={ true }>
          <Btn onClick={ getContentByPagination } paginationBtn={ true } active={ true }>{i}</Btn>
        </Li>
      );
      listOfPaginationBtns.push(PaginationBtn);
    } else {
      let PaginationBtn = (
        <Li key={i} paginationLi={ true }>
          <Btn onClick={ getContentByPagination } paginationBtn={ true }>{i}</Btn>
        </Li>
      );
      listOfPaginationBtns.push(PaginationBtn);
    }
  };

  return (
    <Div paginationCont={ true }>
      <Btn onClick={ handleOffsetBackward } paginationBtn={ true }>Back</Btn>
      <Ul paginationList={ true }>
        { listOfPaginationBtns }
      </Ul>
      <Btn  onClick={ handleOffsetForward } paginationBtn={ true }>Forward</Btn>
    </Div>
  );
};


export default Pagination;
