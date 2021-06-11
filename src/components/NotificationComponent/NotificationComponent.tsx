/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const notificationIconLogo = require('../../assets/notificationIcon.png');

interface Props {
  onPress: () => void;
  title: string;
  body: string;
}

const NotificationComponent: FC<Props> = ({ onPress, title, body }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }}>
      <View style={styles.iconContainer}>
        <Image resizeMode="contain" source={notificationIconLogo} style={styles.notificationIcon} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationComponent;
