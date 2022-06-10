import React from 'react';
import { Keyboard, KeyboardAvoidingView, Text, View, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { styles } from './styles';

export function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.header}>
          <Logo width="95" height="95" />
          <Text style={styles.title}>
            Login
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formItem}>
            <Input placeholder="E-mail" />
          </View>
          <View style={styles.formItem}>
            <Input placeholder="Senha" />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Entrar" />
        </View>

        <TouchableOpacity style={styles.signUpButton} activeOpacity={0.75}>
          <Text style={styles.signUpButtonText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}