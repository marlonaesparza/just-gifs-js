import styled from 'styled-components';


const Ul = styled.ul`
  margin: auto;
  padding: 0;
  list-style-type: none;

  ${
    ({ pageMenu, paginationList}) =>
      pageMenu ?
      `
        display: grid;
        grid-template-rows: repeat(auto, 1fr);
      ` :
      paginationList ?
      `
        width: 100%;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
      ` :
      null
  }
`;


export default Ul;