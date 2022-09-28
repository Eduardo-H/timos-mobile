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