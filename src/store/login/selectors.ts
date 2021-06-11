import { SelectedNotificationCategory } from 'models/types';
import { RootReducerState } from 'store/reducers';

export const getIsLoggedIn: (state: RootReducerState) => boolean = (state) => state.login.isLoggedIn;
export const getUserToken: (state: RootReducerState) => string = (state) => state.login.userToken;
export const getUserEmail: (state: RootReducerState) => string = (state) => state.login.userLogin;
export const getSelectedCategories: (state: RootReducerState) => SelectedNotificationCategory[] = (state) =>
  state.login.selectedNotificationCatagories;
