import { ReactNode } from 'react';

import { formatCurrency } from '../../utils/formatCurrency';

import { CardHeader, Container, Title, Value } from './styles';

interface FinancialHealthCardProps {
  title: string;
  icon: ReactNode;
  value: number;
}

export function FinancialHealthCard({ title, icon, value }: FinancialHealthCardProps) {
  return (
    <Container activeOpacity={0.75}>
      <CardHeader>
        <Title>{title}</Title>
        {icon}
      </CardHeader>

      <Value>
        R$ {formatCurrency(value)}
      </Value>
    </Container>
  );
}