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
        font-weight: bold;
        border: none;
        padding: 4px 5px;
      ` :
      null
  }

  color: ${
    ({ active }) =>
      active ?
      `
        white
      ` :
      `
        curentColor
      `
  };

  background-color: ${
    ({ active }) =>
      active ?
      `
        #B460FF
      ` :
      `
        curentColor
      `
  };
`;


export default Btn;
