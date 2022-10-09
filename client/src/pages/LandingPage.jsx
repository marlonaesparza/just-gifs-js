import React from 'react';
import { Link } from 'react-router-dom';
import Header1 from '../components/single/Header1';


const LandingPage = (props) => {
  return (
    <React.Fragment>
      <Header1>Landing Page</Header1>
      <nav>
        <ul>
          <Link to='/home'>Home</Link>
        </ul>
      </nav>
    </React.Fragment>
  );
};


export default LandingPage;
