import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import FocusPage from './pages/FocusPage';
import PageNotFound from './pages/PageNotFound';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';


const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
        <Route path='/focus/:gifId' element={<FocusPage/>}/>
        <Route path='/login' element={<LogInPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
