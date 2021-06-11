import { StyleSheet } from 'react-native';

import { variables, fontNames } from 'res';

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: variables.colors.whiteTwo,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingHorizontal: variables.spacing.small,
    paddingTop: variables.spacing.medium,
  },
  contentContainer: {
    paddingBottom: variables.spacing.large,
  },
  contentWrapper: {
    flex: 1,
  },
  item: {
    backgroundColor: variables.colors.white,
    borderRadius: variables.borderRadius.min,
    height: 304,
    overflow: 'hidden',
    shadowColor: variables.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemBottom: {
    alignItems: 'flex-start',
    marginTop: variables.spacing.min,
    width: '100%',
  },
  itemBottomPackage: {
    color: variables.colors.accentGreen,
    fontFamily: fontNames.SFCompactTextMedium,
    fontSize: 16,
    lineHeight: 18,
  },
  itemBottomPrice: {
    color: variables.colors.accentGreen,
    fontFamily: fontNames.SFCompactTextSemibold,
    fontSize: 20,
    letterSpacing: -0.4,
    lineHeight: 22,
  },
  itemDataName: {
    color: variables.colors.accentRed,
    fontFamily: fontNames.SFCompactTextSemibold,
    fontSize: variables.fontSize.medium,
    height: 48,
    letterSpacing: -0.5,
  },
  itemDataWrapper: {
    flex: 1,
    paddingHorizontal: variables.spacing.base,
    paddingVertical: variables.spacing.base,
  },
  itemImage: {
    flexGrow: 1,
    zIndex: 1,
  },
  itemImageWrapper: {
    height: 160,
    position: 'relative',
  },
  itemLocationText: {
    color: variables.colors.steel,
    fontFamily: fontNames.SFCompactTextMedium,
    fontSize: variables.fontSize.small,
    letterSpacing: -0.32,
    textTransform: 'uppercase',
  },
  itemLocationWrapper: {
    marginTop: variables.spacing.min,
  },
  itemProductBadge: {
    left: 0,
    position: 'absolute',
    top: 2,
    zIndex: 2,
  },
  itemText: {
    fontFamily: fontNames.SFCompactTextSemibold,
    fontSize: variables.fontSize.medium,
    textAlign: 'center',
  },
  itemWrapper: {
    backgroundColor: variables.colors.whiteTwo,
    borderRadius: variables.borderRadius.min,
    elevation: 10,
    flex: 1 / 2,
    marginHorizontal: variables.spacing.small,
    marginVertical: variables.spacing.small,
    shadowColor: variables.colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  list: {
    backgroundColor: variables.colors.whiteTwo,
    paddingHorizontal: variables.spacing.min,
    paddingTop: variables.spacing.base,
  },
});
