import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    paddingVertical: 0,
    paddingHorizontal: 18,
    fontFamily: theme.fonts.REGULAR,
    fontSize: 15,
    backgroundColor: theme.colors.SECONDARY,
    borderRadius: 5,
    color: theme.colors.WHITE,
  },
  focusedContainer: {
    borderWidth: 2,
    borderColor: theme.colors.PRIMARY
  }
});