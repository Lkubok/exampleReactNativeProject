import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity, ViewStyle, StyleSheet, StyleProp } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { variables } from 'res/variables';
import ChevronLeft from 'assets/chevronLeft.svg';

import styles from './styles';

interface Props {
  bottom?: React.ReactNode;
  center?: React.ReactNode;
  left?: React.ReactNode;
  noBorder?: boolean;
  right?: React.ReactNode;
  withLinkBack?: boolean;
  style?: StyleProp<ViewStyle>;
  inModal?: boolean;
}

const Navbar: FunctionComponent<Props> = ({ bottom, center, left, noBorder, right, withLinkBack, inModal, style }) => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    withLinkBack && goBack();
  }, [goBack, withLinkBack]);

  const renderBackButton = useMemo(
    () => (
      <TouchableOpacity onPress={handleGoBack} hitSlop={{ bottom: 24, top: 24, left: 24, right: 24 }}>
        <ChevronLeft fill={variables.colors.accentRed} height={24} width={24} />
      </TouchableOpacity>
    ),
    [handleGoBack],
  );

  const renderLeft = useMemo(
    () => (
      <>
        {withLinkBack && renderBackButton}
        {left}
      </>
    ),
    [left, renderBackButton, withLinkBack],
  );

  const renderCenter = useMemo(
    () => (
      <View>
        <Text style={styles.navContentCenterTitle}>{center}</Text>
      </View>
    ),
    [center],
  );
  const renderRightSide = useMemo(() => <>{right}</>, [right]);
  const renderBottom = useMemo(() => <View style={styles.navContentBottom}>{bottom}</View>, [bottom]);

  return (
    <>
      <View
        style={StyleSheet.flatten([
          styles.navContainer,
          noBorder && styles.navContainerNoBorder,
          !!bottom && styles.navContainerHasBottom,
          inModal && styles.inModal,
          style && style,
        ])}>
        <View style={styles.navContentLeft}>{(withLinkBack || left) && renderLeft}</View>
        <View style={StyleSheet.flatten([styles.navContentCenter, !!bottom && styles.navContentCenterHasBottom])}>
          {center && renderCenter}
        </View>
        <View style={styles.navContentRight}>{right && renderRightSide}</View>
        {bottom && renderBottom}
      </View>
    </>
  );
};

export default Navbar;
