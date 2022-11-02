import React from 'react';
import { Link } from 'react-router-dom';
import { setMenuView } from '../../state/features/viewsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header1 from '../single/Header1';
import Div from '../single/Div';
import Nav from '../single/Nav';
import Ul from '../single/Ul';
import Li from '../single/Li';


const PageHeader = (props) => {
  const dispatch = useDispatch();
  const menuView = useSelector((state) => state.viewsSlice.menuView);
  const loginPage = location.pathname === '/login';
  const signupPage = location.pathname === '/signup';


  const handleMenu = (e) => {
    e.preventDefault();
    dispatch(setMenuView());
  };

  return (
    <React.Fragment>
      <Div id='page-header' pageHeader={ true }>
        <Header1>Just Gifs</Header1>  
        <Nav>
          <Ul>
            <Li onClick={handleMenu}>Menu</Li>
          </Ul>
        </Nav>
      </Div>
      {
        menuView ?
        (
          loginPage || signupPage ?
            (
              loginPage ?
                <Div id='page-menu' pageMenu={ true }>
                  <Nav>
                    <Ul pageMenu={ true }>
                      <Link to={'/signup'}>
                        <Li id='menu-signup-link' menuOption={ true }>Signup</Li>
                      </Link>
                    </Ul>
                  </Nav>
                </Div> :
                <Div id='page-menu' pageMenu={ true }>
                  <Nav>
                    <Ul pageMenu={ true }>
                      <Link to={'/login'}>
                        <Li id='menu-login-link' menuOption={ true }>Login</Li>
                      </Link>
                    </Ul>
                  </Nav>
                </Div>
            ) :
            <Div id='page-menu' pageMenu={ true }>
              <Nav>
                <Ul pageMenu={ true }>
                  <Link to={'/home'} >
                    <Li id='menu-home-link' menuOption={ true }>Home</Li>
                  </Link>
                  <Link to={'/favorites'}>
                    <Li id='menu-favorites-link' menuOption={ true }>Favorites</Li>
                  </Link>
                  <Link to={'/friends'}>
                    <Li id='menu-friends-link' menuOption={ true }>Friends</Li>
                  </Link>
                  <Li id='menu-logout-link' menuOption={ true }>Logout</Li>
                </Ul>
              </Nav>
            </Div>
        ) :
        null
      }
    </React.Fragment>
  );
};


export default PageHeader;
