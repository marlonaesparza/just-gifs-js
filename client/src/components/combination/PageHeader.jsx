import React from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuView } from '../../state/features/viewsSlice';
import Header1 from '../single/Header1';
import Div from '../single/Div';
import Nav from '../single/Nav';
import Ul from '../single/Ul';
import Li from '../single/Li';
import RouterLink from '../single/Link';
import reqHandlers from '../../helpers/reqHandlers';


const PageHeader = (props) => {
  const dispatch = useDispatch();
  const menuView = useSelector((state) => state.viewsSlice.menuView);
  const loginPage = location.pathname === '/login';
  const signupPage = location.pathname === '/signup';


  const handleMenu = (e) => {
    e.preventDefault();
    dispatch(setMenuView());
  };

  const handleLogout = (e) => {
    e.preventDefault();

    const nextArgs = {
      dispatch
    }

    reqHandlers.logoutUser(nextArgs);
  };

  return (
    <React.Fragment>
      <Div id='page-header' pageHeader={ true }>
        <RouterLink to={'/home'}>
          <Header1>JG</Header1>  
        </RouterLink>
        <Nav headerNav>
          <Ul>
            <Li onClick={handleMenu}>Menu</Li>
          </Ul>
        </Nav>
      </Div>

      {/* Below: Handles floating menu for navigation, and log out. */}
      {
        menuView ?
        (
          loginPage || signupPage ?
            (
              loginPage ?
                <Div id='page-menu' pageMenu={ true }>
                  <Nav>
                    <Ul pageMenu={ true }>
                      <RouterLink to={'/signup'}>
                        <Li id='menu-signup-RouterLink' menuOption={ true }>Signup</Li>
                      </RouterLink>
                    </Ul>
                  </Nav>
                </Div> :
                <Div id='page-menu' pageMenu={ true }>
                  <Nav>
                    <Ul pageMenu={ true }>
                      <RouterLink to={'/login'}>
                        <Li id='menu-login-RouterLink' menuOption={ true }>Login</Li>
                      </RouterLink>
                    </Ul>
                  </Nav>
                </Div>
            ) :
            <Div id='page-menu' pageMenu={ true }>
              <Nav>
                <Ul pageMenu={ true }>
                  <RouterLink to={'/home'}>
                    <Li id='menu-home-RouterLink' menuOption={ true }>Home</Li>
                  </RouterLink>

                  <RouterLink to={'/favorites'}>
                    <Li id='menu-favorites-RouterLink' menuOption={ true }>Favorites</Li>
                  </RouterLink>

                  <RouterLink to={'/friends'}>
                    <Li id='menu-friends-RouterLink' menuOption={ true }>Friends</Li>
                  </RouterLink>
                  
                  <Li id='menu-logout-RouterLink' menuOption={ true } onClick={ handleLogout }>Logout</Li>
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
