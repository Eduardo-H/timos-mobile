import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';

import { styles } from './styles';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo width="95" height="95" />
      </View>

      <Text style={styles.title}>
        Seja bem-vindo(a) ao Timos
      </Text>

      <Text style={styles.subtitle}>
        Não esqueça nunca mais de seus empréstimos.
      </Text>

      <Button title="Começar" />
    </SafeAreaView>
  )
}