import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

// const { height } = Dimensions.get('window');

import { Navbar } from 'components';
import { variables } from 'res/variables';
import { isIOS } from 'utils';

import styles from './styles';

interface Props {
  bgColor?: string;
  compact?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
  navbarLeft?: ReactNode;
  navbarRight?: ReactNode;
  navbarCenter?: ReactNode;
  navbarBottom?: ReactNode;
  withBackButton?: boolean;
  withBottomNavigation?: boolean;
}

const ScreenContainer: FunctionComponent<Props> = ({
  bgColor,
  compact,
  children,
  fullWidth,
  navbarLeft,
  navbarRight,
  navbarCenter,
  navbarBottom,
  withBackButton,
  withBottomNavigation,
}) => {
  const barStyle = 'dark-content';

  const renderStatusBar = () =>
    isIOS ? (
      <StatusBar barStyle={barStyle} />
    ) : (
      <StatusBar backgroundColor={variables.colors.transparent} barStyle={barStyle} translucent={true} />
    );

  const renderNavbar = useMemo(
    () => (
      <View style={styles.navbarContainer}>
        <Navbar
          bottom={navbarBottom && navbarBottom}
          center={navbarCenter && navbarCenter}
          right={navbarRight}
          withLinkBack={withBackButton}
          left={navbarLeft}
        />
      </View>
    ),
    [navbarBottom, navbarCenter, navbarRight, navbarLeft, withBackButton],
  );

  // If there is bottom navigation - customize screen height
  let bottomNavigation = 0;
  if (withBottomNavigation) {
    if (isIOS) {
      bottomNavigation = variables.navbarBottomHeight.iOS;
    } else {
      bottomNavigation = variables.navbarBottomHeight.android;
    }
  }

  const navbar = navbarLeft || navbarRight || navbarCenter || withBackButton;

  // const safeAreaHeight = height - bottomNavigation;
  //TODO: consider restoring upper one line
  // const safeAreaHeight = Platform.OS === 'android' ? height : height - bottomNavigation - headerHeight;

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        !!compact && { paddingHorizontal: variables.spacing.medium },
        !!fullWidth && styles.containerFullWidth,
        !!bgColor && { backgroundColor: bgColor },
        { paddingBottom: bottomNavigation },
      ])}>
      {renderStatusBar()}
      {navbar && renderNavbar}
      {/* <SafeAreaView style={StyleSheet.flatten([styles.safeAreaView, { height: safeAreaHeight }])}> */}
      {/* TODO: consider deleting code under and restore upper one */}
      {/* <SafeAreaView style={StyleSheet.flatten([styles.safeAreaView, { height: height }])}> */}
      {navbar && <View style={styles.navbar} />}
      {children}
      {/* </SafeAreaView> */}
    </View>
  );
};

export default ScreenContainer;
