import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Article from '../single/Article';
import Img from '../single/Img';
import Div from '../single/Div';
import Btn from '../single/Btn';


const GifsContainer = (props) => {
  const gifsSliceTrending = useSelector((state) => state.gifsSlice.trending);
  const gifsSliceSearched = useSelector((state) => state.gifsSlice.searched);

  let gifs = gifsSliceTrending;

  if (gifsSliceSearched.length !== 0) {
    gifs = gifsSliceSearched;
  }

  return (
    <Div gifsCont={true}>
      {
        gifs.map((gif) => {
          return (
            <Article key={gif.id}>
              <Div>
                <Link to={`/home/${gif.id}`}>
                  <Img id={gif.id} src={gif.images.fixed_width_small.url} />
                </Link>
              </Div>
              <Div>
                <Btn>Like</Btn>
              </Div>
            </Article>
          );
        })
      }
    </Div>
  );
};


export default GifsContainer;
