import styled from 'styled-components';


const Article = styled.article`
  margin: auto;
  display: grid;
  grid-template-rows: 10fr 2fr;
  justify-content: center;
  align-content: center;
  height: 300px;
  background-color: white;
  // width: 300px;
  width: 100%;

  ${
    ({ gif, focusGif }) => 
      !focusGif && gif ?
      ` 
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        border-radius: .1rem;
      ` :
      focusGif ?
      `
        height: 100%;
      ` :
      null
  }
`;


export default Article;
