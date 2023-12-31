import { StyleSheet } from 'react-native';
import { $COLORS } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: $COLORS.primary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
