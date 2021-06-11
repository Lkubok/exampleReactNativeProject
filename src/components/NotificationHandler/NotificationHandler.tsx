/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
import React, { FC, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { usePushNotification } from 'hooks';
import { screenNames } from 'navigation';
import { actions as offerActions } from 'store/offers';

const NotificationHandler: FC = () => {
  const {
    notificationType,
    clearNotificationData,
    notificationData,
    setTriggerMarketPlaceRefresh,
  } = usePushNotification();
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  console.log('TEST', notificationData, notificationType);

  const handleNewMessageArrive = useCallback(() => {
    dispatch(offerActions.setCurrentOfferData(null));
    console.log('NOT DATA', notificationData);
    navigate(screenNames.MainStackNames.NewsStack, {
      screen: screenNames.MainFlow.NewsStack.NewsDetail,
      params: { customer_slug: notificationData?.customer_slug, offer_slug: notificationData?.offer_slug },
    });
    clearNotificationData();
  }, [clearNotificationData, dispatch, navigate, notificationData]);

  const handleUserCanEvaluate = useCallback(() => {
    navigate(screenNames.MainStackNames.NewsStack, {
      screen: screenNames.MainFlow.NewsStack.NewsDetail,
      params: { customer_slug: notificationData?.customer_slug, offer_slug: notificationData?.offer_slug },
    });
    clearNotificationData();
  }, [clearNotificationData, navigate, notificationData?.customer_slug, notificationData?.offer_slug]);

  const handleUserWasEvaluated = useCallback(() => {
    navigate(screenNames.MainStackNames.NewsStack, {
      screen: screenNames.MainFlow.NewsStack.NewsDetail,
      params: { customer_slug: notificationData?.customer_slug, offer_slug: notificationData?.offer_slug },
    });
    clearNotificationData();
  }, [clearNotificationData, navigate, notificationData?.customer_slug, notificationData?.offer_slug]);

  const handleNewOffersInMarketPlace = useCallback(() => {
    setTriggerMarketPlaceRefresh(true);
    navigate(screenNames.MainStackNames.MarketPlaceStack, {
      screen: screenNames.MainFlow.MarketPlaceStack.MarketPlaceDashboard,
    });
    clearNotificationData();
  }, [clearNotificationData, navigate, setTriggerMarketPlaceRefresh]);

  const launchPushNotificationHandler = useCallback(() => {
    if (notificationType) {
      switch (notificationType) {
        case 'new_message':
          handleNewMessageArrive();
          break;
        case 'scoring_user_can_evaluate':
          handleUserCanEvaluate();
          break;
        case 'scoring_user_was_evaluated':
          handleUserWasEvaluated();
          break;
        case 'new_offers_in_marketplace':
          handleNewOffersInMarketPlace();
          break;
        default:
          break;
      }
    }
  }, [
    handleNewMessageArrive,
    handleNewOffersInMarketPlace,
    handleUserCanEvaluate,
    handleUserWasEvaluated,
    notificationType,
  ]);

  useEffect(() => {
    if (notificationType) {
      launchPushNotificationHandler();
    }
  }, [launchPushNotificationHandler, notificationType]);

  return <View />;
};

export default NotificationHandler;
