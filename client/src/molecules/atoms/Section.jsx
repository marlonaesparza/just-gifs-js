import styled from 'styled-components';


const Section = styled.section`
  margin: auto;
  padding: 0;
  height: ${({ homeNav }) => 
    homeNav ? '5vh' : '100%'
  };
`;


export default Section;
