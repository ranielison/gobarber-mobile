import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.primary,
    fontSize: 22,
  },
  subtitle: {
    color: colors.secundary,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
