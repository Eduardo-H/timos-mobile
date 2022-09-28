import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserImg = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: ${theme.colors.PRIMARY};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const UserImgText = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.REGULAR};
  color: ${theme.colors.WHITE};
`

export const Greetings = styled.View`
  flex-direction: column;
`;

export const GreetingsText = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.MEDIUM};
  color: ${theme.colors.WHITE};
  line-height: 21px;
`;

export const HeaderActions = styled.View`
  flex-direction: row;
`;