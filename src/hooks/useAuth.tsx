import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  USER_COLLECTION,
  TOKEN_COLLECTION,
  REFRESH_TOKEN_COLLECTION
} from '../configs/database';
import { api } from '../services/api';

type User = {
  id: string;
  email: string;
  name: string;
}

type AuthContextData = {
  user: User;
  token: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => void;
  refreshToken: () => void;
}

type AuthProviderProps = {
  children: ReactNode;
}

interface SingInResponse {
  user: User;
  token: string;
  refresh_token: string;
}

interface RefreshTokenResponse {
  token: string;
  refresh_token: string;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function signIn(email: string, password: string) {
    setLoading(true);

    try {
      const response = await api.post<SingInResponse>('/session', {
        email,
        password
      });

      // Removing all the data from AsyncStorage
      await AsyncStorage.clear();

      // Setting the new value to AsyncStorage
      await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(response.data.user));
      await AsyncStorage.setItem(TOKEN_COLLECTION, response.data.token);
      await AsyncStorage.setItem(REFRESH_TOKEN_COLLECTION, response.data.refresh_token);

      setUser(response.data.user);
      setToken(response.data.token);
    } catch (error) {
      setLoading(false);
      throw new Error();
    }

    setLoading(false);
  }

  async function refreshToken() {
    const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_COLLECTION);

    if (!refreshToken) {
      throw new Error('Não foi possível obter o token');
    }

    const response = await api.post<RefreshTokenResponse>(`/refresh-token?token=${refreshToken}`);

    await AsyncStorage.setItem(TOKEN_COLLECTION, response.data.token);
    await AsyncStorage.setItem(REFRESH_TOKEN_COLLECTION, response.data.refresh_token);
    
    setToken(response.data.token);
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, signIn, refreshToken }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };