import styled from 'styled-components';


const Section = styled.section`
  margin: auto;
  padding: 0;
  width: 100%;
  height: ${({ topPageSection }) => 
    topPageSection ? '5vh' : '100%'
  };

  ${
    ({ homeMainSectionDiv }) => 
      homeMainSectionDiv ?
      'overflow: auto' : null
  }
`;


export default Section;
