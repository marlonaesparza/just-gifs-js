import React from 'react';
import Main from './atoms/Main';
import Nav from './atoms/Nav';
import Section from './atoms/Section';
import SearchInput from './atoms/SearchInput';
import SearchBtn from './atoms/SearchBtn';
import ViewBtn from './atoms/ViewBtn';


const HomeMain = () => {
  return (
    <Main homeMain='true'>
      <Nav>
        {/*
          // Add search bar and view buttons
          // -- Search bar requires click to fetch
          // -- View buttons are Trending/Feed
        */}
        <div>
          <SearchInput /> <SearchBtn> Search </SearchBtn>
        </div>
        <div>
          <ViewBtn>Trending</ViewBtn><ViewBtn>Feed</ViewBtn>
        </div>
      </Nav>
      <Section>
        {/*
          // Render trending gifs
        */}
        
      </Section>
    </Main>
  );
};


export default HomeMain;
