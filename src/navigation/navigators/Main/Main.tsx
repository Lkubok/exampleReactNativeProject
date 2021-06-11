/* eslint-disable no-console */
import React, { FunctionComponent, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { screenNames } from 'navigation';
import { variables } from 'res';

import CustomTabBar from '../../CustomTabBar';
import {
  AdvisorStack,
  NewOfferStack,
  MarketPlaceStack,
  NewsStack,
  ProfileStack,
  NotificationsSettingsStack,
  ProfileSettingsStack,
  ModalEditOfferStack,
} from './Stacks';
import { FiltersStack } from './Stacks/FiltersStack';
import { ProfiPlanStack } from './Stacks/ProfiPlanStack';
import { useSelector } from 'react-redux';
import { selectors as userSelectors } from 'store/user';
import analytics from '@react-native-firebase/analytics';
import { NewOfferDialogBoxContextProvider } from 'contexts/NewOfferDialogBoxContext';

export type MainStackParamList = {
  [screenNames.MainStackNames.AdvisorStack]: undefined;
  [screenNames.MainStackNames.MarketPlaceStack]: undefined;
  [screenNames.MainStackNames.NewsStack]: undefined;
  [screenNames.MainStackNames.ProfileStack]: undefined;
  [screenNames.MainStackNames.ModalEditOfferStack]: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator: FunctionComponent = () => {
  return (
    <NewOfferDialogBoxContextProvider>
      <Tab.Navigator
        lazy={false}
        tabBarOptions={{
          style: { backgroundColor: variables.colors.overlayHeaderBg },
        }}
        tabBar={({ state, navigation }) => <CustomTabBar state={state} navigate={navigation.navigate} />}
        screenOptions={() => ({ tabBarLabel: () => false })}>
        <Tab.Screen name={screenNames.MainStackNames.MarketPlaceStack} component={MarketPlaceStack} />
        <Tab.Screen name={screenNames.MainStackNames.NewsStack} component={NewsStack} />
        <Tab.Screen name={screenNames.MainStackNames.AdvisorStack} component={AdvisorStack} />
        <Tab.Screen name={screenNames.MainStackNames.ProfileStack} component={ProfileStack} />
      </Tab.Navigator>
    </NewOfferDialogBoxContextProvider>
  );
};

export const MainNavigator: FunctionComponent = () => {
  const profileData = useSelector(userSelectors.getProfileData);

  useEffect(() => {
    if (profileData) {
      analytics()
        .setUserId(profileData.slug as string)
        .catch((err) => console.error(err));

      analytics()
        .setUserProperty('cyrkl_profi', profileData.plan !== 'free' ? 'true' : 'false')
        .catch((err) => console.error(err));
    }
  }, [profileData]);

  return (
    <Stack.Navigator
      initialRouteName={screenNames.MainStackNames.MainTabsStack}
      mode="modal"
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        detachPreviousScreen: false,
        cardStyle: { backgroundColor: variables.colors.transparent },
      }}>
      <Stack.Screen name={screenNames.MainStackNames.MainTabsStack} component={MainTabNavigator} />
      <Stack.Screen
        name={screenNames.MainStackNames.ModalFilterStack}
        component={FiltersStack}
        options={{
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                  {
                    scale: next
                      ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.9],
                        })
                      : 1,
                  },
                ],
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            };
          },
        }}
      />
      <Stack.Screen
        name={screenNames.MainStackNames.ModalProfiPlanStack}
        component={ProfiPlanStack}
        options={{
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                  {
                    scale: next
                      ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.9],
                        })
                      : 1,
                  },
                ],
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            };
          },
        }}
      />
      <Stack.Screen
        name={screenNames.MainStackNames.ModalNewOfferStack}
        component={NewOfferStack}
        options={{
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                  {
                    scale: next
                      ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.9],
                        })
                      : 1,
                  },
                ],
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            };
          },
        }}
      />
      <Stack.Screen
        name={screenNames.MainStackNames.ModalNotificationsSettingsStack}
        component={NotificationsSettingsStack}
        options={{
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                  {
                    scale: next
                      ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.9],
                        })
                      : 1,
                  },
                ],
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            };
          },
        }}
      />
      <Stack.Screen
        name={screenNames.MainStackNames.ModalProfileSettingsStack}
        component={ProfileSettingsStack}
        options={{
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                  {
                    scale: next
                      ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.9],
                        })
                      : 1,
                  },
                ],
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            };
          },
        }}
      />
      <Stack.Screen
        name={screenNames.MainStackNames.ModalEditOfferStack}
        component={ModalEditOfferStack}
        options={{
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                  {
                    scale: next
                      ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.9],
                        })
                      : 1,
                  },
                ],
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            };
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
