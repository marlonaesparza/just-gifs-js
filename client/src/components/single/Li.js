import styled from 'styled-components';


const Li = styled.li`
  margin: auto;
  padding: 0;

  ${
    ({ pageMenu }) =>
      pageMenu ?
      `
        display: block;
      ` :
      null
  }
`;


export default Li;
