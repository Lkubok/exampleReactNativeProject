import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { variables, fontNames } from 'res';

export const headerHeight = getStatusBarHeight() + 54;

const toastContainer: StyleProp<ViewStyle> = {
  elevation: 1,
  left: 0,
  marginHorizontal: 0,
  marginTop: -headerHeight,
  maxHeight: 450,
  minHeight: 64,
  position: 'absolute',
  right: 0,
  top: -100,
  zIndex: 1999,
  backgroundColor: variables.colors.transparent,
};

const textStyles = {
  fontFamily: fontNames.SFCompactTextBold,
  fontSize: 12,
  letterSpacing: 0.26,
  marginHorizontal: 10,
  textAlign: 'center',
};

const badge: StyleProp<ViewStyle> = {
  flex: 1,
  flexDirection: 'row',
  paddingHorizontal: variables.spacing.big,
  alignItems: 'center',
  minHeight: 64,
};

export default StyleSheet.create({
  badgeError: {
    ...badge,
    backgroundColor: variables.colors.accentRed,
  },
  badgeSuccess: {
    ...badge,
    backgroundColor: variables.colors.accentGreen,
  },
  closeTouchable: {
    paddingLeft: variables.spacing.base,
    paddingRight: variables.spacing.medium,
    paddingVertical: variables.spacing.small,
    position: 'relative',
  },
  icon: {
    left: variables.spacing.medium,
    marginTop: 10,
    position: 'absolute',
  },
  text: {
    color: variables.colors.white,
    fontFamily: fontNames.SFCompactTextRegular,
    fontSize: variables.fontSize.base,
    letterSpacing: -0.32,
  },
  toastContainer,
  toastContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: headerHeight,
  },
  toastMessageError: {
    ...textStyles,
    color: variables.colors.white,
  },
  toastMessageInfo: {
    ...textStyles,
    color: variables.colors.white,
  },
  toastMessageSuccess: {
    ...textStyles,
    color: variables.colors.white,
  },
  toastMessageWarning: {
    ...textStyles,
    color: variables.colors.white,
  },
});
