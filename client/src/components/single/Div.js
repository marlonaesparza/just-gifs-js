import styled from 'styled-components';


const Div = styled.div`
  margin: auto;
  width: 95%;
  height: 100%;
  
  ${
    ({ homePage, focusPage, pageHeader, gifsCont, pageMenu }) => 
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
      pageMenu ?
      `
        position: fixed;
        top: 3em;
        right: 3em;
        width: 30%;
        height: auto;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        background-color: #ffffff;
        display: flex;
      ` :
      null
  }
`;


export default Div;
