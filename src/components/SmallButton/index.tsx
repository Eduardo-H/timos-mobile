import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Button, Container, Title } from './styles';

interface SmallButtonProps extends TouchableOpacityProps {
  icon: ReactNode;
  title: string;
}

export function SmallButton({ icon, title, ...rest }: SmallButtonProps) {
  return (
    <Container>
      <Button {...rest}>
        {icon}
      </Button>

      <Title>
        {title}
      </Title>
    </Container>
  );
}