import React, { FunctionComponent, ReactNode } from 'react';
import { ViewStyle, StyleProp, TouchableOpacity, StyleSheet } from 'react-native';
import { activeOpacity } from 'utils';

import styles from './styles';

interface Props {
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const Pressable: FunctionComponent<Props> = ({ onPress, style, children, disabled }) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}
      style={StyleSheet.flatten([styles.pressable, style])}
      hitSlop={{ bottom: 2, left: 2, right: 2, top: 2 }}>
      {children}
    </TouchableOpacity>
  );
};

export default Pressable;
