import { StyleSheet } from 'react-native';

import { variables } from 'res';

export default StyleSheet.create({
  container: {
    backgroundColor: variables.colors.white,
    paddingHorizontal: variables.spacing.base,
    paddingTop: variables.spacing.base,
  },
  loading: {
    right: 0,
  },
  searchBox: {
    paddingLeft: variables.spacing.big,
    paddingRight: variables.spacing.big,
  },
});
