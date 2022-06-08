import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`

`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const Form = styled.View`

`;

export const SignUpButton = styled(BorderlessButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const SignUpButtonText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.WHITE};
`;