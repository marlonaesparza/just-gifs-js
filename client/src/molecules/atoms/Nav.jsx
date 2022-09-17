import styled from 'styled-components';


const Nav = styled.nav`
  margin: auto;
  padding: 0px 10px;
  width: ${
    ({ homeMainNav }) => 
      homeMainNav ? '100%' : 'default'
  };

  ${
    ({ homeMainNav }) => {
      return homeMainNav ?
      'display: grid; grid-template-columns: 1fr 1fr;' :
      null
    }

  }
`;


export default Nav;
