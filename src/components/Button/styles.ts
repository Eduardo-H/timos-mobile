import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: 5  
  },
  title: {
    fontSize: 15,
    fontFamily: theme.fonts.MEDIUM,
    color: theme.colors.WHITE,
  }
});