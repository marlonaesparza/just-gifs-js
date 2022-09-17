import React from 'react';
import Main from './atoms/Main';
import Nav from './atoms/Nav';
import Section from './atoms/Section';
import Div from './atoms/Div';
import SearchInput from './atoms/SearchInput';
import SearchBtn from './atoms/SearchBtn';
import ViewBtn from './atoms/ViewBtn';
import GifArticle from './atoms/GifArticle';


const testDataTrendingGifs = [
  {
    id: 1,
    gif: '{Gif Here}'
  },
  {
    id: 2,
    gif: '{Gif Here}'
  },
  {
    id: 3,
    gif: '{Gif Here}'
  },
  {
    id: 4,
    gif: '{Gif Here}'
  },
  {
    id: 5,
    gif: '{Gif Here}'
  },
  {
    id: 6,
    gif: '{Gif Here}'
  },
  {
    id: 7,
    gif: '{Gif Here}'
  },
  {
    id: 8,
    gif: '{Gif Here}'
  },
  {
    id: 9,
    gif: '{Gif Here}'
  },
  {
    id: 10,
    gif: '{Gif Here}'
  },
  {
    id: 11,
    gif: '{Gif Here}'
  },
  {
    id: 12,
    gif: '{Gif Here}'
  }
];


const HomeMain = () => {
  return (
    <Main homeMain={true}>
      <Nav homeMainNav={true}>
        {/*
          // Add search bar and view buttons
          // -- Search bar requires click to fetch
          // -- View buttons are Trending/Feed
        */}
        <Div>
          <SearchInput homeMainSearchInput={true} /> <SearchBtn homeMainSearchBtn={true}> Search </SearchBtn>
        </Div>
        <Div>
          <ViewBtn>Trending</ViewBtn><ViewBtn>Feed</ViewBtn>
        </Div>
      </Nav>
      <Section homeMainSection={true}>
        {/*
          // Render trending gifs
        */}
        <Div homeMainSectionDiv={true}>
          {
            testDataTrendingGifs.map((gif) => {
              return (
                <GifArticle key={gif.id}>
                  <Div>
                    {gif.gif}
                  </Div>
                  <Div>
                    <button>Like</button>
                  </Div>
                </GifArticle>
              );
            })
          }
        </Div>
      </Section>
    </Main>
  );
};


export default HomeMain;
