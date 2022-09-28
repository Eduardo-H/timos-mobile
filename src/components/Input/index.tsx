import { useState } from 'react';
import { TextInputProps } from 'react-native';
import theme from '../../global/theme';

import { Container } from './styles';

interface InputProps extends TextInputProps {
  isInvalid?: boolean;
  disabled?: boolean;
}

export function Input({ 
  isInvalid = false, 
  disabled = false, 
  ...rest 
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container 
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      isFocused={isFocused}
      isInvalid={isInvalid}
      disabled={disabled} 
      placeholderTextColor={theme.colors.PLACEHOLDER}
      {...rest}
    />
  );
}