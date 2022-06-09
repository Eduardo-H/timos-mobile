import { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

interface InputProps extends TextInputProps {
  disabled?: boolean;
}

export function Input({ disabled = false, ...rest }: InputProps) {
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
      disabled={disabled} 
      {...rest} 
    />
  );
}