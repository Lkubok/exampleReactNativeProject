import React, { FunctionComponent } from 'react';
import { Text, View, ViewStyle, StyleProp, StyleSheet } from 'react-native';
import { Button as RneButton } from 'react-native-elements';
import { variables } from 'res';

import styles from './styles';

interface Props {
  disabled?: boolean;
  icon?: Element;
  title: string | Element;
  type?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
}

const Button: FunctionComponent<Props> = ({ disabled, icon, onPress, title, type, style, loading }) => {
  let bgColor = 'transparent';
  let borderColor = variables.colors.accentRed;

  if (type === 'white') {
    bgColor = variables.colors.white;
  }
  if (type === 'red') {
    bgColor = variables.colors.accentRed;
  } else if (type === 'green') {
    bgColor = variables.colors.accentGreen;
    borderColor = variables.colors.accentGreen;
  } else if (type === 'outline') {
    bgColor = '';
  }
  if (disabled) {
    bgColor = variables.colors.pinkishGrey;
    borderColor = variables.colors.pinkishGrey;
  }

  return (
    <RneButton
      buttonStyle={StyleSheet.flatten([
        styles.buttonStyle,
        { backgroundColor: bgColor, borderColor: borderColor },
        type === 'white' && styles.buttonWhiteStyle,
        ,
      ])}
      containerStyle={StyleSheet.flatten([style])}
      disabled={disabled}
      disabledStyle={{
        backgroundColor: type !== 'outline' ? variables.colors.pinkishGrey : variables.colors.transparent,
        borderColor: variables.colors.pinkishGrey,
      }}
      disabledTitleStyle={{
        color: type !== 'outline' ? variables.colors.white : variables.colors.pinkishGrey,
      }}
      titleStyle={StyleSheet.flatten([
        { color: type === 'outline' ? variables.colors.accentRed : variables.colors.white },
        styles.titleStyle,
      ])}
      icon={icon && <View style={styles.iconWrapper}>{icon}</View>}
      title={
        <Text
          style={StyleSheet.flatten([
            { color: type === 'outline' ? variables.colors.accentRed : variables.colors.white },
            styles.titleStyle,
            type === 'white' && styles.titleWhiteStyle,
          ])}>
          {title}
        </Text>
      }
      loading={loading}
      onPress={onPress}
    />
  );
};

export default Button;
