import styled from 'styled-components';
import { Link } from 'react-router-dom';


const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
  
  &:hover,
  &:focus{
    color: #B460FF;
  }
  &:active{
    color: #B460FF;
  }
  &:visited{
    text-decoration: none;
  }
`;


export default RouterLink
