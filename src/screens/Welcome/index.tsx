import React from 'react';
import Logo from '../../assets/logo.svg';

import { 
  Container,
  LogoContainer,
  Title,
  Subtitle,
  Button,
  ButtonText
} from './styles';

export function Welcome() {
  return (
    <Container>
      <LogoContainer>
        <Logo width="100" height="100" />
      </LogoContainer>

      <Title>
        Seja bem-vindo(a) ao Timos
      </Title>

      <Subtitle>
        Não esqueça nunca mais de seus empréstimos.
      </Subtitle>

      <Button>
        <ButtonText>Começar</ButtonText>
      </Button>
    </Container>
  )
}