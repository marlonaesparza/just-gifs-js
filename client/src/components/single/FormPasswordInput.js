import styled from 'styled-components';


const FormPasswordInput = styled.input.attrs({
  type: 'password'
})`
  margin: .5rem auto;
  padding: .25rem .3rem;
  display: block;
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border: none;
  border-radius: .2rem;

`;


export default FormPasswordInput;
