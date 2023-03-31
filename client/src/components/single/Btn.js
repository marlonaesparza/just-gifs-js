import styled from 'styled-components';


const Btn = styled.button`
  margin: auto;
  padding: 2px 6px;
  border: none;
  font-family: 'Poppins', sans-serif;

  border: 2px solid black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  ${
    ({ searchBtn, contentNavBtn, paginationBtn }) =>
      searchBtn ?
      `
      border-radius: 3px;


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

  ${
    ({ active, liked }) =>
      liked ?
      `
      background: -webkit-linear-gradient(180deg, hsla(213, 62%, 45%, 1) 0%, hsla(213, 62%, 45%, 1) 0%, hsla(0, 0%, 96%, 1) 100%);
      
      ` :  
      active ?
      `
        background: linear-gradient(90deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%);
      ` :
      `
        background-color: initial
      `
  };

  ${({ heart }) =>
    heart ?
    `

      border-radius: 4px;
      &:hover {
        background: -webkit-linear-gradient(180deg, hsla(213, 62%, 45%, 1) 0%, hsla(213, 62%, 45%, 1) 0%, hsla(0, 0%, 96%, 1) 100%);

      }
    ` : 
    `
      &:hover {
        cursor: pointer;
        background: linear-gradient(90deg, hsla(64, 41%, 92%, 1) 0%, hsla(196, 83%, 84%, 1) 50%, hsla(305, 75%, 83%, 1) 100%);
      }
    `
  }
`;


export default Btn;
