import { StyleSheet, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { variables } from 'res/variables';

const headerHeight = getStatusBarHeight();
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    backgroundColor: variables.colors.white,
    height: height,
    paddingHorizontal: variables.spacing.large,
  },
  containerFullWidth: {
    backgroundColor: variables.colors.white,
    height,
    paddingHorizontal: 0,
  },
  headerHeadingMarginBottom: {
    marginBottom: variables.spacing.min,
  },
  headerMarginBottom: {
    marginBottom: variables.spacing.large,
  },
  headerMarginTop: {
    marginTop: variables.spacing.big,
  },
  navbar: {},
  navbarContainer: {
    backgroundColor: variables.colors.overlayHeaderBg,
    paddingTop: headerHeight,
    width,
    zIndex: 10,
  },
  safeAreaView: {},
});
