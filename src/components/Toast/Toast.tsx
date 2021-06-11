/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useContext, useEffect, useRef, useMemo, FunctionComponent, useCallback } from 'react';
import { Text, Animated, Easing, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { ToastContext, ToastContextProps } from 'contexts';
import { getToastStyles, getToastTextStyles, getBadgeStyles } from './themes';
import IconNoWifi from 'assets/noWifi.svg';
import IconChatCount from 'assets/chatCount.svg';
import IconChatWarning from 'assets/chatWarning.svg';

import styles, { headerHeight } from './styles';

interface ToastProps {
  unclickable?: boolean;
  onDismiss?: () => void;
}

export const Toast: FunctionComponent<ToastProps> = ({ unclickable }) => {
  const { toastState, hideToast } = useContext(ToastContext) as ToastContextProps;
  const opacityRef = useRef(new Animated.Value(headerHeight));
  const translateYRef = useRef(new Animated.Value(-100));

  const closeToast = useCallback(() => hideToast(), [hideToast]);

  const toastIcon = useMemo(() => {
    switch (toastState.type) {
      case 'success':
        return <Icon color="white" size={18} name="check-circle" type="font-awesome" />;
      case 'warning':
        return <Icon color="white" size={18} name="exclamation-circle" type="font-awesome" />;
      case 'error':
        return <Icon color="white" size={18} name="times-circle" type="font-awesome" />;
      case 'info':
        return <Icon color="white" size={18} name="info-circle" type="font-awesome" />;
      case 'noWifi':
        return <IconNoWifi style={styles.icon} height={18} width={18} />;
      case 'chatWarning':
        return <IconChatWarning style={styles.icon} height={18} width={18} />;
      case 'chatCount':
        return <IconChatCount style={styles.icon} height={18} width={18} />;
      default:
        return <Icon color="white" size={18} name="check-circle" type="font-awesome" />;
    }
  }, [toastState.type]);

  useEffect(() => {
    if (toastState.show) {
      Animated.parallel([
        Animated.timing(translateYRef.current, {
          duration: toastState.animDuration,
          easing: Easing.ease,
          toValue: headerHeight + 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacityRef.current, {
          duration: toastState.animDuration,
          easing: Easing.ease,
          toValue: 1,
          useNativeDriver: true,
        })
      ]).start()
    } else {
      Animated.parallel([
        Animated.timing(translateYRef.current, {
          duration: toastState.animDuration,
          easing: Easing.ease,
          toValue: -100,
          useNativeDriver: true,
        }),
        Animated.timing(opacityRef.current, {
          duration: toastState.animDuration ? Math.floor(toastState.animDuration / 2) : 500,
          easing: Easing.ease,
          toValue: 0,
          useNativeDriver: true,
        })
      ]).start()
    }
  }, [toastState]);

  const handlePress = useCallback(() => {
    closeToast();
  }, [closeToast]);

  const renderClickableComponent = useMemo(
    () => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handlePress}
        style={styles.toastContent}
        hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }}>
        <View style={getBadgeStyles(toastState.type)}>
          {toastIcon}
          <View style={styles.closeTouchable}>
            <Text style={styles.text}>{toastState.message}</Text>
          </View>
        </View>
      </TouchableOpacity>
    ),
    [handlePress, toastIcon, toastState.message, toastState.type],
  );

  const renderUnclickableComponent = useMemo(
    () => (
      <View style={styles.toastContent}>
        {toastIcon}
        <Text ellipsizeMode="tail" numberOfLines={4} style={getToastTextStyles(toastState.type)} testID="toastMessage">
          {toastState.message}
        </Text>
      </View>
    ),
    [toastIcon, toastState.message, toastState.type],
  );

  return (
    <Animated.View
      style={[
        getToastStyles(toastState.type),
        { opacity: opacityRef.current, transform: [{ translateY: translateYRef.current }] },
      ]}>
      {unclickable ? renderUnclickableComponent : renderClickableComponent}
    </Animated.View>
  );
};

Toast.defaultProps = {
  unclickable: false,
};

export default Toast;
