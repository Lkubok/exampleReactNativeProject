/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { selectors as appParamsSelectors } from 'store/appParams';
import Auth from 'navigation/navigators/Auth';
import Main from 'navigation/navigators/Main';

enum NavigatorsNames {
  Auth = 'Auth',
  Main = 'Main',
}

type RootStackParamList = {
  [NavigatorsNames.Auth]: undefined;
  [NavigatorsNames.Main]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation: FunctionComponent = () => {
  const isLoggedIn = useSelector(appParamsSelectors.getIsUserLoggedIn);

  return (
    <Stack.Navigator headerMode="none">
      {isLoggedIn ? (
        <Stack.Screen component={Main} name={NavigatorsNames.Main} />
      ) : (
        <Stack.Screen component={Auth} name={NavigatorsNames.Auth} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
