import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { updateAllGifs, updateTrendingGifs } from '../state/features/gifsSlice';
import requestHelpers from '../helpers/reqHandlers';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';
import ContentNav from '../components/combination/ContentNav';
import GifsContainer from '../components/combination/GifsContainer';


const HomePage = (props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    requestHelpers.getTrendingGifs(0, dispatch, updateAllGifs, updateTrendingGifs);
  }, []);

  return (
    <Div id='home-page-container' homePage={ true }>
      <PageHeader/>

      <Div id='home-content-container' homeContentCont={true}>
        <ContentNav/>
        <GifsContainer/>
      </Div>
    </Div>
  );
};


export default HomePage;
