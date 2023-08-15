import styled from 'styled-components';
import {Form, Field, } from 'formik';

export const Styleform = styled(Form)`

display: flex;
flex-direction: column;
max-width: 350px;
padding: 10px; 
gap: 10px;
`;

export const HeroTitleStyled = styled.h1`
margin: 20px 0 0 35px;
color: #2F4F4F;
text-shadow: 3px 3px 3px rgba(0,0,0,0.55);
`;

export const StyledField = styled(Field)`
margin-left: 35px;
padding: 4px; 
border: 2px solid #A9A9A9;
border-radius: 4px;
box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.55);
&:focus,
&:hover,
&:active {
  border: 2px solid #2F4F4F;
  background: transparent;
  outline: transparent;
}
`;

export const StyledLabel = styled.p`
font-size: 18px;
font-weight: 400;
margin: 20px 0 0 35px;

`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

export const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 50px;
  margin: 10px auto;
  padding: 10px;
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  border: 2px solid #A9A9A9;
  box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.55);
  cursor: pointer;
  background: transparent;

  &:focus,
  &:hover {
    border: 2px solid #2F4F4F;
    background: #2F4F4F;
    color: black;

  }

  svg {
    height: 1.1em;
    width: 1.1em;
  }
`;