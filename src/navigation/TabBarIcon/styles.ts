import { StyleSheet } from 'react-native';
import { variables } from 'res';

export default StyleSheet.create({
  activeTick: {
    flex: 1,
    height: 2,
    position: 'absolute',
    top: 2,
    width: 15,
  },
  iconContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: variables.spacing.small,
    position: 'relative',
  },
  text: {
    fontSize: variables.fontSize.min,
    letterSpacing: -0.24,
  },
});
