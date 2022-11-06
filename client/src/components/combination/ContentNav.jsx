import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTrendingView, setFeedView, setFindFriendsView, setFriendsView } from '../../state/features/viewsSlice';
import Search from './Search';
import Div from '../single/Div';
import Nav from '../single/Nav';
import Btn from '../single/Btn';


const ContentNav = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleTrendingView = (e) => {
    e.preventDefault();
    dispatch(setTrendingView());
  };

  const handleFeedView = (e) => {
    e.preventDefault();
    dispatch(setFeedView());
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
    return;
  }

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
