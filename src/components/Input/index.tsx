import { useState } from 'react';
import { TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';

import { styles } from './styles';

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
    <TextInput 
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      style={
        isFocused 
        ? [styles.container, styles.focusedContainer]
        : [styles.container]
      }
      selectionColor={theme.colors.WHITE}
      placeholderTextColor={theme.colors.PLACEHOLDER}
      {...rest}
    />
  );
}