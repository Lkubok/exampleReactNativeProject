import { StyleSheet } from 'react-native';

import { fontNames, variables } from 'res';

export default StyleSheet.create({
  inModal: {
    backgroundColor: variables.colors.black30,
    borderTopEndRadius: variables.borderRadius.small,
    borderTopStartRadius: variables.borderRadius.small,
  },
  navContainer: {
    borderBottomColor: variables.colors.inputBorder,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    minHeight: 54,
  },
  navContainerHasBottom: {
    height: 70,
    position: 'relative',
  },
  navContainerNoBorder: {
    borderBottomWidth: 0,
  },
  navContainerOverlay: {
    borderBottomColor: variables.colors.overlayHeaderBorder,
    borderBottomWidth: 1,
    minHeight: 54,
  },
  navContentBottom: {
    alignItems: 'center',
    bottom: 4,
    color: variables.colors.black,
    display: 'flex',
    fontFamily: fontNames.SFCompactTextSemibold,
    fontSize: variables.fontSize.base,
    letterSpacing: -0.41,
    position: 'absolute',
    width: '100%',
  },
  navContentCenter: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    left: 0,
    minHeight: 54,
    position: 'absolute',
    right: 0,
    width: '100%',
    zIndex: 0,
  },
  navContentCenterHasBottom: {
    top: 8,
  },
  navContentCenterTitle: {
    color: variables.colors.black,
    fontFamily: fontNames.SFCompactTextSemibold,
    fontSize: variables.fontSize.base,
    letterSpacing: -0.41,
  },

  navContentLeft: {
    alignItems: 'flex-start',
    flexGrow: 1,
    justifyContent: 'center',
    paddingLeft: variables.spacing.medium,
    zIndex: 1,
  },
  navContentRight: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingRight: variables.spacing.medium,
    zIndex: 1,
  },
});
