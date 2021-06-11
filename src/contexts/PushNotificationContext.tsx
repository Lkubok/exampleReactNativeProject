/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { createContext, FunctionComponent, useState, useCallback } from 'react';

import { NotificationType } from 'models/types';

interface Props {
  children: React.ReactNode;
}

export type PushNotificationContextProps = {
  notificationType: NotificationType;
  setClickedNotificationType: (notification: NotificationType) => void;
  clearNotificationData: () => void;
  notificationData: any;
  setNotificationData: (data: any) => void;
  setTriggerMessageThreadUpdate: (state: boolean) => void;
  triggerMessageThreadUpdate: boolean;
  setTriggerMarketPlaceRefresh: (state: boolean) => void;
  triggerMarketPlaceRefresh: boolean;
};

export const PushNotificationContext = createContext({});

export const PushNotificationProvider: FunctionComponent<Props> = ({ children }) => {
  const [clickedNotificationType, setClickedNotificationType] = useState<NotificationType>(null);
  const [triggerMessageThreadUpdate, setTriggerMessageThreadUpdate] = useState(false);
  const [triggerMarketPlaceRefresh, setTriggerMarketPlaceRefresh] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [notificationData, setNotificationData] = useState<any>(null);

  // console.log('PUSH CONTEXT DATA', notificationData);

  const clearNotificationData = useCallback(() => {
    setNotificationData(null);
    setClickedNotificationType(null);
  }, []);

  const providedValues: PushNotificationContextProps = {
    clearNotificationData,
    notificationData,
    notificationType: clickedNotificationType,
    setClickedNotificationType,
    setNotificationData,
    setTriggerMessageThreadUpdate,
    triggerMessageThreadUpdate,
    setTriggerMarketPlaceRefresh,
    triggerMarketPlaceRefresh,
  };
  return <PushNotificationContext.Provider value={providedValues}>{children}</PushNotificationContext.Provider>;
};
