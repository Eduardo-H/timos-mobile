import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: ${theme.colors.BACKGROUND};
  padding: 25px 30px;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.MEDIUM};
  color: ${theme.colors.WHITE};
  text-align: center;
  margin-top: 5px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 30px;
`;

export const FormItem = styled.View`
  margin-bottom: 15px;
`;

export const ErrorMessage = styled.Text`
  color: ${theme.colors.RED};
  margin-top: 2px;
`

export const SingUpButtonContainer = styled. View`
  width: 50%;
  align-self: center;
  margin-top: 15px;
`;

export const SignInButton = styled.TouchableOpacity`
  align-self: center;
  margin-top: 15px;
  padding: 5px;
`;

export const SignInButtonText = styled.Text`
  font-size: 15px;
  font-family: ${theme.fonts.LIGHT};
  color: ${theme.colors.WHITE};
`;