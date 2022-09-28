import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';

import { Container, LogoContainer, Title, Subtitle } from './styles';

export function Welcome() {
  return (
    <Container>
      <LogoContainer>
        <Logo width="95" height="95" />
      </LogoContainer>

      <Title>
        Seja bem-vindo(a) ao Timos
      </Title>

      <Subtitle>
        Não esqueça nunca mais de seus empréstimos.
      </Subtitle>

      <Button title="Começar" />
    </Container>
  )
}