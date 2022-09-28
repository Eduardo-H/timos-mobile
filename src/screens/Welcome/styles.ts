import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.BACKGROUND};
  padding: 25px 30px;
`;

export const LogoContainer = styled.View`
  margin-top: auto;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${theme.fonts.MEDIUM};
  color: ${theme.colors.WHITE};
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.LIGHT};
  color: ${theme.colors.WHITE};
  text-align: center;
  margin-top: 5px;
  margin-bottom: auto;
`;