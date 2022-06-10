import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.BACKGROUND,
    paddingVertical: 25,
    paddingHorizontal: 30,
  },
  logoContainer: {
    marginTop: 'auto',
    marginBottom: 20
  },
  title: {
    fontFamily: theme.fonts.BOLD,
    fontSize: 22,
    color: theme.colors.WHITE,
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: theme.fonts.LIGHT,
    fontSize: 16,
    color: theme.colors.WHITE,
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 'auto'
  }
});