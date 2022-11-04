import styled from 'styled-components';


const Ul = styled.ul`
  margin: auto;
  padding: 0;
  list-style-type: none;

  ${
    ({ pageMenu }) =>
      pageMenu ?
      `
        display: grid;
        grid-template-rows: repeat(auto, 1fr);
      ` :
      null
  }
`;


export default Ul;