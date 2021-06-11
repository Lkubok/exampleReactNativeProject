/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import 'react-native-gesture-handler';

import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import Bugsnag from '@bugsnag/react-native';
import BugsnagPluginReactNavigation from '@bugsnag/plugin-react-navigation';
import RNBootSplash from 'react-native-bootsplash';
import analytics from '@react-native-firebase/analytics';

import Navigation from 'navigation';
import store from 'store';
import {
  LocaleProvider,
  ToastProvider,
  SessionProvider,
  SessionSettingsProvider,
  TabBarVisibilityProvider,
  PushNotificationProvider,
  TypingBoxProvider,
  InternetProvider,
  NetworkErrorProvider,
} from 'contexts';
import { basicTheme } from 'res';
import { axiosBaseConfig, registerLangSlugs, appLinkingDomain, changePasswordLangSlugs } from 'utils';
import { ErrorView, Toast, Notifications } from 'components';
import { screenNames } from 'navigation';

Bugsnag.start({
  plugins: [new BugsnagPluginReactNavigation()],
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const { createNavigationContainer } = Bugsnag.getPlugin('reactNavigation')!;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const BugsnagNavigationContainer = createNavigationContainer(NavigationContainer);

const App: FunctionComponent = () => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  const routeNameRef = useRef<string>();
  const navigationRef = useRef<NavigationContainerRef>();

  useEffect(() => {
    axiosBaseConfig();
  }, []);

  useEffect(() => {
    //TODO remove react native initial splash screen error - before this splash screen - default rn splash screen is turning on
    // eslint-disable-next-line no-void
    void RNBootSplash.hide();
  }, []);

  const config = {
    screens: {
      Auth: {
        screens: {
          [screenNames.AuthFlow.SetPasswordCS]: `cs/${registerLangSlugs.cs}`,
          [screenNames.AuthFlow.SetPasswordEN]: `en/${registerLangSlugs.en}`,
          [screenNames.AuthFlow.SetPasswordDE]: `de/${registerLangSlugs.de}`,
          [screenNames.AuthFlow.SetPasswordPL]: `pl/${registerLangSlugs.pl}`,
          [screenNames.AuthFlow.SetPasswordSK]: `sk/${registerLangSlugs.sk}`,
          [screenNames.AuthFlow.ChangePasswordCS]: `cs/${changePasswordLangSlugs.cs}`,
          [screenNames.AuthFlow.ChangePasswordEN]: `en/${changePasswordLangSlugs.en}`,
          [screenNames.AuthFlow.ChangePasswordDE]: `de/${changePasswordLangSlugs.de}`,
          [screenNames.AuthFlow.ChangePasswordPL]: `pl/${changePasswordLangSlugs.pl}`,
          [screenNames.AuthFlow.ChangePasswordSK]: `sk/${changePasswordLangSlugs.sk}`,
        },
      },
    },
  };

  const linking = {
    prefixes: [`https://${appLinkingDomain}`],
    config,
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorView}>
      <StoreProvider store={store}>
        <LocaleProvider>
          <SessionProvider>
            <SessionSettingsProvider>
              <PushNotificationProvider>
                <ToastProvider>
                  <ThemeProvider theme={basicTheme} useDark={isDarkTheme}>
                    <BugsnagNavigationContainer
                      ref={(navRef: NavigationContainerRef | null) => {
                        navigationRef.current = navRef;
                      }}
                      onReady={() => {
                        routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
                      }}
                      onStateChange={async () => {
                        const previousRouteName = routeNameRef.current;
                        const currentRoute = navigationRef.current?.getCurrentRoute();

                        if (currentRoute?.name && previousRouteName !== currentRoute.name) {
                          await analytics().logScreenView({
                            screen_name: currentRoute.name,
                            screen_class: currentRoute.name,
                          });
                        }

                        routeNameRef.current = currentRoute?.name;
                      }}
                      linking={linking}>
                      <SafeAreaProvider>
                        <TabBarVisibilityProvider>
                          <TypingBoxProvider>
                            <InternetProvider>
                              <NetworkErrorProvider>
                                <Navigation />
                                <Notifications />
                                <Toast />
                              </NetworkErrorProvider>
                            </InternetProvider>
                          </TypingBoxProvider>
                        </TabBarVisibilityProvider>
                      </SafeAreaProvider>
                    </BugsnagNavigationContainer>
                  </ThemeProvider>
                </ToastProvider>
              </PushNotificationProvider>
            </SessionSettingsProvider>
          </SessionProvider>
        </LocaleProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
};

export default App;
