import styled from 'styled-components';


const Div = styled.div`
  margin: auto;
  padding: 0;
  width: 100%;
  height: 100%;

  ${
    ({ homeMainSectionDiv }) => 
      homeMainSectionDiv ?
      `
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
      ` : 'height: 100%;'
  }
`;


export default Div;
