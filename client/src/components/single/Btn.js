import styled from 'styled-components';


const Btn = styled.button`
  margin: auto;
  padding: 0;
  // width: 100%;

  ${
    ({ searchBtn, contentNavBtn }) =>
      searchBtn ?
      `
        width: auto;
      ` :
      contentNavBtn ?
      `
        width: 50%;
      ` :
      null
  }
`;


export default Btn;
