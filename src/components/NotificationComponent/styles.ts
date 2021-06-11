import { StyleSheet } from 'react-native';

import { variables, fontNames } from 'res';

export default StyleSheet.create({
  body: {
    color: variables.colors.black,
    fontFamily: fontNames.SFCompactTextRegular,
    fontSize: variables.fontSize.base,
  },
  container: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
  },
  iconContainer: {
    justifyContent: 'center',
    marginHorizontal: 12,
  },
  notificationIcon: {
    borderRadius: variables.borderRadius.base,
    height: 40,
    width: 40,
  },
  textWrapper: {
    justifyContent: 'center',
  },
  title: {
    color: variables.colors.black,
    fontFamily: fontNames.SFCompactTextBold,
    fontSize: variables.fontSize.medium,
    marginBottom: variables.spacing.base,
  },
});
