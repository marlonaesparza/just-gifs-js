import styled from 'styled-components';


const FormSubmitInput = styled.input.attrs({
  type: 'submit'
})`
  margin: 2rem auto;
  padding: .3rem 0;
  width: 50%;
  display: block;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none;
  border-radius: .3rem;
`;


export default FormSubmitInput;
