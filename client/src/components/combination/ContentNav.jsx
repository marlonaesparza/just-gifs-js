import React from 'react';
import { useDispatch } from 'react-redux';
import { setTrendingView, setFeedView } from '../../state/features/viewsSlice';
import Search from './Search';
import Div from '../single/Div';
import Nav from '../single/Nav';
import Btn from '../single/Btn';


const ContentNav = (props) => {
  const dispatch = useDispatch();

  const handleTrendingView = (e) => {
    e.preventDefault();
    dispatch(setTrendingView());
  };

  const handleFeedView = (e) => {
    e.preventDefault();
    dispatch(setFeedView());
  };

  return (
    <Nav id='content-nav' contentNav={true}>
      <Div>
        <Search/>
      </Div>  
      <Div>
        <Btn onClick={handleTrendingView}>Trending</Btn>
        <Btn onClick={handleFeedView}>Feed</Btn>
      </Div>
    </Nav>
  );
};


export default ContentNav;
