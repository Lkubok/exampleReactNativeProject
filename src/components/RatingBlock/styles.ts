import { StyleSheet } from 'react-native';

import { fontNames, variables } from 'res';

export default StyleSheet.create({
  container: {},
  containerWrapper: {
    flexGrow: 1,
    marginBottom: variables.spacing.base,
  },
  emptyBox: {
    height: 10,
  },
  headerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: variables.spacing.small,
  },
  icon: {
    height: 30,
    marginRight: variables.spacing.min,
    width: 30,
  },
  link: {
    color: variables.colors.accentRed,
    fontFamily: fontNames.SFCompactTextSemibold,
    fontSize: variables.fontSize.medium,
  },
  messageStyle: {
    color: variables.colors.black,
    fontSize: variables.fontSize.base,
    lineHeight: variables.lineHeight.base,
  },
  ratingStars: {
    flexDirection: 'row',
    height: 30,
    marginBottom: variables.spacing.big,
    marginTop: variables.spacing.small,
  },
});
