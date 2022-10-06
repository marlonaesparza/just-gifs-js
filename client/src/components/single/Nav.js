import styled from 'styled-components';


const Nav = styled.nav`
  margin: auto;
  padding: 0;

  ${
    ({ contentNav }) =>
      contentNav ?
      `
        display: grid;
        grid-template-columns: 4fr 8fr;
      ` :
      null
  }
`;


export default Nav;