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

export const QuickActionsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 0px 20px 0px;
`;

export const LoanButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.SECONDARY};
  border-radius: 5px;
  padding: 15px;
`;

export const LoanButtonTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LoanButonLeftIcon = styled.View`
  margin-right: 12px;
`;

export const LoanButtonTitle = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.REGULAR};
  color: ${theme.colors.WHITE};
`;