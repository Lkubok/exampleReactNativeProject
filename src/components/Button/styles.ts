import { StyleSheet } from 'react-native';

import { variables, fontNames } from 'res';

export default StyleSheet.create({
  buttonStyle: {
    borderColor: variables.colors.accentRed,
    borderRadius: variables.borderRadius.base,
    borderWidth: 2,
    height: 60,
  },
  buttonWhiteStyle: {
    borderRadius: variables.borderRadius.small,
    borderWidth: 0,
    height: 56,
  },
  deselectText: {
    color: variables.colors.accentGreen,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    marginRight: variables.spacing.min,
    marginTop: 2,
  },
  indicator: {
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: variables.colors.white,
  },
  scrollList: {
    backgroundColor: variables.colors.white,
  },
  scrollStyle: {
    backgroundColor: variables.colors.white,
  },
  tabsContainer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    width: '100%',
  },
  titleStyle: {
    fontFamily: fontNames.SFCompactTextSemibold,
    fontSize: variables.fontSize.medium,
    letterSpacing: variables.letterSpacing.base,
  },
  titleWhiteStyle: {
    color: variables.colors.steel,
    fontSize: 16,
  },
});
