import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Logo from '../../assets/logo.svg';

import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  Container,
  Header,
  Title,
  Form,
  FormItem,
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

  const { signIn, loading } = useAuth();
  const toast = useToast();
  const navigation = useNavigation();

  function handleSignUp() {
    navigation.navigate('signUp');
  }

  async function handleSignIn({ email, password }: SignInFormData) {
    try {
      signIn(email, password);

      navigation.navigate('home');
    } catch (error: any) {
      toast.show('E-mail e/ou senha incorreta', { type: 'danger' });
    }
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
                  error={errors.email} 
                />
              )}              
            />
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
                  error={errors.password} 
                  secureTextEntry
                />
              )}
            />
          </FormItem>
        </Form>
        
        <SingInButtonContainer>
          <Button title="Entrar" isLoading={loading} onPress={handleSubmit(handleSignIn)} />
        </SingInButtonContainer>

        <SignUpButton activeOpacity={0.8} onPress={handleSignUp}>
          <SignUpButtonText>
            Não possui uma conta? Cadastre-se
          </SignUpButtonText>
        </SignUpButton>
      </Container>
    </TouchableWithoutFeedback>
  );
}