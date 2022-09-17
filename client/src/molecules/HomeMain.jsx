import React from 'react';
import Main from './atoms/Main';
import Nav from './atoms/Nav';
import Section from './atoms/Section';


const HomeMain = () => {
  return (
    <Main>
      <Nav>
        {/*
          // Add search bar and view buttons
          // -- Search bar requires click to fetch
          // -- View buttons are Trending/Feed
        */}
      </Nav>
      <Section>
        {/* Render trending gifs */}
      </Section>
    </Main>
  );
};


export default HomeMain;
