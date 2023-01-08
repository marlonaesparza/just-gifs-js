import styled from 'styled-components';
import { Link } from 'react-router-dom';


const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
  
  &:hover,
  &:focus{
    color: #black;
  }
  &:active{
    color: #black;
  }
  &:visited{
    text-decoration: none;
  }
`;


export default RouterLink
