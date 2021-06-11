/* eslint-disable no-console */
import React, { FunctionComponent, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { screenNames } from 'navigation';
import analytics from '@react-native-firebase/analytics';
import {
  LoginScreen,
  NotificationSetupScreen,
  RegisterScreen,
  ResetPasswordScreen,
  CompanyInfoScreen,
  SetPasswordScreen,
  ChangePasswordScreen,
  NotificationSubCategories,
} from 'screens';

export type AuthStackParamList = {
  [screenNames.AuthFlow.CompanyInfo]: undefined;
  [screenNames.AuthFlow.Login]: undefined;
  [screenNames.AuthFlow.NotificationSetup]: undefined;
  [screenNames.AuthFlow.Register]: undefined;
  [screenNames.AuthFlow.ResetPassword]: undefined;
  [screenNames.AuthFlow.NotificationSubCategories]: { id: number };
  [screenNames.AuthFlow.SetPasswordCS]: { token: string };
  [screenNames.AuthFlow.SetPasswordSK]: { token: string };
  [screenNames.AuthFlow.SetPasswordPL]: { token: string };
  [screenNames.AuthFlow.SetPasswordDE]: { token: string };
  [screenNames.AuthFlow.SetPasswordEN]: { token: string };
  [screenNames.AuthFlow.ChangePasswordCS]: { token: string };
  [screenNames.AuthFlow.ChangePasswordSK]: { token: string };
  [screenNames.AuthFlow.ChangePasswordPL]: { token: string };
  [screenNames.AuthFlow.ChangePasswordDE]: { token: string };
  [screenNames.AuthFlow.ChangePasswordEN]: { token: string };
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: FunctionComponent = () => {
  useEffect(() => {
    analytics()
      .setUserId(null)
      .catch((err) => console.error(err));

    analytics()
      .setUserProperty('cyrkl_profi', null)
      .catch((err) => console.error(err));
  });

  return (
    <Stack.Navigator
      initialRouteName={screenNames.AuthFlow.Login}
      screenOptions={{ gestureEnabled: true, headerShown: false }}>
      <Stack.Screen component={LoginScreen} name={screenNames.AuthFlow.Login} />
      <Stack.Screen component={NotificationSetupScreen} name={screenNames.AuthFlow.NotificationSetup} />
      <Stack.Screen component={RegisterScreen} name={screenNames.AuthFlow.Register} />
      <Stack.Screen component={ResetPasswordScreen} name={screenNames.AuthFlow.ResetPassword} />
      <Stack.Screen component={CompanyInfoScreen} name={screenNames.AuthFlow.CompanyInfo} />
      <Stack.Screen component={NotificationSubCategories} name={screenNames.AuthFlow.NotificationSubCategories} />
      <Stack.Screen
        component={SetPasswordScreen}
        name={screenNames.AuthFlow.SetPasswordCS}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        component={SetPasswordScreen}
        name={screenNames.AuthFlow.SetPasswordSK}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        component={SetPasswordScreen}
        name={screenNames.AuthFlow.SetPasswordPL}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        component={SetPasswordScreen}
        name={screenNames.AuthFlow.SetPasswordDE}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        component={SetPasswordScreen}
        name={screenNames.AuthFlow.SetPasswordEN}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen component={SetPasswordScreen} name={screenNames.AuthFlow.ChangePasswordCS} />
      <Stack.Screen component={ChangePasswordScreen} name={screenNames.AuthFlow.ChangePasswordSK} />
      <Stack.Screen component={ChangePasswordScreen} name={screenNames.AuthFlow.ChangePasswordPL} />
      <Stack.Screen component={ChangePasswordScreen} name={screenNames.AuthFlow.ChangePasswordDE} />
      <Stack.Screen component={ChangePasswordScreen} name={screenNames.AuthFlow.ChangePasswordEN} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
