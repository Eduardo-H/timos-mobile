import { View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { FinancialHealthCard } from '../../components/FinancialHealthCard';
import { HomeHeader } from '../../components/HomeHeader';
import theme from '../../global/theme';

import { 
  Container, FinancialHealthCardContainer, FinancialHealthTitle
} from './styles';

export function Home() {
  return (
    <Container>
      <HomeHeader />

      <FinancialHealthTitle>
        Saúde Financeira
      </FinancialHealthTitle>

      <FinancialHealthCardContainer>
        <FinancialHealthCard 
          title="A Receber" 
          value={1500} 
          icon={
            <Feather name="arrow-up-circle" size={20} color={theme.colors.GREEN} />
          }
        />

        <View style={{ paddingHorizontal: 5 }} />

        <FinancialHealthCard 
          title="A Pagar" 
          value={1020} 
          icon={
            <Feather name="arrow-down-circle" size={20} color={theme.colors.RED} />
          } 
        />
      </FinancialHealthCardContainer>
    </Container>
  );
}