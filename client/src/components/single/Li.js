import styled from 'styled-components';


const Li = styled.li`
  margin: auto;
  padding: 1rem 0;

  ${
    ({ pageMenu, paginationLi }) =>
      pageMenu ?
      `
        display: block;
      ` :
      paginationLi ?
      `
        width: 100%;
      ` :
      null
  }

  &:hover {
    cursor: pointer;
    color: #B460FF;
  }
`;


export default Li;
