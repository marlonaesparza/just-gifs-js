import styled from 'styled-components';


const Main = styled.main`
  margin: auto;
  padding: 0;
  width: 100%;
  height: ${({ homeMain }) => 
    !homeMain ? null : '95vh'
  };

  ${(homeMain) => 
    homeMain ?
    'display: grid; grid-template-rows: 1fr 9fr;' :
    null
  }
`;


export default Main;
