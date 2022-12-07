import styled from 'styled-components';


const Li = styled.li`
  margin: auto;
  padding: 1rem 0;

  ${
    ({ pageMenu }) =>
      pageMenu ?
      `
        display: block;
      ` :
      null
  }

  &:hover {
    cursor: pointer;
    color: #B460FF;
  }
`;


export default Li;
