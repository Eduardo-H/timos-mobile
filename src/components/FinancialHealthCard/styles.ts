import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 10px 20px;
  background-color: ${theme.colors.SECONDARY};
  border-radius: 5px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.LIGHT};
  color: ${theme.colors.WHITE};
`;

export const Value = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.BOLD};
  color: ${theme.colors.WHITE};
  margin-top: 8px;
`;