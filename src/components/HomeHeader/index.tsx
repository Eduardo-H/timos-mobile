import Feather from 'react-native-vector-icons/Feather';

import theme from '../../global/theme';

import { 
  Container,
  HeaderActions, 
  UserImg, 
  UserImgText, 
  UserInfo, 
  Greetings,
  GreetingsText
} from './styles';

export function HomeHeader() {
  return (
    <Container>
      <UserInfo>
        <UserImg activeOpacity={0.75}>
          <UserImgText>
            EO
          </UserImgText>
        </UserImg>

        <Greetings>
          <GreetingsText>
            Olá,
          </GreetingsText>
          <GreetingsText>
            Eduardo!
          </GreetingsText>
        </Greetings>
      </UserInfo>

      <HeaderActions>
        <Feather name="user-plus" size={20} color={theme.colors.WHITE} style={{ marginRight: 15 }} />
        <Feather name="bell" size={20} color={theme.colors.WHITE} />
      </HeaderActions>
    </Container>
  );
}