import { StyleSheet } from 'react-native';

import { variables } from 'res';

export default StyleSheet.create({
  container: {
    backgroundColor: variables.colors.pale,
    borderTopLeftRadius: variables.spacing.medium,
    borderTopRightRadius: variables.spacing.medium,
    paddingHorizontal: variables.spacing.medium,
    paddingVertical: variables.spacing.medium,
  },
  icon: {
    height: 30,
    marginRight: variables.spacing.min,
    width: 30,
  },
  ratingStars: {
    flexDirection: 'row',
    height: 30,
    marginBottom: variables.spacing.big,
    marginTop: variables.spacing.small,
  },
});
