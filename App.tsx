import { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';
import * as SplashScreen from 'expo-splash-screen';

import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';

import theme from './src/global/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { AuthProvider } from './src/hooks/useAuth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      if (!fontsLoaded) {
        await SplashScreen.preventAutoHideAsync();
      }
      else {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [, fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ToastProvider placement="top" animationType="slide-in" duration={3000} offset={getStatusBarHeight() + 10}>
          <SafeAreaProvider onLayout={onLayoutRootView}>
            <Routes />
            <StatusBar style="light" />
          </SafeAreaProvider>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}