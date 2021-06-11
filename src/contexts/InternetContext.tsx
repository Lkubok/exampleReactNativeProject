/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { createContext, useMemo, FunctionComponent, useRef, useEffect, useState, useCallback } from 'react';
import NetInfo from '@react-native-community/netinfo';

import { useToast, useTranslations } from 'hooks';

export const InternetContext = createContext({});

export type InternetContextProps = {
  isInternetAvailable: boolean;
};

export const InternetProvider: FunctionComponent = ({ children }) => {
  const [isInternetAvailable, setIsInternetAvailable] = useState(true);
  const { i18n } = useTranslations();
  const checkInternetDelay = 4000;
  const [triggerAlert, setTriggerAlert] = useState(false);

  const internetConnectionListener = useRef() as any;
  const resettingTriggerRef = useRef<any>(null);
  const isInternetRef = useRef(isInternetAvailable);

  const { showToast } = useToast();

  useEffect(() => {
    if (isInternetAvailable) {
      isInternetRef.current = isInternetAvailable;
    } else {
      isInternetRef.current = isInternetAvailable;
    }
  }, [isInternetAvailable]);

  const checkIfInternetIsAvailableWithDelay = useCallback(() => {
    if (!isInternetRef.current) {
      setTriggerAlert(true);
    }
  }, []);

  useEffect(() => {
    if (triggerAlert) {
      resettingTriggerRef.current = setTimeout(() => {
        setTriggerAlert(false);
      }, checkInternetDelay);
    }
  }, [triggerAlert]);

  useEffect(() => {
    internetConnectionListener.current = NetInfo.addEventListener((state) => {
      const isInternetReachable = state.isInternetReachable;
      if (typeof isInternetReachable === 'boolean') {
        setIsInternetAvailable(isInternetReachable);
        if (isInternetReachable === false) {
          setTimeout(() => {
            checkIfInternetIsAvailableWithDelay();
          }, checkInternetDelay);
        }
      }
    });
    return () => {
      internetConnectionListener.current = undefined;
    };
  }, [checkIfInternetIsAvailableWithDelay]);

  useEffect(() => {
    if (triggerAlert) {
      showToast({ message: i18n.t('no_internet_connection'), type: 'noWifi' });
    }
  }, [isInternetAvailable, triggerAlert, setTriggerAlert, showToast, i18n]);

  const internetValues = useMemo(
    () => ({
      isInternetAvailable,
    }),
    [isInternetAvailable],
  );

  return <InternetContext.Provider value={internetValues}>{children}</InternetContext.Provider>;
};
