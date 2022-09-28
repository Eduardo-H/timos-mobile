import { useState } from 'react';
import { FieldError } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import theme from '../../global/theme';

import { Container, ErrorMessage } from './styles';

interface InputProps extends TextInputProps {
  error: FieldError | undefined;
  disabled?: boolean;
}

export function Input({ 
  error,
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
    <>
      <Container 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        isInvalid={error !== undefined}
        disabled={disabled} 
        placeholderTextColor={theme.colors.PLACEHOLDER}
        selectionColor={theme.colors.WHITE}
        {...rest}
      />

        {error && (
          <ErrorMessage>{error.message}</ErrorMessage>
        )}
    </>
  );
}