import styled from 'styled-components';


const Btn = styled.button`
  margin: auto;
  padding: 0;

  ${
    ({ searchBtn, contentNavBtn, paginationBtn }) =>
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
      paginationBtn ?
      `
        display: block;
        width: 90%;
        font-weight: bold;
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
