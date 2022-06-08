import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface ButtonProps extends RectButtonProperties {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Title>
        { title }
      </Title>
    </Container>
  )
}