import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
  width: 55px;
  
`;

export const Button = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  opacity: 0.75;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.SECONDARY};
  border: 2px solid #3D3F4E;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 11px;
  font-family: ${theme.fonts.REGULAR};
  color: ${theme.colors.WHITE};
  margin-top: 5px;
  text-align: center;
`;