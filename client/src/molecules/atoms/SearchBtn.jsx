import styled from 'styled-components';


const SearchBtn = styled.button`
  margin: auto 10px;
  padding: 5px 3px;
  ${(homeMain) => 
    homeMain ? 'float: left;': null 
  };
  height: 100%;
  border: 1px solid black;
`;


export default SearchBtn;
