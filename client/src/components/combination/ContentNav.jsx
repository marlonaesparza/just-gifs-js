import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTrendingView, setFeedView, setFindFriendsView, setFriendsView } from '../../state/features/viewsSlice';
import { updateTrendingGifs, updateFeedGifs,updateSearchedGifs } from '../../state/features/gifsSlice';
import { resetPagination } from '../../state/features/paginationSlice';
import Search from './Search';
import Div from '../single/Div';
import Nav from '../single/Nav';
import Btn from '../single/Btn';
import reqHandlers from '../../helpers/reqHandlers';


const ContentNav = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const trendingView = useSelector(state => state.viewsSlice.trendingView);
  const feedView =  useSelector(state => state.viewsSlice.feedView);
  const findFriendsView = useSelector(state => state.viewsSlice.findFriendsView);
  const friendsView = useSelector(state => state.viewsSlice.friendsView);
  const trendingIndex = useSelector(state => state.paginationSlice.trendingIndex);
  const feedIndex = useSelector(state => state.paginationSlice.feedIndex);

  const handleTrendingView = (e) => {
    e.preventDefault();
    const nextArgs = {
      offset: trendingIndex,
      dispatch,
      updateTrendingGifs,
      updateSearchedGifs,
      setTrendingView,
    };
    reqHandlers.getTrendingGifs(nextArgs);
  };

  const handleFeedView = (e) => {
    e.preventDefault();
    const nextArgs = {
      offset: feedIndex,
      dispatch,
      updateFeedGifs,
      updateSearchedGifs,
      setFeedView,
      page: 'Home Page'
    };
    reqHandlers.getFeedGifs(nextArgs);
  };
  
  const handleFindFriendsView = (e) => {
    e.preventDefault();
    dispatch(setFindFriendsView());
  };

  const handleFriendsView = (e) => {
    e.preventDefault();
    dispatch(setFriendsView());
  };

  const handleBackBtn = (e) => {
    e.preventDefault();
    dispatch(resetPagination());
    navigate(-1);
  };

  const pathIsFocusOrFavorites =
    location.pathname === '/favorites' ||  location.pathname.split('/')[1] === 'focus';
  console.log(pathIsFocusOrFavorites, feedView);
  return (
    <React.Fragment>
      <Nav id='content-nav' contentNav={true}>
        <Div>
          {pathIsFocusOrFavorites || feedView ? null : <Search/>}
        </Div>  
        <Div>
          {
            params.gifId || pathIsFocusOrFavorites ? 
              <Btn onClick={handleBackBtn}>Back</Btn> :

            location.pathname === '/friends' ?
              <React.Fragment>
                <Btn onClick={handleFindFriendsView} contentNavBtn={true} active={findFriendsView}>Find Friends</Btn>
                <Btn onClick={handleFriendsView} contentNavBtn={true} active={friendsView}>Friends</Btn>
              </React.Fragment> :

              <React.Fragment>
                <Btn onClick={handleTrendingView} contentNavBtn={true} active={trendingView}>Trending</Btn>
                <Btn onClick={handleFeedView} contentNavBtn={true} active={feedView}>Feed</Btn>
              </React.Fragment> 
          }
        </Div>
      </Nav>
    </React.Fragment>
  );
};


export default ContentNav;
