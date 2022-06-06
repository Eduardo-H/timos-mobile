import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.white};
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.white};
`;