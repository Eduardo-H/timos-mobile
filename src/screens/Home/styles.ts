import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${theme.colors.BACKGROUND};
  padding-top: ${getStatusBarHeight() + 10}px;
  padding-left: 20px;
  padding-right: 20px;  
`;

export const FinancialHealthTitle = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.BOLD};
  color: ${theme.colors.WHITE};
  margin-top: 40px;
`;

export const FinancialHealthCardContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  gap: 10px;
`;