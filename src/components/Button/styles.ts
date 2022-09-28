import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.PRIMARY};
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: ${theme.fonts.MEDIUM};
  color: ${theme.colors.WHITE};
`;