import React from 'react';
import Article from '../single/Article';
import Img from '../single/Img';
import Div from '../single/Div';
import Btn from '../single/Btn';


const GifsContainer = (props) => {
  return (
    <Div id='gifs-container' gifsCont={true}>
      <Article>
        <Div>
          <Img/>
        </Div>
        <Div>
          <Btn>Like</Btn>
        </Div>
      </Article>
    </Div>
  );
};


export default GifsContainer;
