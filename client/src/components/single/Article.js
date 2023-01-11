import styled from 'styled-components';


const Article = styled.article`
  margin: auto;
  display: grid;

  
  justify-content: center;
  align-content: center;
  height: 300px;
  // background-color: white;
  width: 95%;
  background: hsla(0, 0%, 100%, .4);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ffffff", endColorstr="#F5F5F5", GradientType=1 ); 
  
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

  ${
    ({ connection }) => 
      connection ?
      'grid-template-rows: repeat(3, auto)' :
      'grid-template-rows: 10fr 2fr;'
  }
`;


export default Article;
