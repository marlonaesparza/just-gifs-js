import React from 'react';
import Header1 from '../single/Header1';
import Div from '../single/Div';
import Nav from '../single/Nav';
import Ul from '../single/Ul';
import Li from '../single/Li';


const PageHeader = (props) => {
  return (
    <Div id='page-header' pageHeader={ true }>
      <Header1>Just Gifs</Header1>  
      <Nav>
        <Ul>
          <Li>Menu</Li>
        </Ul>
      </Nav>
    </Div>
  );
};


export default PageHeader;
