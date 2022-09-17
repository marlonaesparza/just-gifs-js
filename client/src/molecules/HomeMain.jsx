import React from 'react';
import Main from './atoms/Main';
import Nav from './atoms/Nav';
import Section from './atoms/Section';
import SearchInput from './atoms/SearchInput';


const HomeMain = () => {
  return (
    <Main homeMain='true'>
      <Nav>
        {/*
          // Add search bar and view buttons
          // -- Search bar requires click to fetch
          // -- View buttons are Trending/Feed
        */}
        <SearchInput />
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
