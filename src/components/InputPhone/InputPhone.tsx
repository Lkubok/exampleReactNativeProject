import React, { FunctionComponent, useCallback, useRef } from 'react';
import { Text, View, ViewStyle, StyleProp, StyleSheet, TextInput } from 'react-native';
import { map, toString } from 'lodash';
import ReactNativePickerModule from 'react-native-picker-module';

import { Input, Select } from 'components';

import styles from './styles';
import { PhonePrefix } from 'models/types';
import i18n from 'translations';

interface Props {
  label?: string;
  prefixPlaceholder: string;
  phonePrefixes: PhonePrefix[];
  numberPlaceholder: string;
  numberValue: string;
  onPrefixChange: (prefix: string) => void;
  onPhoneNumberChange: (number: string) => void;
  style?: StyleProp<ViewStyle>;
  defaultPrefixValue?: string;
  onSubmitEditing?: () => void;
  errorPrefix?: string;
  errorPhoneNumber?: string;
  ref?: React.RefObject<ReactNativePickerModule>;
}

const InputPhone: FunctionComponent<Props> = React.forwardRef(
  (
    {
      phonePrefixes,
      label,
      numberPlaceholder,
      numberValue,
      prefixPlaceholder,
      style,
      onPhoneNumberChange,
      onPrefixChange,
      defaultPrefixValue,
      onSubmitEditing,
      errorPrefix,
      errorPhoneNumber,
    },
    forwardedRef,
  ) => {
    const passedValues = map(phonePrefixes, (prefix) => {
      return {
        label: prefix.name,
        value: prefix.prefix,
        id: prefix.id,
      };
    });
    const phoneRef = useRef<TextInput>();

    const handlePrefixSelect = useCallback(
      (prefixId: string) => {
        onPrefixChange(toString(prefixId));

        setTimeout(() => {
          phoneRef.current?.focus();
        }, 500);
      },
      [onPrefixChange],
    );

    const errors = [errorPrefix, errorPhoneNumber].filter(Boolean);

    return (
      <View style={StyleSheet.flatten([styles.wrapperStyle, style && style])}>
        <Text style={styles.labelStyle}>{label}</Text>
        <View style={styles.rowStyle}>
          <View style={styles.colPrefix}>
            <Select
              defaultValue={defaultPrefixValue}
              values={passedValues}
              placeholder={prefixPlaceholder}
              pickerHeader={i18n.t('picker_header_phone_prefix')}
              onValueChange={(prefixValue) => handlePrefixSelect(prefixValue)}
              onCancel={() => {
                setTimeout(() => {
                  phoneRef.current?.focus();
                }, 500);
              }}
              ref={forwardedRef}
            />
          </View>
          <View style={styles.colNumber}>
            <Input
              // maxLength={9}
              placeholder={numberPlaceholder}
              value={numberValue}
              keyboardType="number-pad"
              onChangeText={(inputValue) => onPhoneNumberChange(inputValue)}
              ref={phoneRef}
              returnKeyType="next"
              onSubmitEditing={onSubmitEditing}
            />
          </View>
        </View>
        {!!errors?.length && (
          <View style={{ marginTop: 12 }}>
            {errors.map((error) => (
              <Text style={styles.errorStyle}>{error}</Text>
            ))}
          </View>
        )}
      </View>
    );
  },
);

export default InputPhone;
