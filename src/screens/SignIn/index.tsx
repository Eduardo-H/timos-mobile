import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Logo from '../../assets/logo.svg';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container,
  Header,
  Title,
  Form,
  FormItem,
  ErrorMessage,
  SingInButtonContainer,
  SignUpButton,
  SignUpButtonText
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object({
  email: yup.string().required('Este campo é obrigatório').email('E-mail inválido'),
  password: yup.string().required('Este campo é obrigatório'),
}).required();

export function SignIn() {
  const { control, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  async function handleSignIn({ email, password }: SignInFormData) {
    console.log({ email, password });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header>
          <Logo width="95" height="95" />
          <Title>Login</Title>
        </Header>

        <Form>
          <FormItem>
            <Controller
              control={control}
              name="email"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input 
                  placeholder="E-mail" 
                  onChangeText={onChange}
                  value={value}
                  isInvalid={errors.email != undefined} 
                />
              )}              
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FormItem>

          <FormItem>
            <Controller
              control={control}
              name="password"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input 
                  placeholder="Senha" 
                  onChangeText={onChange}
                  value={value}
                  isInvalid={errors.password != undefined} 
                  secureTextEntry
                />
              )}
            />

            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </FormItem>
        </Form>
        
        <SingInButtonContainer>
          <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />
        </SingInButtonContainer>

        <SignUpButton activeOpacity={0.8}>
          <SignUpButtonText>
            Não possui uma conta? Cadastre-se
          </SignUpButtonText>
        </SignUpButton>
      </Container>
    </TouchableWithoutFeedback>
  );
}