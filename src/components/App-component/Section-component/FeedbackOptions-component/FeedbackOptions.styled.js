import styled from 'styled-components';

export const OptionList = styled.ul`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const OptionsButton = styled.button`
  padding: 10px;
  text-transform: capitalize;
  border-radius: 8%;
  background-color: #8b7aa8;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    color: #8b7aa8;
    background-color: #fff;
  }
`;
