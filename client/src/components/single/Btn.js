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



  ${
    ({ active, liked }) =>
      liked ?
      `
        background: hsla(303, 79%, 76%, 1);
        background: linear-gradient(90deg, hsla(303, 79%, 76%, 1) 0%, hsla(360, 86%, 67%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(303, 79%, 76%, 1) 0%, hsla(360, 86%, 67%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(303, 79%, 76%, 1) 0%, hsla(360, 86%, 67%, 1) 100%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F292ED", endColorstr="#F36364", GradientType=1 );
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
      &:hover {
        background: hsla(303, 79%, 76%, 1);
        background: linear-gradient(90deg, hsla(303, 79%, 76%, 1) 0%, hsla(360, 86%, 67%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(303, 79%, 76%, 1) 0%, hsla(360, 86%, 67%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(303, 79%, 76%, 1) 0%, hsla(360, 86%, 67%, 1) 100%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F292ED", endColorstr="#F36364", GradientType=1 );
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
