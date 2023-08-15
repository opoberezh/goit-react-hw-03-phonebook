import styled from 'styled-components';

export const WrapperFilter = styled.div`
display: flex;
flex-direction: column;
max-width: 350px;
padding: 10px; 
gap: 10px;
`;

export const TitleStyled = styled.h2`
    margin: 20px 0 0 20px;
    color: #2F4F4F;
    text-shadow: 3px 3px 3px rgba(0,0,0,0.55);
`;

export const TextStyledFilter = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin: 20px 0 0 20px;
`;

export const InputStyled = styled.input`

margin-left: 20px;
padding: 4px; 
border: 2px solid #A9A9A9;
border-radius: 4px;
box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.55);
  &:focus,
  &:hover,
  &:active {
    border: 2px solid #4169E1;
    background: transparent;
    outline: transparent;
  }
`;