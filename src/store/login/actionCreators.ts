import { SelectedNotificationCategory } from 'models/types';
import * as t from './actionTypes';

import { LoginActionTypes } from './creatorsTypes';

export const logInUser = (): LoginActionTypes => ({
  type: t.LOG_IN_USER,
});

export const logOutUser = (): LoginActionTypes => ({
  type: t.LOG_OUT_USER,
});

export const setUserToken = (token: string): LoginActionTypes => ({
  token,
  type: t.SET_USER_TOKEN,
});

export const setUserLogin = (login: string): LoginActionTypes => ({
  login,
  type: t.SET_USER_LOGIN,
});

export const setSelectedCategory = (selectedCategories: SelectedNotificationCategory): LoginActionTypes => ({
  selectedCategories,
  type: t.SET_SELECTED_NOTIFICATION_CATEGORIES,
});
