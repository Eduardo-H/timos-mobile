import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 10px;
  padding: 0px 20px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Header = styled.View`
  height: auto;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 500;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.WHITE};
  text-align: center;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 30px;
`;

export const FormItem = styled.View`
  margin-bottom: 15px;
`;