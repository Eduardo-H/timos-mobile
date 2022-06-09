import React from 'react';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Logo from '../../assets/logo.svg';
import { Input } from '../../components/Input';

import {
  Container,
  Header,
  Title,
  Form,
  FormItem
} from './styles';

export function SignIn() {
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Logo width="80" height="80" />
            <Title>Login</Title>
          </Header>

          <Form>
            <FormItem>
              <Input placeholder="E-mail" />
            </FormItem>
            <FormItem>
              <Input placeholder="Senha" />
            </FormItem>
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}