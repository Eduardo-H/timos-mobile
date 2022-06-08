import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 40px;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.WHITE};
`;