import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.BACKGROUND,
    paddingVertical: 25,
    paddingHorizontal: 30
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.MEDIUM,
    fontSize: 24,
    color: theme.colors.WHITE,
    textAlign: 'center',
    marginTop: 5
  },
  form: {
    width: '100%',
    marginTop: 30
  },
  formItem: {
    marginBottom: 15
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    marginTop: 15    
  },
  signUpButton: {
    alignSelf: 'center',
    marginTop: 15,
    padding: 5
  },
  signUpButtonText: {
    fontFamily: theme.fonts.REGULAR,
    fontSize: 15,
    color: theme.colors.WHITE
  }
});