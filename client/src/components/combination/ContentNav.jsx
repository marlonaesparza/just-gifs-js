import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTrendingView, setFeedView, setFindFriendsView, setFriendsView } from '../../state/features/viewsSlice';
import { updateTrendingGifs, updateFeedGifs,updateSearchedGifs } from '../../state/features/gifsSlice';
import Search from './Search';
import Div from '../single/Div';
import Nav from '../single/Nav';
import Btn from '../single/Btn';
import reqHandlers from '../../helpers/reqHandlers';


const ContentNav = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleTrendingView = (e) => {
    e.preventDefault();
    const nextArgs = {
      offset: 0,
      dispatch,
      updateTrendingGifs,
      updateSearchedGifs,
      setTrendingView,
      page: 'Home Page'
    };
    reqHandlers.getTrendingGifs(nextArgs);
  };

  const handleFeedView = (e) => {
    e.preventDefault();
    const nextArgs = {
      offset: 0,
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
    navigate(-1);
  };

  return (
    <React.Fragment>
      <Nav id='content-nav' contentNav={true}>
        <Div>
          <Search/>
        </Div>  
        <Div>
          {
            params.gifId || location.pathname === '/favorites' ? 
              <Btn onClick={handleBackBtn}>Back</Btn> :

            location.pathname === '/friends' ?
              <React.Fragment>
                <Btn onClick={handleFindFriendsView}>Find Friends</Btn>
                <Btn onClick={handleFriendsView}>Friends</Btn>
              </React.Fragment> :

              <React.Fragment>
                <Btn onClick={handleTrendingView}>Trending</Btn>
                <Btn onClick={handleFeedView}>Feed</Btn>
              </React.Fragment> 
          }
        </Div>
      </Nav>
    </React.Fragment>
  );
};


export default ContentNav;
