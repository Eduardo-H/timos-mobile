import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import theme from '../../global/theme';

import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <Title>
        { isLoading ? <ActivityIndicator color={theme.colors.WHITE} /> : title}
      </Title>
    </Container>
  )
}