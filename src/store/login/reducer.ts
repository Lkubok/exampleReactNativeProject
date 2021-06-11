import * as t from './actionTypes';
import { LoginState, LoginActionTypes } from './creatorsTypes';
import { filter } from 'lodash';

export const initialValues: LoginState = {
  isLoggedIn: false,
  userLogin: '',
  userToken: '',
  selectedNotificationCatagories: [],
};

const loginReducer = (state = initialValues, action: LoginActionTypes): LoginState => {
  switch (action.type) {
    case t.LOG_IN_USER:
      return { ...state, isLoggedIn: true };
    case t.LOG_OUT_USER:
      return { ...state, isLoggedIn: false };
    case t.SET_USER_TOKEN:
      return { ...state, userToken: action.token };
    case t.SET_USER_LOGIN:
      return { ...state, userLogin: action.login };
    case t.SET_SELECTED_NOTIFICATION_CATEGORIES:
      return {
        ...state,
        selectedNotificationCatagories: [
          ...filter(
            state.selectedNotificationCatagories,
            (cat) => cat.categoryID !== action.selectedCategories.categoryID,
          ),
          action.selectedCategories,
        ],
      };
    default:
      return state;
  }
};

export default loginReducer;
