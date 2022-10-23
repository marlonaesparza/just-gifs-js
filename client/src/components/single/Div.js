import styled from 'styled-components';


const Div = styled.div`
  margin: auto;
  width: 95%;
  height: 100%;
  
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
        grid-template-columns: 6fr 6fr;
      ` :
      gifsCont ?
      `
        display: grid;
        gap: 1em;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(4, minmax(0, 1fr));
      ` :
      null
  }
`;


export default Div;
