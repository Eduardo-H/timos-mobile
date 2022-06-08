import React from 'react';
import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';

import {
  Container,
  Header,
  Title,
  Form,
  SignUpButton,
  SignUpButtonText
} from './styles';

export function SignIn() {
  return (
    <Container>
      <Header>
        <Logo width="100" height="100" />
        <Title>Login</Title>
      </Header>

      <Form>
        
      </Form>

      <Button title='Entrar' onPress={() => {}} />

      <SignUpButton>
        <SignUpButtonText>
          Não possui uma conta? Cadastre-se
        </SignUpButtonText>
      </SignUpButton>
    </Container>
  );
}