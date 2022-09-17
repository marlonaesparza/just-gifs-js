import styled from 'styled-components';


const Nav = styled.nav`
  margin: auto;
  padding: 0px 10px;
  width: ${(homeMain) => 
    homeMain ? '100%' : 'default'
  };
`;


export default Nav;
