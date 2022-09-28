import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';

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
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Logo width="95" height="95" />
          <Text style={styles.title}>
            Login
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.formItem}>
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
              <Text style={styles.errorMessage}>{errors.email.message}</Text>
            )}
          </View>

          <View style={styles.formItem}>
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
              <Text style={styles.errorMessage}>{errors.password.message}</Text>
            )}
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />
        </View>

        <TouchableOpacity style={styles.signUpButton} activeOpacity={0.8}>
          <Text style={styles.signUpButtonText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}