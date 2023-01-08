import styled from 'styled-components';


const Btn = styled.button`
  margin: auto;
  padding: 2px 6px;
  border: none;
  font-family: 'Poppins', sans-serif;


  ${
    ({ searchBtn, contentNavBtn, paginationBtn }) =>
      searchBtn ?
      `

      ` :
      contentNavBtn ?
      `
      ` :
      paginationBtn ?
      `
        display: block;
        width: 90%;
      ` :
      null
  }

  color: ${
    ({ active }) =>
      active ?
      `
        black
      ` :
      `
        curentColor
      `
  };

  ${
    ({ active }) =>
      active ?
      `
        background: linear-gradient(90deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%);
      ` :
      `
        background: hsla(0, 0%, 100%, .3);
      `
  };

  &:hover {
    cursor: pointer;
    background: linear-gradient(90deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%);
    
  }
`;


export default Btn;
