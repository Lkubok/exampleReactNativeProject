import { SelectedNotificationCategory } from 'models/types';

import * as actionTypes from './actionTypes';

const { LOG_IN_USER, LOG_OUT_USER, SET_USER_LOGIN, SET_USER_TOKEN, SET_SELECTED_NOTIFICATION_CATEGORIES } = actionTypes;

export interface LoginState {
  isLoggedIn: boolean;
  userLogin: string;
  userToken: string;
  selectedNotificationCatagories: SelectedNotificationCategory[];
}

export interface SetUSerToken {
  type: typeof SET_USER_TOKEN;
  token: string;
}

export interface SetUserLogin {
  type: typeof SET_USER_LOGIN;
  login: string;
}

export interface LogInUser {
  type: typeof LOG_IN_USER;
}

export interface LogOutUser {
  type: typeof LOG_OUT_USER;
}
export interface SetSelectedNotificationCategories {
  selectedCategories: SelectedNotificationCategory;
  type: typeof SET_SELECTED_NOTIFICATION_CATEGORIES;
}

export type LoginActionTypes = SetUSerToken | SetUserLogin | LogInUser | LogOutUser | SetSelectedNotificationCategories;
