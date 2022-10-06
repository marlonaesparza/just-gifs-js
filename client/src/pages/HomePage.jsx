import React from 'react';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';
import ContentNav from '../components/combination/ContentNav';
import GifsContainer from '../components/combination/GifsContainer';


const HomePage = (props) => {
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
