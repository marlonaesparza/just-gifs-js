import styled from 'styled-components';


const Li = styled.li`
  margin: auto;
  padding: .4rem;

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
