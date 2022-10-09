import styled from 'styled-components';


const Div = styled.div`
  margin: auto;
  padding: 0;
  width: 100%;
  
  ${
    ({ homePage, focusPage, pageHeader, gifsCont }) => 
      homePage || focusPage ?
      `
        display: grid;
        gap: 0;
        grid-template-rows: 1fr 11fr;
      ` :
      pageHeader ?
      `
        display: grid;
        gap: 0;
        grid-template-columns: 4fr 8fr;
      ` :
      gifsCont ?
      `
        display: grid;
        gap: 0;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
      ` :
      null
  }
`;


export default Div;
