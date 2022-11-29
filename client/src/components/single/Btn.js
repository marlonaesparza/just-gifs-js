import styled from 'styled-components';


const Btn = styled.button`
  margin: auto;
  padding: 0;

  ${
    ({ searchBtn, contentNavBtn }) =>
      searchBtn ?
      `
        width: auto;
      ` :
      contentNavBtn ?
      `
        width: 40%;
      ` :
      null
  }
`;


export default Btn;
