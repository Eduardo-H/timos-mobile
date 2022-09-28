import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Logo from '../../assets/logo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Container,
  Header,
  Title,
  Form,
  FormItem,
  SingUpButtonContainer,
  SignInButton,
  SignInButtonText
} from './styles';
import { useNavigation } from '@react-navigation/native';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUpFormSchema = yup.object({
  name: yup.string().required('Este campo é obrigatório'),
  email: yup.string().required('Este campo é obrigatório').email('E-mail inválido'),
  password: yup.string().required('Este campo é obrigatório'),
  confirmPassword: yup.string().required('Este campo é obrigatório'),
}).required();

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('signIn');
  }

  async function handleSignUp({ name, email, password, confirmPassword }: SignUpFormData) {
    console.log({ name, email, password, confirmPassword });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header>
          <Logo width="95" height="95" />
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <FormItem>
            <Controller
              control={control}
              name="name"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input 
                  placeholder="Nome" 
                  onChangeText={onChange}
                  value={value}
                  error={errors.name}
                />
              )}              
            />
          </FormItem>

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
                  error={errors.name}
                  secureTextEntry
                />
              )}
            />
          </FormItem>

          <FormItem>
            <Controller
              control={control}
              name="confirmPassword"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input 
                  placeholder="Confirmar senha" 
                  onChangeText={onChange}
                  value={value}
                  error={errors.name}
                  secureTextEntry
                />
              )}
            />
          </FormItem>
        </Form>
        
        <SingUpButtonContainer>
          <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
        </SingUpButtonContainer>

        <SignInButton activeOpacity={0.8} onPress={handleSignIn}>
          <SignInButtonText>
            Já possui uma conta? Faça o login
          </SignInButtonText>
        </SignInButton>
      </Container>
    </TouchableWithoutFeedback>
  );
}