import { View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { FinancialHealthCard } from '../../components/FinancialHealthCard';
import { HomeHeader } from '../../components/HomeHeader';
import { SmallButton } from '../../components/SmallButton';
import theme from '../../global/theme';

import { 
  Container, 
  FinancialHealthCardContainer, 
  FinancialHealthTitle, 
  LoanButonLeftIcon, 
  LoanButton, 
  LoanButtonTitle, 
  LoanButtonTitleContainer, 
  QuickActionsContainer
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

      <QuickActionsContainer>
        <SmallButton icon={<Feather name="plus" size={22} color={theme.colors.WHITE} />} title="Emprestar" />
        <SmallButton icon={<Feather name="dollar-sign" size={22} color={theme.colors.WHITE} />} title="Pagar" />
        <SmallButton icon={<Ionicons name="wallet-outline" size={22} color={theme.colors.WHITE} />} title="Receber" />
        <SmallButton icon={<Feather name="user" size={22} color={theme.colors.WHITE} />} title="Contatos" />
      </QuickActionsContainer>

      <LoanButton activeOpacity={0.8}>
        <LoanButtonTitleContainer>
          <LoanButonLeftIcon>
            <Ionicons name="wallet-outline" size={18} color={theme.colors.WHITE} />
          </LoanButonLeftIcon>

          <LoanButtonTitle>
            Meus empréstimos
          </LoanButtonTitle>
        </LoanButtonTitleContainer>

        <Feather name="chevron-right" size={20} color={theme.colors.WHITE} />
      </LoanButton>
    </Container>
  );
}