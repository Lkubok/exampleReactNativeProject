import { StyleSheet, Dimensions, StyleProp, TextStyle } from 'react-native';
import { variables, fontNames } from 'res';
import { opacityColor, navigationTabBarHeight } from 'utils';

const { width, height } = Dimensions.get('window');

const text: StyleProp<TextStyle> = {
  color: variables.colors.steel,
  fontFamily: fontNames.SFCompactTextMedium,
  fontSize: variables.fontSize.min,
  letterSpacing: -0.24,
};

export default StyleSheet.create({
  backdrop: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  iconContainer: {
    flex: 1.6,
  },
  menuPositionContainer: {
    flex: 1,
  },
  overlay: {
    backgroundColor: opacityColor(variables.colors.black, 0.5),
    bottom: -(height + navigationTabBarHeight),
    height: height + navigationTabBarHeight,
    paddingBottom: navigationTabBarHeight,
    position: 'absolute',
    width,
  },
  plusButtonContainer: {
    alignItems: 'center',
    backgroundColor: variables.colors.white,
    borderColor: variables.colors.accentRed,
    borderRadius: 24,
    borderWidth: 2,
    height: 48,
    justifyContent: 'center',
    top: -18,
    transform: [{ rotate: '45deg' }],
    width: 48,
  },
  plusButtonWrapper: {
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: variables.colors.white,
    borderTopColor: variables.colors.pinkishGrey,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    position: 'relative',
    zIndex: 2000,
  },
  text: {
    ...text,
  },
  textActive: {
    color: variables.colors.accentGreen,
  },
  textContainer: {
    alignItems: 'center',
    flex: 2.3,
  },
  textUnderPlusIcon: {
    ...text,
    color: variables.colors.accentRed,
    marginTop: -16,
  },
});
