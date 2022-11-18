import styled from 'styled-components';


const Article = styled.article`
  margin: auto;
  display: grid;
  grid-template-rows: 10fr 2fr;
  justify-content: center;

  ${
    ({ gif }) => 
      gif ?
      ` 
        height: 140px;
      ` :
      null
  }
`;


export default Article;
