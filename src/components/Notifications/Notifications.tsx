/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { Platform } from 'react-native';
import Bugsnag from '@bugsnag/react-native';
import { Notification } from 'react-native-in-app-message';
import _ from 'lodash';
import messaging from '@react-native-firebase/messaging';
import { useSelector } from 'react-redux';

import { NotificationComponent } from 'components';
import { usePushNotification } from 'hooks';
import { variables } from 'res';
import { opacityColor } from 'utils';
import { selectors as communicationSelectors } from 'store/communication';

const handleFcmRequestFailure = async (error: any) => {
  try {
    if (error !== messaging.AuthorizationStatus.DENIED && _.isError(error)) {
      Bugsnag.notify(error, (report) => {
        // eslint-disable-next-line no-param-reassign
        report.context = 'Problem with FCM request.';
      });
    }
  } catch (e) {
    return null;
  }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Notifications = () => {
  const ref = useRef<any>(null);
  const timerRef = useRef<any>(null);
  const [content, setContent] = useState<any>({ body: ' ', title: ' ' });
  const { setClickedNotificationType, setNotificationData, setTriggerMessageThreadUpdate } = usePushNotification();
  const currentThreadParams = useSelector(communicationSelectors.getCurrentThreadParams);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    messaging()
      .hasPermission()
      .then((authStatus) => {
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        if (!enabled) {
          messaging().requestPermission().catch(handleFcmRequestFailure);
        }
      });

    messaging()
      .getToken()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((to) => {
        console.log('FCM TOKEN', to);
      })
      .catch((e) => console.error('ERR', e));

    messaging()
      .getInitialNotification()
      .then(handleNotificationClick)
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onNotificationOpenedApp(handleNotificationClick);
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNotificationClick = useCallback(
    (payload: any) => {
      let data;
      const notification = payload.notification || payload;

      if (Platform.OS === 'android') {
        data = payload?.data;
      } else {
        data = payload?.data;
      }

      const unifiedNotificationPayload = { ...notification, ...data };
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      setNotificationData(unifiedNotificationPayload);
      setClickedNotificationType(unifiedNotificationPayload.notification_type);

      return null;
    },
    [setClickedNotificationType, setNotificationData],
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      const shouldPushNotificaionRefreshMessagingThread =
        currentThreadParams?.customerSlug === remoteMessage?.data?.customer_slug &&
        currentThreadParams?.offerSlug === remoteMessage?.data?.offer_slug &&
        remoteMessage.data?.notification_type === 'new_message';

      if (shouldPushNotificaionRefreshMessagingThread) {
        setContent(remoteMessage);
        setTriggerMessageThreadUpdate(true);
      } else {
        ref.current?.hide();
        setContent(remoteMessage);
        ref.current?.show();
        timerRef.current = setTimeout(() => {
          ref.current?.hide();
        }, 5000);
      }
    });
    return unsubscribe;
  }, [currentThreadParams?.customerSlug, currentThreadParams?.offerSlug, setTriggerMessageThreadUpdate]);

  const onPress = useCallback(() => {
    ref.current?.hide();
    handleNotificationClick(content);
  }, [content, handleNotificationClick]);

  const customComponent = useMemo(
    () => (
      <NotificationComponent
        title={_.get(content, 'notification.title', content.title)}
        body={_.get(content, 'notification.body', content.body)}
        onPress={onPress}
      />
    ),
    [content, onPress],
  );

  const topInset = Platform.OS === 'android' ? 32 : 0;
  const backgroundColor = Platform.OS === 'android' ? opacityColor(variables.colors.white, 0.8) : 'transparent';

  return (
    <Notification
      autohide={false}
      tapticFeedback={true}
      blurType="light"
      customComponent={customComponent}
      hideStatusBar={false}
      style={{ backgroundColor, borderRadius: 6, marginTop: topInset }}
      ref={ref}
      showKnob
    />
  );
};

export default Notifications;
