import React from 'react';
import Header1 from '../components/single/Header1';
import { useDispatch } from 'react-redux';
import { setMenuView } from '../state/features/viewsSlice';


const PageNotFound = (props) => {
  const dispatch = useDispatch();
  dispatch(setMenuView());
  
  return (
    <Header1>Page Not Found</Header1>
  );
};


export default PageNotFound;
