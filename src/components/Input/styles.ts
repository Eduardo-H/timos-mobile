import styled, { css } from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  isFocused: boolean;
  disabled: boolean;
}

export const Container = styled(TextInput).attrs((props) => ({
  placeholderTextColor: props.theme.colors.PLACEHOLDER
}))<InputProps>`
  height: 56px;
  background-color: ${({ theme }) => theme.colors.SECONDARY};
  color: ${({ theme }) => theme.colors.GRAY_50};

  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: 15px;
  padding: 0 18px;
  border-radius: 5px;
  
  ${({ isFocused, theme }) => isFocused && css`
    border: 2px;
    border-color: ${theme.colors.PRIMARY};    
  `};
`;