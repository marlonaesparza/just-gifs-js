import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTrendingGifs } from '../state/features/gifsSlice';
import requestHelpers from './../../helpers/requestHelpers';
import Search from './Search';
import GifsContainer from './GifsContainer';
import Main from './atoms/Main';
import Nav from './atoms/Nav';
import Section from './atoms/Section';
import Div from './atoms/Div';
import ViewBtn from './atoms/ViewBtn';


const HomeMain = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    requestHelpers.getTrendingGifs(0, dispatch, updateTrendingGifs);
  }, []);
  
  return (
    <Main homeMain={true}>
      <Nav homeMainNav={true}>
        <Div>
          <Search />
        </Div>
        <Div>
          <ViewBtn>Trending</ViewBtn>
          <ViewBtn>Feed</ViewBtn>
        </Div>
      </Nav>
      <Section homeMainSection={true}>
        <Div homeMainSectionDiv={true}>
          <GifsContainer />
        </Div>
      </Section>
    </Main>
  );
};


export default HomeMain;

