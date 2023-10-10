import { StyleSheet } from 'react-native';
import { $COLORS } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInput: {
    height: 60,
    width: '100%',
    borderColor: $COLORS.gray,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
  },
});
