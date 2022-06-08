import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  padding: 30px 10px;
`;

export const LogoContainer = styled.View`
  margin-top: auto;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  margin-top: 5px;
  color: ${({theme}) => theme.colors.WHITE};
`;