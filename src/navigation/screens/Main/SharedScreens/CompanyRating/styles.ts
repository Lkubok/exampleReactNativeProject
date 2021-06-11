import { StyleSheet } from 'react-native';

import { variables } from 'res';

export default StyleSheet.create({
  containerDataStyles: {
    paddingHorizontal: variables.spacing.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightButton: {
    marginLeft: variables.spacing.base,
  },
});
