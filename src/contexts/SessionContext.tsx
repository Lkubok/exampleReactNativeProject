import React, { createContext, FC, useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import {
  keychain_getSessionToken,
  keychain_setSessionToken,
  keychain_removeSessionToken,
  keychain_setSessionTokenExpireDate,
  keychain_removeSessionTokenExpireDate,
  keychain_getSessionTokenExpireDate,
  axiosBaseConfig,
  axiosSetAuthToken,
  axiosRemoveAuthToken,
} from 'utils';
import { requests as settingsRequests } from 'api/settings';
import { requests as userRequests } from 'api/user';
import { actions as appParamsActions, selectors as appParamsSelectors } from 'store/appParams';
import { actions as userActions } from 'store/user';
import { UserStatus } from 'models/types';

import { useLocale, useTranslations } from 'hooks';
import { InitialScreen } from 'components';

export const SessionContext = createContext({});

export type SessionContextProps = {
  sessionToken: string;
  sid: string;
  setSessionToken: (token: string, expireDate: string) => void;
  updateSessionToken: (token: string, expireDate: string) => void;
  removeSessionToken: () => void;
  logIn: (sessionToken?: string) => void;
  logOut: () => void;
  getUserStatus: (token: string) => void;
};

export const SessionProvider: FC = ({ children }) => {
  const [initialLoadHasFinished, setInitialLoadHasFinished] = useState(false);
  const { i18n } = useTranslations();
  const [contextSessionToken, setContextSessionToken] = useState<string>('');
  const dispatch = useDispatch();
  const { locale } = useLocale();
  const shouldGetNewSessionToken = useSelector(appParamsSelectors.getShouldRequestNewSessionToken);

  const sessionTokenRef = useRef<string | null>(null);

  useEffect(() => {
    if (contextSessionToken) {
      if (sessionTokenRef.current) {
        sessionTokenRef.current = contextSessionToken;
      }
    }
  }, [contextSessionToken]);

  const runLoginActions = useCallback(() => {
    dispatch(appParamsActions.setLoginStatus(true));
    setInitialLoadHasFinished(true);
  }, [dispatch]);

  const userStatusSuccessCallback = useCallback(
    (data: UserStatus) => {
      if (data.logged) {
        dispatch(userActions.setStatus(data));
        runLoginActions();
      } else {
        setInitialLoadHasFinished(true);
      }
    },
    [dispatch, runLoginActions],
  );

  const useStatusCheckFailure = useCallback(() => {
    setInitialLoadHasFinished(true);
  }, []);

  const getUserStatus = useCallback(
    (token: string) => {
      sessionTokenRef.current = token;
      dispatch(
        userRequests.getUserStatus({
          params: { locale, sid: token },
          successCallback: (data) => userStatusSuccessCallback(data),
          failureCallback: useStatusCheckFailure,
        }),
      );
    },
    [dispatch, locale, useStatusCheckFailure, userStatusSuccessCallback],
  );

  const logIn: (token?: string) => void = useCallback(
    (sessionToken?: string) => {
      if (sessionToken) {
        getUserStatus(sessionToken);
      } else {
        runLoginActions();
      }
    },
    [getUserStatus, runLoginActions],
  );

  const removeSessionToken = useCallback(() => {
    keychain_removeSessionToken();
    axiosRemoveAuthToken();
    keychain_removeSessionTokenExpireDate();
  }, []);

  const setSessionToken = useCallback((token: string, expireDate: string) => {
    keychain_setSessionToken(token);
    setContextSessionToken(token);
    axiosSetAuthToken(token);
    keychain_setSessionTokenExpireDate(expireDate);
    setInitialLoadHasFinished(true);
  }, []);

  const getNewSessionToken = useCallback(() => {
    dispatch(
      settingsRequests.getNewSessionToken({
        params: { locale },
        failureCallback: () => setInitialLoadHasFinished(true),
        successCallback: (data) => setSessionToken(data.value, data.expires),
      }),
    );
  }, [dispatch, locale, setSessionToken]);

  const logOut = useCallback(() => {
    if (contextSessionToken) {
      dispatch(
        userRequests.postUserLogout({
          data: { locale, sid: contextSessionToken },
          successCallback: () => {
            dispatch(appParamsActions.setLoginStatus(false));
            removeSessionToken();
            getNewSessionToken();
          },
        }),
      );
    }
  }, [contextSessionToken, dispatch, getNewSessionToken, locale, removeSessionToken]);

  useEffect(() => {
    if (shouldGetNewSessionToken) {
      dispatch(appParamsActions.setLoginStatus(false));
      removeSessionToken();
      Alert.alert(i18n.t('invalid_token_alert_header'), i18n.t('invalid_token_alert_message'), [
        {
          text: i18n.t('invalid_token_alert_header_ok'),
          onPress: () => {
            dispatch(appParamsActions.setShouldRequestNewSessionToken(false));
            getNewSessionToken();
          },
        },
      ]);
    }
  }, [dispatch, getNewSessionToken, i18n, logOut, removeSessionToken, shouldGetNewSessionToken]);

  const getSessionToken = useCallback(() => {
    dispatch(
      settingsRequests.getNewSessionToken({
        params: { locale },
        failureCallback: () => setInitialLoadHasFinished(true),
        successCallback: (data) => setSessionToken(data.value, data.expires),
      }),
    );
  }, [dispatch, locale, setSessionToken]);

  const updateSessionToken = useCallback(
    (token: string, expireDate: string) => {
      getUserStatus(token);
      keychain_setSessionToken(token);
      setContextSessionToken(token);
      axiosSetAuthToken(token);
      keychain_setSessionTokenExpireDate(expireDate);
    },
    [getUserStatus],
  );

  const restoreSessionToken = useCallback((token: string) => {
    setContextSessionToken(token);
    axiosSetAuthToken(token);
  }, []);

  const renderLoadingState = useMemo(() => <InitialScreen />, []);

  useEffect(() => {
    axiosBaseConfig();
    const asyncEffect = async () => {
      const sessionToken = await keychain_getSessionToken();
      const sessionTokenExpireDate = (await keychain_getSessionTokenExpireDate()) as string;

      if (sessionToken) {
        setContextSessionToken(sessionToken);
      }

      const expireDate = dayjs(sessionTokenExpireDate);
      const todayMinus20minutes = dayjs().subtract(20, 'minutes');
      const isSessionTokenExpired = expireDate.isBefore(todayMinus20minutes);

      if (sessionToken && !isSessionTokenExpired) {
        restoreSessionToken(sessionToken);
        logIn(sessionToken);
      } else {
        getSessionToken();
      }
    };
    // eslint-disable-next-line no-void
    void asyncEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sessionValues: SessionContextProps = useMemo(
    () => ({
      sessionToken: contextSessionToken,
      removeSessionToken,
      setSessionToken,
      updateSessionToken,
      sid: contextSessionToken,
      logIn,
      logOut,
      getUserStatus,
    }),
    [contextSessionToken, getUserStatus, logIn, logOut, removeSessionToken, setSessionToken, updateSessionToken],
  );

  return (
    <SessionContext.Provider value={sessionValues}>
      {initialLoadHasFinished && contextSessionToken ? children : renderLoadingState}
    </SessionContext.Provider>
  );
};
