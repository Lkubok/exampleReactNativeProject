import { StyleSheet } from 'react-native';

import { variables } from 'res';

export default StyleSheet.create({
  containerDataStyles: {
    paddingHorizontal: variables.spacing.medium,
    paddingTop: variables.spacing.medium,
  },
  contentStyle: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: variables.spacing.min,
  },
  rightButton: {
    marginLeft: variables.spacing.base,
  },
  singleCard: {
    width: '50%',
  },
});
