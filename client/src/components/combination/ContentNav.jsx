import React from 'react';
import Search from './Search';
import Div from '../single/Div';
import Nav from '../single/Nav';
import Btn from '../single/Btn';


const ContentNav = (props) => {
  return (
    <Nav id='content-nav' contentNav={true}>
      <Div>
        <Search/>
      </Div>  
      <Div>
        <Btn>Trending</Btn>
        <Btn>Feed</Btn>
      </Div>
    </Nav>
  );
};


export default ContentNav;
