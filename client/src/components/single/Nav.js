import styled from 'styled-components';


const Nav = styled.nav`
  margin: auto;
  width: 100%;
  padding: 0;

  ${
    ({ headerNav }) =>
      headerNav ?
      `
        &:hover {
          cursor: pointer;
          background: linear-gradient(90deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%);
      
        }
      ` :
      null
  }
  

  ${
    ({ contentNav }) =>
      contentNav ?
      `
        display: grid;
        grid-template-columns: 6fr 6fr;
        justify-content: center;
        align-content: center;
        
        @media (max-width: 620px) {
            display: grid;
            grid-template-columns: none;
            grid-template-rows: repeat(2, auto);
            grid-gap: .4rem;
        }

        @media (min-width: 1100px) {
          width: 70%
        }
      ` :
      null
  }
`;


export default Nav;
