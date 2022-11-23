import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuView } from '../../state/features/viewsSlice';
import Header1 from '../single/Header1';
import Div from '../single/Div';
import Nav from '../single/Nav';
import Ul from '../single/Ul';
import Li from '../single/Li';
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
        <Link to={'/home'} style={{
          textDecoration: 'none'
        }}>
          <Header1>Just Gifs</Header1>  
        </Link>
        <Nav>
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
                      <Link to={'/signup'} style={{
                        textDecoration: 'none'
                      }}>
                        <Li id='menu-signup-link' menuOption={ true }>Signup</Li>
                      </Link>
                    </Ul>
                  </Nav>
                </Div> :
                <Div id='page-menu' pageMenu={ true }>
                  <Nav>
                    <Ul pageMenu={ true }>
                      <Link to={'/login'} style={{
                        textDecoration: 'none'
                      }}>
                        <Li id='menu-login-link' menuOption={ true }>Login</Li>
                      </Link>
                    </Ul>
                  </Nav>
                </Div>
            ) :
            <Div id='page-menu' pageMenu={ true }>
              <Nav>
                <Ul pageMenu={ true }>
                  <Link to={'/home'} style={{
                        textDecoration: 'none'
                  }}>
                    <Li id='menu-home-link' menuOption={ true }>Home</Li>
                  </Link>
                  <Link to={'/favorites'} style={{
                        textDecoration: 'none'
                      }}>
                    <Li id='menu-favorites-link' menuOption={ true }>Favorites</Li>
                  </Link>
                  <Link to={'/friends'} style={{
                        textDecoration: 'none'
                  }}>
                    <Li id='menu-friends-link' menuOption={ true }>Friends</Li>
                  </Link>
                  <Li id='menu-logout-link' menuOption={ true } onClick={ handleLogout }>Logout</Li>
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
