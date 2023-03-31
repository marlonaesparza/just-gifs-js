import styled from 'styled-components';


const Paragraph = styled.p`
  margin: auto;
  padding: 0;

  ${({LoadingIcon}) =>
    LoadingIcon ? `
      font-size: 7rem;
      font-weight: bolder;
      background: -webkit-linear-gradient(90deg, hsla(302, 82%, 76%, 1) 0%, hsla(258, 40%, 68%, 1) 100%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    ` :
      null
  }
`;


export default Paragraph;
