import styled from 'styled-components';


const Nav = styled.nav`
  margin: auto;
  padding: 0;
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
