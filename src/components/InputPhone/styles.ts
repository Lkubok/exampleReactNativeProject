import { StyleSheet } from 'react-native';

import { variables, fontNames } from 'res';

export default StyleSheet.create({
  colNumber: {
    flexGrow: 1,
    height: 32,
  },
  colPrefix: { marginRight: variables.spacing.base, width: 50 },
  errorStyle: {
    color: variables.colors.destructiveRed,
    fontFamily: fontNames.SFCompactTextMedium,
    fontSize: variables.fontSize.small,
    marginLeft: 0,
  },
  inputStyle: {
    fontSize: variables.fontSize.base,
    height: 0,
    lineHeight: 0,
    margin: 0,
    padding: 0,
  },
  labelStyle: {
    color: variables.colors.steel,
    fontFamily: fontNames.SFCompactTextSemibold,
    fontSize: variables.fontSize.medium,
    marginBottom: variables.spacing.base,
  },
  rowStyle: {
    // alignContent: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    height: 32,
    justifyContent: 'flex-start',
  },
  wrapperStyle: {
    // height: 74,
  },
});
